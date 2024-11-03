const express = require('express');
const router = express.Router();
const {User, validateUser} = require('./user')
const jwt = require('jsonwebtoken')
const fs = require('fs'); // Import the fs module
const path = require('path');

function jwtGeneration(sId, sEmail, sSub, sAdmin) {
  //JWT
  const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
  // Generate JWT
  const token = jwt.sign({_id: sId ,email: sEmail, sub: sSub, admin: sAdmin }, jwtSecret);
  return(token); 
}

// Get all users
router.get('/:token', async (req, res) => {
  const {token} = req.params;
  try {
    const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
    const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded.admin !== true)  {
      return res.status(403).send('Invalid token');
    }  

    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

// Get a user by ID
router.get('/:id/:token', async (req, res) => {
  const {id ,token} = req.params;

  try {
    const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
    const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded._id !== id || decoded.admin === true)  {
      return res.status(403).send('Invalid token');
    }     
    
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
      sub: req.body.sub,
      admin: false
    });
  
    try {
      const savedUser = await user.save(); 
      const token = jwtGeneration(savedUser.id, savedUser.email, savedUser.sub, savedUser.admin)
      res.send({ user: savedUser, token: token }); 
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
  
  const token = jwtGeneration(existingUser.id, email, sub, existingUser.admin)
  res.send({ user: existingUser, token: token }); 

  console.log("Signin request body:", req.body);
});
  

// Update a user (PUT)
router.put('/:id/:token', async (req, res) => {
  // Validate the request body
  const {id ,token} = req.params;
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
  const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded._id !== id || decoded.admin === true)  {
      return res.status(403).send('Invalid token');
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
        admin: req.body.admin,
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
router.delete('/:id/:token', async (req, res) => {
  const {id, token} = req.params;
  try {
    const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
    const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded._id !== id || decoded.admin === true)  {
      return res.status(403).send('Invalid token');
    }     

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
