
const express=require('express')
const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const cors = require('cors'); 
app.use(cors());

const nodemailer=require('./nodemailerHandler')
app.use('/Send/email',nodemailer)

app.listen(4000,(error)=>{
    if(error) throw error
    console.log('listening to port 4000')
})