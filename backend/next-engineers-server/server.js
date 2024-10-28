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
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from frontend

// For preflight requests (OPTIONS)
app.options('*', cors());

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
