import React from 'react'
import PropTypes from 'prop-types'
import './styles/Listing.css'

const Listing = ({name, img, price}) => {
  return (
    <div className='listing'>
        <img className='listing-img' src={img} alt='image not found'></img>
        <h3 className='listing-name'>{name}</h3>
        <h3 className='listing-price'>{price}</h3>
    </div>
  )
}

export default Listing