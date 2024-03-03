var express = require('express')
var cors = require('cors')
var app = express()
const nodemailer = require('nodemailer');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const corsOptions = {
    origin: 'https://trevordunah.vercel.app', // Replace with your allowed origin or use a function for dynamic configuration
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable credentials (cookies, HTTP authentication) across domains
    optionsSuccessStatus: 204, // Set the response status for successful preflight requests
  };
  app.use(cors(corsOptions));


app.get('/',(req,res)=>{
    res.send('server is running')
})
app.post('/',(req,res)=>{
  
    //const {Name,Email,Contact,Message}=req.body
    res.status(200).json({message:'email sent successfully'})
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