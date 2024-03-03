var express = require('express')
var cors = require('cors')
var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const nodemailer = require('nodemailer');
require('dotenv').config();

// app.get('/',cors,(req,res,next)=>{
//     res.send('server is running')
// })
app.post('/',cors(),(req,res,next)=>{
  
    //const {Name,Email,Contact,Message}=req.body
    res.status(200).json({message:'email sent successfully'})
    next();
    // const TextMessage=
    // `Name ${Name}
    // Contact ${Contact}
    // Message ${Message}
    // `
    //   const transporter = nodemailer.createTransport({
    //       service: 'gmail',
    //       auth: {
    //           user: process.env.UserEmail,
    //           pass: process.env.password
    //       }
    //   });
      
    //   const mailOptions = {
    //       from: 'davismadaviaso@gmail.com',
    //       to: Email,
    //       subject: 'Message from your portfolio app',
    //       text: TextMessage
    //   };
      
    //   transporter.sendMail(mailOptions, (error, info) => {
    //       if (error) {
    //           console.error(error);
    //       } else {
    //         res.status(200).json({message:'email sent successfully'})
    //           console.log('Email sent: ' + info.response);
    //       }
    //   });
         
    })



app.listen(4000,(error)=>{
    if(error) throw error
    console.log('listening to port 4000')
})