import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from"../../assets/profile_img.png"
import caret_icon from"../../assets/caret_icon.svg"
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse my language</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="search-icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='icons'/>
        <div className="navbar-profile">
            <img src={profile_img} alt="profile-img" className='profile' />
            <img src={caret_icon} alt="caret-icon" className='icons' />
        </div>
      </div>
    </div>
  )
}
