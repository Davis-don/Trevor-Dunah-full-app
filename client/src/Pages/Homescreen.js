import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState,useEffect } from 'react'
import './Homescreen.css'
import Footer from '../Components/Footer'
import Contact from '../Components/UI/Contact'
import { IoMdClose } from "react-icons/io";
import TypingComponent from '../Components/Typedcomponent'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Sidebar from '../Components/UI/Sidebar'


export default function Homescreen() {
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
              <li  className='text-light fs-5 activeLink'><Link style={{textDecoration:'none'}} className='text-light fs-5' to='/'> Home</Link></li>
     
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
const [contactComponent,setcontactComponent]=useState(false)
  return (
    <div className='overall-homescreen-section'>
    <header className='header-item'>
<Header/>
    </header>
    <div className='homescreen-body'>
    <div className='homescreen-introduction-section'>
    <img className='homepage-introduction-background img-fluid' src={process.env.PUBLIC_URL + '/Images/ZLS_0039.jpg'} alt='image of dunah with microphone'/>
    <div className='intro-image-opacity-controller'></div>
    <div className='introducing-content'>
      <h1 className='text-light typewriter-text' style={{textAlign:'center'}}><TypingComponent/></h1>
      <p className='text-light describing-text' style={{fontWeight:'500'}}>
A versatile professional skilled in leadership, MCing, and life coaching, I bring a unique blend of expertise to inspire growth and success</p>
<div className='book-trevor-btn'onClick={()=>setcontactComponent(true)}>
            <p className='text-light' style={{textAlign:'center',marginTop:'5px'}}>Book Trevor</p>
        </div>
    </div>
    </div>
    <div className='homescreen-about-section'>
    <div className='top-dunah-view'>
   <img className='dunahImage2'src={process.env.PUBLIC_URL + '/Images/IMG_4933.jpg'} alt='Image of trevor dunah in public'/>
   <div className='dunahImage2-opacity-regulator'></div>
    </div>
    <div className='about-trevor-description'>
      <h2 className='text-light meet-trevor fs-1'>MEET TREVOR</h2>
      <p className='text-light container-fluid fs-5'>
        
      Trevor Dunah is a dynamic leader with a proven ability to inspire and guide teams towards success. His leadership skills are complemented by his expertise as a modeling coach, where he effortlessly cultivates individual potential for personal and professional growth. Trevor's proficiency extends to the stage, where his engaging MCing captivates audiences, showcasing his excellent communication skills</p> 
<p className='text-light container-fluid fs-5'> In addition to his versatile skill set, Trevor is a compassionate life coach and peer counselor, providing invaluable support on the journey to self-discovery. Whether in leadership, modeling coaching, MCing, life coaching, or peer counseling, Trevor Dunah brings a holistic approach, making a positive impact and empowering others to reach their full potential
      </p>
    </div>
    </div>
    <div className='homescreen-services-section'>
    <div className='actual-service-describe'>
    <img className=''src={process.env.PUBLIC_URL + '/Images/IMG_0199.jpg'}  alt='Image of trevor dunah in public'/>
<div className='service-text'>
<h2 className='text-light container-fluid' style={{textAlign:'center'}}>Master of ceremony</h2>
</div>
    </div>
    <div className='actual-service-describe'>
    <img className=''src={process.env.PUBLIC_URL + '/Images/IMG_1014.jpg'}  alt='Image of trevor dunah in public tean building'/>
 
<div className='service-text'>
<h2 className='text-light container-fluid' style={{textAlign:'center'}}>Team building</h2>
</div>
    </div>
    <div className='actual-service-describe'>
    <img className=''src={process.env.PUBLIC_URL + '/Images/ZLS_0002-1.jpg'} alt='Image of trevor dunah in public modeling'/>

    <div className='service-text'>
<h2 className='text-light container-fluid' style={{textAlign:'center'}}>Fitness trainer</h2>
</div>
    </div>
    {/* <div className='actual-service-describe'>
    <img className=''src={Dunahimage2} alt='Image of trevor dunah in public'/>

    <div className='service-text'>
<h2 className='text-light container-fluid' style={{textAlign:'center'}}>Master of ceremony</h2>
</div>
    </div> */}
    </div>
    </div>
    <footer>
<Footer/>
    </footer>
    { contactComponent &&  <div className='contact-header-display-items'>
      <div className='close-icon'onClick={()=>setcontactComponent(false)}>
      <IoMdClose className='text-light fs-1'/>
      </div>
      <div className='contact-retainer-item'>
      <Contact/>
      </div>
      
    </div>
}

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