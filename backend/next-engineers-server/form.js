const mongoose = require('mongoose');
const Joi = require('joi');

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 20,
        validate: {
            validator: function(v) {
                return v === "" || /^[a-zA-Z\u0590-\u05FF\s]+$/.test(v); // Allow empty string or valid name
            },
            message: props => `${props.value} אינו שם פרטי תקין!`
        },
    },
    lastName: {
        type: String,
        maxlength: 20,
        validate: {
            validator: function(v) {
                return v === "" || /^[a-zA-Z\u0590-\u05FF\s]+$/.test(v); // Allow empty string or valid name
            },
            message: props => `${props.value} אינו שם משפחה תקין!`
        },
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v); // Allow exactly 10 digits
            },
            message: props => `${props.value} אינו מספר טלפון תקין!`
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v); // Standard email regex
            },
            message: props => `${props.value} אינה כתובת מייל תקינה!`
        }
    },
    address: {
        type: String,
        maxlength: 50,
        validate: {
            validator: function(v) {
                return v === "" || /^[a-zA-Z0-9\u0590-\u05FF\s.,!?"'()-]+$/.test(v); // Allow empty string or valid address
            },
            message: props => `${props.value} אינה כתובת תקינה!`
        }
    },
    message: {
        type: String,
        maxlength: 300,
        validate: {
            validator: function(v) {
                return v === "" || /^[a-zA-Z0-9\u0590-\u05FF\s.,!?"'()-]+$/.test(v); // Allow empty string or valid message
            },
            message: props => `${props.value} אינה הודעה תקינה!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Form = mongoose.model('Form', formSchema);

function validateForm(req) {
    const schema = Joi.object({
        firstName: Joi.string()
            .max(20)
            .regex(/^[a-zA-Z\u0590-\u05FF\s]*$/) // Change from + to * to allow empty strings
            .message('{{#label}} אינו שם פרטי תקין!')
            .allow(''), // Allow empty string

        lastName: Joi.string()
            .max(20)
            .regex(/^[a-zA-Z\u0590-\u05FF\s]*$/) // Change from + to * to allow empty strings
            .message('{{#label}} אינו שם משפחה תקין!')
            .allow(''), // Allow empty string

        phone: Joi.string()
            .required()
            .regex(/^[0-9]{10}$/)
            .message('{{#label}} אינו מספר טלפון תקין!'),

        email: Joi.string()
            .required()
            .email()
            .message('{{#label}} אינה כתובת מייל תקינה!'),

        address: Joi.string()
            .max(50)
            .regex(/^[a-zA-Z0-9\u0590-\u05FF\s.,!?"'()-]*$/) // Change from + to * to allow empty strings
            .message('{{#label}} אינה כתובת תקינה!')
            .allow(''), // Allow empty string

        message: Joi.string()
            .max(300)
            .regex(/^[a-zA-Z0-9\u0590-\u05FF\s.,!?"'()-]*$/) // Change from + to * to allow empty strings
            .message('{{#label}} אינה הודעה תקינה!')
            .allow(''), // Allow empty string

        createdAt: Joi.date().default(Date.now),
    });
    return schema.validate(req);
}

exports.Form = Form;
exports.validateForm = validateForm;
