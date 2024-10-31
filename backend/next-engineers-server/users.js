const express = require('express');
const router = express.Router();
const {User, validateUser} = require('./user')
const jwt = require('jsonwebtoken')
const fs = require('fs'); // Import the fs module
const path = require('path');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User with the given ID was not found');
    }
    res.send(user);
  } catch (err) {
    res.status(400).send('Invalid ID format');
  }
});

// Create a new user (POST)
router.post('/signup', async (req, res) => {
    // Validate the request body
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
  
    // Check if the user already exists by email or sub
    const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { sub: req.body.sub }] });
    if (existingUser) {
      return res.status(400).send('User with this email or sub already exists');
    }
  
    // Create a new user
    const user = new User({
      email: req.body.email,
      email_verified: req.body.email_verified || false,
      given_name: req.body.given_name || '',
      name: req.body.name,
      picture: req.body.picture || '',
      sub: req.body.sub
    });
  
    try {
      const savedUser = await user.save(); // Save the user instance
      res.send(savedUser);
      console.log("Signup request body:", req.body);

    } catch (err) {
      const errorMessages = Object.values(err.errors || {}).map(e => e.message);
      res.status(400).send(errorMessages.join(', '));
    }
  });

  // Sign-in: Login an existing user
router.post('/signin', async (req, res) => {
  const { email, sub } = req.body;

  // Check if the user exists based on email or sub
  const existingUser = await User.findOne({ $or: [{ email }, { sub }] });
  if (!existingUser) {
    return res.status(404).send('User not found');
  }

  // If user exists, return user data (or a token in case of JWT-based auth)
  //JWT
  const jwtSecretPath = '/etc/secrets/SECRET_KEY_JWT';
  const jwtSecret = fs.readFileSync(jwtSecretPath, 'utf8').trim();

  // Generate JWT
  const token = jwt.sign({ _email: email, _sub: sub }, jwtSecret);

  res.send({ user: existingUser, token: token }); 
  // res.send(existingUser); 
  console.log("Signin request body:", req.body);
});
  

// Update a user (PUT)
router.put('/:id', async (req, res) => {
  // Validate the request body
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        given_name: req.body.given_name,
        email_verified: req.body.email_verified,
        picture: req.body.picture,
        sub: req.body.sub,
        updatedAt: Date.now()  // Update the updatedAt field
      },
      { new: true, runValidators: true }  // Return the updated document, enforce validation
    );

    if (!updatedUser) {
      return res.status(404).send('User with the given ID was not found');
    }

    res.send(updatedUser);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

// Delete a user (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send('User with the given ID was not found');
    }
    res.send(user);
  } catch (err) {
    res.status(400).send('Invalid ID or something went wrong');
  }
});

module.exports = router;
