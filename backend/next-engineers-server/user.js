const mongoose = require('mongoose')
const Joi = require('joi')

// Define the User schema
const usersSchema = new mongoose.Schema({
    email: { 
      type: String, 
      required: true,
      unique: true  // Enforce email uniqueness
    },
    email_verified: { 
      type: Boolean, 
      default: false  // Assume email is not verified initially
    },
    given_name: String,
    name: { 
      type: String, 
      required: true 
    },
    picture: String,
    sub: { 
      type: String, 
      required: true, 
      unique: true  // Ensure each Google user is unique
    },
    admin: {
      type: Boolean
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    updatedAt: { 
      type: Date, 
      default: Date.now 
    }
  });
  
  const User = mongoose.model('User', usersSchema);

  // Validation function for user
  function validateUser(req) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      email_verified: Joi.boolean(),
      given_name: Joi.string().allow(''), // Allow empty string for given name
      name: Joi.string().required(),
      picture: Joi.string().uri().allow(''), // Allow empty string and validate as URI if present
      sub: Joi.string().required(),
      admin: Joi.boolean()
    });
    return schema.validate(req);
  }

  exports.User = User
  exports.validateUser = validateUser