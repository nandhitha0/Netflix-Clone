import React from 'react'
import './Footer.css'
import yt from '../../assets/youtube_icon.png'
import fb from '../../assets/facebook_icon.png'
import tw from '../../assets/twitter_icon.png'
import insta from '../../assets/instagram_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={fb} alt=""/>
        <img src={insta} alt=""/>
        <img src={tw} alt=""/>
        <img src={yt} alt=""/>
      </div>
      <ul>
        <li>Audio and Subtitles</li>
        <li>Media Center</li>
        <li>Gift Cards</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Terms of Use</li>
        <li>Legal Notices</li>
        <li>Corporate Information</li>
        </ul>
      <p className='copyright-text'>© 2005-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer 
