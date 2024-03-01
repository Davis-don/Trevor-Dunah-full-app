
const express=require('express')
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const cors = require('cors'); 
app.use(cors());

const nodemailer=require('./nodemailerHandler')
app.use('api/Send/email',nodemailer)

// app.use('/',(req,res)=>{
//     res.send('server is running')
// })
app.listen(4000,(error)=>{
    if(error) throw error
    console.log('listening to port 4000')
})