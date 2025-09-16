import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint
// Serve static files from the 'dist' directory
const buildPath = path.join(__dirname, '../dist');
app.use(express.static(buildPath));

// Handle all other requests by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jmohdkashif@gmail.com',
      replyTo: email,
      subject: `New message from ${name} via Portfolio Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #14b8a6, #0d9488); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h2 style="color: white; margin: 0;">New Portfolio Contact</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #14b8a6;">Name:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #14b8a6;">${name}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #14b8a6;">Email:</strong>
              <p style="margin: 5px 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #14b8a6;">${email}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #14b8a6;">Message:</strong>
              <p style="margin: 5px 0; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #14b8a6; line-height: 1.6;">${message}</p>
            </div>
          </div>
          <div style="padding: 15px; text-align: center; background: #f0f0f0; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; color: #666; font-size: 14px;">Sent from your Portfolio Website</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.json({
      success: false,
      message: 'Failed to send email'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});