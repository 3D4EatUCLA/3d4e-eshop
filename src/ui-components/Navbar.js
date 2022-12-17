import './styles/Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div>
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