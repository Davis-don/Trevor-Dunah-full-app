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

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.UserEmail,
//       pass: process.env.password
//     }
//   });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '587',
  secure: false, // Set to false when using port 587
  auth: {
    user: 'process.env.UserEmail',
    pass: 'process.env.password'
  },
  tls: {
    rejectUnauthorized: false
  }
});

                

app.get('/',(req,res)=>{
    res.send('server is running')
})
app.post('/',(req,res)=>{
  
    const {Name,Email,Contact,Message}=req.body

    const TextMessage=
    `Name ${Name}
    Contact ${Contact}
    Message ${Message}
    `

    const mailOptions = {
        from: Email,
        to: process.env.UserEmail,
        subject: 'Mail from your portfolio',
        text: TextMessage
      };


      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          //return res.status(500).send(error.toString());
          console.log(error)
        }
        //res.status(200).send('Email sent: ' + info.response);
        res.status(200).json({message:'email sent successfully'})
      });
    });
    
   
     
app.listen(4000,(error)=>{
    if(error) throw error
    console.log('listening to port 4000')
})