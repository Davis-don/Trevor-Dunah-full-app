import React from 'react'
import './About.css'
import { useState,useEffect } from 'react'
import Footer from '../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Sidebar from '../Components/UI/Sidebar'
import { IoMdClose } from "react-icons/io";
import Contact from '../Components/UI/Contact'

export default function About() {
  const [sidebar,setSidebar]=useState(false)
  function Header(){
    const [contactComponent,setcontactComponent]=useState(false)
    const [menuicon,setMenuicon]=useState(true)
    const [closeIcon,setCloseicon]=useState(false)
    const [flowdown,setFlowdown]=useState(false)
  

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
              <li  className='text-light fs-5'><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/'> Home</Link></li>
     
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
    
              <li  className= 'text-light fs-5 activeLink'><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/services/About'> About</Link></li>
              <li className='text-light fs-5' onClick={()=>{setcontactComponent(true);setSidebar(false)}}>Contact</li>
          </ul>
      </div>
          <div className='top-nav-book-btn'onClick={()=>setcontactComponent(true)}>
              <p className='text-light' style={{textAlign:'center',marginTop:'2px'}}>Book Trevor</p>
          </div>
      
  </div>
  
  
  
  
   </div>
   
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
  return (
<div className='overall-about-page'>
    <header>
    <Header/> 
    </header>
    <div className='about-body'>
<div className='intoduction-top-about-section'>
<img className='about-top-intro-background'src='/Images/IMG_4933.jpg'/>
<div className='top-img-opacity-regulator'></div>
<div className='on-top-about-image-text'>
 <h2 className='text-light  about-word'>About</h2>
 </div>
</div>
<div className='overall-identity-description-service'>
<div className='dunah-about-desctiption'>
<p className='text-light container-fluid actual-about-paragraph'>
             Trevor Dunah is a dynamic individual whose journey from Dining Hall Captain in high school to the crowned 'King of Dance' at Murang'a University encapsulates a story of multifaceted success. Beyond being crowned Mr. Murang'a County, Trevor has graced countless stages as a master of ceremonies, captivating audiences with his charisma. Not just a face in the crowd, he's a seasoned model and mentor, training others in the art of runway finesse. Trevor's passion for personal growth led him to become a life coach and peer counselor, where he empowers individuals to navigate life's challenges. Adding another feather to his cap, he showcased his athletic prowess as the 7th CSSports Murang'a University. Amidst this remarkable journey, Trevor pursued a degree in electrical engineering, proving that his brilliance extends beyond the stage and into the world of academia. A true embodiment of versatility and excellence, Trevor Dunah is more than a name; he is an inspiration.
             </p>
</div>
<div className='dunah-img-container'>
<img className='bottom-about-dunag-image'src='/Images/IMG_4933.jpg'/>
</div>
</div>
    </div>
    <footer>
        <Footer/>
    </footer>
    { sidebar && <div className='homepage-sidebar-appear'>
 <div className='close-icon' onClick={()=>setSidebar(false)}>
      <IoMdClose className='text-light fs-1'/>
      </div>
      <div className='sidebar-retainer-item'>
      <Sidebar/>
      </div>
 </div>}
</div>
  )
}