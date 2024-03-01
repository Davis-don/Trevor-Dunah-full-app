import React from 'react'
import { useState } from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {
const [message,setMesage]=useState("")
const [alertitem,setAlertitem]=useState(false)
const [form,setForm]=useState(true)
   
const [emailData,setEmailData]=useState({
    Name:'',
    Email:'',
    Contact:'',
    Message:''
})
    let updateInfo=(e)=>{
   setEmailData({
    ...emailData,[e.target.name]:e.target.value
   })
    }
    let handlepost = async (e)=>{
        e.preventDefault();
try{
const response= await fetch ('https://trevordunahappserver.vercel.app/',{
    method:'post',
    headers:{
        "content-type":'application/json'
    },
    body:JSON.stringify(emailData)
})
if(response){
    const data=await response.json();
    setAlertitem(true)
    setForm(false)
    setMesage(data.message)
    setTimeout(() => {
        setForm(true)
        setAlertitem(false)
    }, 4000);
    
}
else{
    const errordata=await response.json();
    console.log(errordata)
}
}
catch (error){
    console.log(error)
}
    }
  return (
    <div className='overall-contact-component'>
         {alertitem && <div class="alert alert-success alert-dismissible fade show">
    <strong>{message}</strong> 
  </div>}
        {form && <form className='contact-form text-light' onSubmit={handlepost}>
            <div className='form-overall-div'>
            <div>
                <ul className='list-unstyled'>
            <li>
            <label style={{width:'100%'}}> Name
            <input onChange={updateInfo} name='Name' className='form-control'placeholder='Enter full names'/>
            </label>
            </li>
            <li>
            <label style={{width:'100%'}}> Email
            <input name='Email' onChange={updateInfo}  className='form-control'placeholder='Enter Email'/>
            </label>
            </li>
            <li>
            <label style={{width:'100%'}}> Contact
            <input onChange={updateInfo} name='Contact' className='form-control'placeholder='Enter contact'/>
            </label>
            </li>
            </ul>
            </div>
            <div>
                <label style={{width:'100%'}}> Message
                <textarea onChange={updateInfo} name='Message' className='form-control' placeholder='send message...'/>
                </label>
               
            </div>
            </div>
            <div className='form-submit-btn-holder'>
                <button style={{backgroundColor:'purple'}} type='submit'  className='btn btn-lg'>Submit</button>
            </div>
        </form>
}
        </div>
  )
}
