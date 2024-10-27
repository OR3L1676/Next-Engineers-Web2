const cors = require('cors');
const users = require('./users')
const forms = require('./forms')
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const app = express()


// Connect to MongoDB
mongoose.connect('mongodb://localhost/users')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect MongoDB', err));


  // Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../../dist')));

// Handle any other requests by serving the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../dist/index.html'));
});

// Enable CORS
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from frontend

// For preflight requests (OPTIONS)
app.options('*', cors());

// app.set('view engine', 'pug')
// app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/users', users)
app.use('/api/forms', forms)
// app.use('/', homepage)


// //Configuration
// console.log('Aplication Name: ' + config.get('name'));
// console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password'));

// app.use(authentic)


// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))