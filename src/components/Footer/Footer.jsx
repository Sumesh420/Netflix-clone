import React from 'react'
import facebook_icon from "../../assets/facebook_icon.png"
import instagram_icon from "../../assets/instagram (1).png"
import twitter_icon from "../../assets/twitter_icon.png"
import youtube_icon from"../../assets/youtube_icon.png"
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="faceboook-icon" />
        <img src={instagram_icon} alt="instagram-icon" className='insta'/>
        <img src={twitter_icon} alt="twitter_icon" />
        <img src={youtube_icon} alt="youtube_icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Job</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2025 Netflix, Inc.</p>
    </div>
  )
}
