import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './UI/Contact';


import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [contactComponent,setcontactComponent]=useState(false)
    const [sidebar,setSidebar]=useState(false)
    const [menuicon,setMenuicon]=useState(true)
    const [closeIcon,setCloseicon]=useState(false)
    const [flowdown,setFlowdown]=useState(false)
    const[home,setHome]=useState(false)
    const [about,setAbout]=useState(false)
    const [services,setServices]=useState (false)
    useEffect(()=>{
      if(window.location=='http://localhost:3000/'){
        setHome(true)
      }
      else if(window.location=='http://localhost:3000/services/About'){
      setAbout(true)
      }
      else{
  setServices(true)
      }
    },[])
  return (
    <div className='header-overall-component '>
         <div className='top-header-contact-section'>

</div>
 <div className='overall-bottom-header'>
 <div className='bottom-header-navbar-section'>
<h2 className='text-light Trevor-Dunah-name'>Trevor Dunah</h2>
<p className='text-light proficiency-summary container-fluid'><span className='proficiency-title'>Speaker</span> <span className='proficiency-title'>Author</span><span className='proficiency-title'>Leader</span> </p>
 </div>
 <div className='menu-icon' onClick={()=>{setSidebar(!sidebar);}}>
 {menuicon && <FaBars className=' fs-1' style={{color: 'purple'}} />}
 {closeIcon && <IoMdClose FaBars className=' fs-1' style={{color: 'purple'}} />}
</div>




<div className='right-side-largescreen-links'>
    <div className='desktop-view-nav-links'>
        <ul className='list-unstyled'>
            <li  className= 'text-light fs-5'><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/'> Home</Link></li>
   
    <li className='text-light fs-5' onClick={()=>setFlowdown(!flowdown)}>
      Services
    </li>
    {flowdown && <div   className='drop-down-div'>
        <ul className='list-unstyled drop-down-ul'>
            <li className='text-light'><Link to='/services/master of ceremony' className='text-light fs-5'style={{textDecoration:'none'}}>Emcee</Link></li>
            <li className='text-light'><Link to='/services/Lifecoach' className='text-light fs-5'style={{textDecoration:'none'}}>Life coach</Link></li>
            <li className='text-light'><Link to='/services/fitness coach' className='text-light fs-5'style={{textDecoration:'none'}}>Fitness trainer</Link></li>
            
        </ul>
    </div>
    }
  
            <li  className='text-light fs-5'><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/services/About'> About</Link></li>
            <li className='text-light fs-5' onClick={()=>{setcontactComponent(true);setSidebar(false)}}>Contact</li>
        </ul>
    </div>
        <div className='top-nav-book-btn'onClick={()=>setcontactComponent(true)}>
            <p className='text-light' style={{textAlign:'center',marginTop:'2px'}}>Book Trevor</p>
        </div>
    
</div>




 </div>
 {/* { sidebar && <div className='sidebar-homepage-display'>
 <div className='close-icon'onClick={()=>setSidebar(false)}>
      <IoMdClose className='text-light fs-1'/>
      </div>
      <div className='sidebar-retainer-item'>
      <Sidebar/>
      </div>
 </div>} */}
      { contactComponent &&  <div className='contact-header-display-items'>
      <div className='close-icon'onClick={()=>setcontactComponent(false)}>
      <IoMdClose className='text-light fs-1'/>
      </div>
      <div className='contact-retainer-item'>
      <Contact/>
      </div>
      
    </div>
}
 
    </div>
  )
}