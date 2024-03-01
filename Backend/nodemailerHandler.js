const express=require('express')
const routes=express.Router()
const nodemailer = require('nodemailer');
require('dotenv').config();


routes.post('/',(req,res)=>{
  
const {Name,Email,Contact,Message}=req.body
const TextMessage=
`Name ${Name}
Contact ${Contact}
Message ${Message}
`
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.UserEmail,
          pass: process.env.password
      }
  });
  
  const mailOptions = {
      from: 'davismadaviaso@gmail.com',
      to: Email,
      subject: 'Message from your portfolio app',
      text: TextMessage
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error(error);
      } else {
        res.status(200).json({message:'email sent successfully'})
          console.log('Email sent: ' + info.response);
      }
  });
     
})
module.exports=routes