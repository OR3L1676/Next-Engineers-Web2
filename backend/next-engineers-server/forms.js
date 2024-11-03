const express = require('express');
const router = express.Router();
const { Form, validateForm } = require('./form');
const nodemailer = require('nodemailer'); // Import nodemailer

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service (e.g., Gmail)
    auth: {
        user: 'next.engineers.post@gmail.com', // Your email
        pass: 'logk cqyf vzsy fxnc'
    },
});

// Get all forms
router.get('/:token', async (req, res) => {
    try {
    const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
    const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded._admin !== true)  {
      return res.status(403).send('Invalid token');
    }  
        const forms = await Form.find();
        res.send(forms);
    } catch (err) {
        res.status(500).send('Something went wrong');
    }
});

// Get form by id
router.get('/:id/:token', async (req, res) => {
    try {
    const jwtSecret = fs.readFileSync('/etc/secrets/SECRET_KEY_JWT', 'utf8').trim();
    const decoded = jwt.verify(token, jwtSecret)

    if(!decoded || decoded._admin !== true)  {
      return res.status(403).send('Invalid token');
    }  
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).send('Form with the given ID was not found');
        }
        res.send(form); // Add response for successful retrieval
    } catch (err) {
        res.status(400).send('Invalid ID format');
    }
});

// Post a form
router.post('/', async (req, res) => {
    const { error } = validateForm(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const form = new Form({
        firstName: req.body.firstName || '',
        lastName: req.body.lastName || '',
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address || '',
        message: req.body.message || '',
        createdAt: Date.now(),
    });

    try {
        const savedForm = await form.save();

        // Send email with form data
        await transporter.sendMail({
            from: 'next.engineers.post@gmail.com', // Sender address
            to: 'orelush555@gmail.com', // List of recipients
            subject: 'יצירת קשר - מהנדסי הדור הבא', // Subject line
            html: `
            <div style="direction: rtl; font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
                <h2 style="color: #4CAF50; text-align: center;">יצירת קשר חדש - מהנדסי הדור הבא</h2>
                <p>הודעה חדשה מהאתר נקלטה בהצלחה:</p>
                <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">שם פרטי:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.firstName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">שם משפחה:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">טלפון:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">מייל:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">כתובת מגורים:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.address}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">הודעה:</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${form.message}</td>
                    </tr>
                </table>
                <p style="text-align: center; color: #999;">© כל הזכויות שמורות למהנדסי הדור הבא</p>
            </div>
            `, // HTML body
        });
        

        res.send(savedForm);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
