import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaInstagram,FaTiktok,FaFacebook,FaYoutube,FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='overall-footer-component'>
        <div className='left-footer-section'>
        <h2 className='text-light Trevor-Dunah-name'>Trevor Dunah</h2>
        <h4 className='footer-contact'>CONTACT</h4>
        <p className='text-light tayari-trevor-email'>tayaritrevor@gmail.com</p>
        <p className='text-light tayari-trevor-contact'>+254742646957</p>
        </div>
        <div className='center-footer-section'>
         <div className='footer-icons-holder-div'>
          <ul className='list-unstyled'>
            <li><a href='https://www.instagram.com/trevor_dunah254?igsh=dnFtYXJ4YzdmYnhr'><FaInstagram className='text-light fs-1'/></a></li>
            <li> <a href='https://www.tiktok.com/@trevordunah?_t=8kAef1PVzxF&_r=1'> < FaTiktok className='text-light fs-1'/></a></li>
            <li><a href='https://www.facebook.com/trevor.gigs?mibextid=NTRm0r7WZyOdZZsz'> <FaFacebook className='text-light fs-1'/></a></li>
            <li><a href='https://youtube.com/@trevordunah4988?si=T3WINZuf0gjFs7iy'> <FaYoutube className='text-light fs-1'/></a></li>
          </ul>
         </div>
        </div>
        <div className='right-footer-section'>
        <p className='text-light copyright-text'>copyright <span><FaCopyright/></span> Trevor Dunah 2024.All rights reserved.Created by winkywebus</p>
        </div>
        </div>
  )
}