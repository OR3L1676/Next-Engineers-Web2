const cors = require('cors');
const users = require('./users');
const forms = require('./forms');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); 
require('dotenv').config({ path: '../../.env' });
const app = express();

const dbURI = process.env.MONGODB_URI;  // Update to MONGODB_URI

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect MongoDB', err));

// Enable CORS
const allowedOrigins = ['https://www.nextengineers.co.il','https://next-engineers-web2.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api/users', users);
app.use('/api/forms', forms);

// PORT
const port = process.env.PORT || 4173;
app.listen(port, () => console.log(`Listening on port ${port}...`));
