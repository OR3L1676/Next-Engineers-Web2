const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "flothes.shop@gmail.com",
      pass: "Orel16761676",
    },
  });

  const mailOptions = {
    from: email,
    to: "orelush1234@gmail.com",
    subject: "Contact Form Submission",
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
