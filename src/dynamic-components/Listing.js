import React, { useState } from 'react'
import PropTypes from 'prop-types'
import noImage from '../assets/ui/no-img.png'
import './styles/Listing.css'

const Listing = ({name, img, price, tag, nameStyle, priceStyle, containerStyle, imgStyle }) => {
  return (
    <div className={'listing ' + tag + ' ' + name} style={containerStyle}>
        <img className='listing-img' src={img} alt='not found' style={imgStyle}></img>
        <h3 className='listing-name' style={nameStyle}>{name}</h3>
        <h3 className='listing-price' style={priceStyle}>{price}</h3>
    </div>
  )
}

Listing.defaultProps = {
  name: '3D4E Merch',
  img: noImage,
  price: '',
  tag: '',
  nameStyle: {},
  priceStyle: {},
  containerStyle: {
    backgroundColor: 'rgba(210, 211, 212, 1)',
    display: 'grid',
    gridTemplateRows: '200px 1fr 1fr',
    width: '230px',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: '1px'
  },
  imgStyle: {
    height: '192px',
    width: 'auto'
  },
}

Listing.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  tag: PropTypes.string,
  nameStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  imgStyle: PropTypes.object,
}

export default Listing