import './styles/Navbar.css'
import React from 'react'
import clubLogo from '../assets/logo/favicon-192x192.png'

const Navbar = () => {
  return (
    <div>
      <img className='club-logo' src={clubLogo} alt='logo not found'></img>
      <div className='nav-bar'>
        <div className='category-selection'>
          <h2 className='nav-text'>APPAREL</h2>
          <h2 className='nav-text'>PRINTS</h2>
          <h2 className='nav-text'>CURSED</h2>
        </div>
        <div className='club-info'>
          <h2 className='nav-text'>ABOUT US</h2>
          <h2 className='nav-text'>CLUB WEBSITE</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar