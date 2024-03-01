import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
    const [flowdown,setFlowdown]=useState(false)
    const [contactComponent,setcontactComponent]=useState(false)
    const[home,setHome]=useState(false)
    const [about,setAbout]=useState(false)
    const [services,setServices]=useState (false)
    //alert(window.location.pathname)
    useEffect(()=>{
      if(window.location.pathname=='/'){
        setHome(true)
      }
      else if(window.location.pathname=='/services/About'){
      setAbout(true)
      }
      else{
  setServices(true)
      }
    },[])
   
  return (
    <div className='overall-sidebar-hoster-contact'>
          <div className='menu-icon-component-overall'>
    <ul className='list-unstyled sidelinks-ul'>
        <li className={home ? "activeLink" : ''}><Link to='/' className='text-light fs-5' style={{textDecoration:'none'}}>Home</Link></li>
        <li className={services ? 'activeLink':''} onClick={()=>setFlowdown(!flowdown)}>
          <li className='text-light fs-5'>Services</li>         
        </li>
        {flowdown && <ul className=" flow-down-btn list-unstyled">
      <li className='text-light'><Link to='/services/master of ceremony' className='text-light'style={{textDecoration:'none'}}> Master of ceremony</Link></li>
      <li className='text-light'><Link to='/services/Lifecoach' className='text-light'style={{textDecoration:'none'}}> Life coach</Link></li>
      <li className='text-light'><Link to='/services/fitness coach' className='text-light'style={{textDecoration:'none'}}>Fitness trainer</Link></li> 
    </ul>}
    <li  className={about ? 'activeLink' : ''}><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/services/About'> About</Link></li>
    <li className='text-light fs-5' onClick={()=>setcontactComponent(true)}>Contact</li>
    </ul>
   
    </div>
    {contactComponent && <div className='contact-item-sidebar-holder'>
    <div className='close-icon'onClick={()=>setcontactComponent(false)}>
      <IoMdClose className='text-warning fs-1'/>
      </div>
      <div className='actual-contact-now'>
      <Contact/>
      </div>
    
    </div>
}
    </div>


  )
}