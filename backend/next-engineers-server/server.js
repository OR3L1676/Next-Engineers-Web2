const cors = require('cors');
const users = require('./users');
const forms = require('./forms');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: '../../.env' }); // Adjust the path accordingly
const app = express();

const dbURI = process.env.MONGODB_URI;  // Update to MONGODB_URI

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect MongoDB', err));

// Enable CORS
const allowedOrigins = [
  'https://next-engineers-web2.onrender.com', // Replace with your production frontend URL
  'http://localhost:4173', // Local development URL
];

app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api/users', users);
app.use('/api/forms', forms);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
