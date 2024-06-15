"use server";

// import { emailTransporter } from "./utils";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_KEY
    }
});

export const sendEmail = async (prevState, formData) => {
  
  const {  name, email, message } = Object.fromEntries(formData);
  console.log( name, email, message)


  try {

    const mailOptions = {
      from: 'Jerry J photography <abdurrahmanidris235@gmail.com>',
      to: 'abdurrahmanidris235@gmail.com',
      subject: `New Message from Website`,
      html: `<html><p>You got a new message from ${name}.</p><p>Email: ${email}.</p><p>Message: ${message}</p></html>`
    };
    
    // Send the email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error sending email:', error);
        return {
          status: 'error',
          message: 'Opps, there was an error'
        };
      } else {
        console.log('Email sent successfully');
        return {
          status: 'success',
          message: 'Email sent successfully'
        };
      }
    });
    return {
      status: 'success',
      message: 'Email sent successfully'
    };

  } catch (error) {
      console.error('Error sending email:', error);
      return {
        status: 'error',
        message: 'Failed, Error: 500'
      };
  }

};


