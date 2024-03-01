import React from 'react'
import './Masterofceremony.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'
import Contact from '../Components/UI/Contact'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import Sidebar from '../Components/UI/Sidebar'



export default function Masterofceremony() {
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
     
      <li className='text-light fs-5 activeLink' onClick={()=>setFlowdown(!flowdown)}>
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
    <div className='overall-master-of-ceremony'>
        <header className='header-item'>
<Header/>
        </header>
        <div className='masterceremony-body'>
         <div className='top-masterceremony-introduction-section'>
       <img className='masterceremony-dunahimage1' src='/Images/IMG_0199.jpg' alt='image of dunah performing'/>
       <div className='top-masterceremony-opacity-controller '></div>
       <div className='master-ceremony-title-on-bg'>
        <h4 className='text-light master-class-name'>MASTER OF CEREMONY</h4>
       </div>
         </div>
         <div className='trevor-dunah-on-mc'>
            <div className='mc-stuff-text'>
                <h2 className='text-light' style={{textAlign:'center'}}>Master of Ceremony with Trevor</h2>
              <p className='text-light container-fluid fs-5'>
              Elevate your event with the unparalleled charm and expertise of Trevor Dunah, a true maestro in the art of Master of Ceremony! Trevor brings a dynamic energy that transforms any occasion into a lively and memorable experience. With his captivating stage presence, Trevor ensures that every moment is infused with excitement and engagement, leaving a lasting impression on your guests.</p>
              <p className='text-light container-fluid fs-5'> What sets Trevor apart is his versatility – from corporate galas to weddings and high-profile conferences, he adapts seamlessly to the unique atmosphere of your event. His quick wit and keen sense of humor not only entertain but also create a genuine connection with the audience. Trevor is more than an MC; he's a facilitator of interactive engagement, ensuring your guests actively participate and become an integral part of the festivities.</p>
              <p className='text-light container-fluid fs-5'>Experience the magic of smooth transitions and flawless event management as Trevor Dunah takes the stage. His professionalism and years of expertise guarantee that your event will be a stress-free success, leaving you free to savor the moments. Choose Trevor Dunah as your Master of Ceremony, and let the vibrancy and liveliness he brings make your event truly extraordinary. Contact Trevor today and let the celebration begin! 
              </p>
              <div className='book-trevor-button' onClick={()=>setcontactComponent(true)}>
                <p style={{textAlign:'center'}}className='text-light fs-5 p-2'>Book Trevor</p>
              </div>
            </div>
            <div className='supporting-simple-image'>
               <img className='masterceremony-dunahimg2'src='/Images/ZLS_0059-1.jpg'/>
            </div>
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