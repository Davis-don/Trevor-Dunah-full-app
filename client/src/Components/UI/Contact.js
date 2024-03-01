import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {
  return (
    <div className='overall-contact-component'>
        <form className='contact-form text-light'>
            <div className='form-overall-div'>
            <div>
                <ul className='list-unstyled'>
            <li>
            <label style={{width:'100%'}}> Name
            <input className='form-control'placeholder='Enter full names'/>
            </label>
            </li>
            <li>
            <label style={{width:'100%'}}> Email
            <input className='form-control'placeholder='Enter Email'/>
            </label>
            </li>
            <li>
            <label style={{width:'100%'}}> Contact
            <input className='form-control'placeholder='Enter contact'/>
            </label>
            </li>
            </ul>
            </div>
            <div>
                <label style={{width:'100%'}}> Message
                <textarea className='form-control' placeholder='send message...'/>
                </label>
               
            </div>
            </div>
            <div className='form-submit-btn-holder'>
                <button style={{backgroundColor:'purple'}} type='submit'  className='btn btn-lg'>Submit</button>
            </div>
        </form>
        </div>
  )
}