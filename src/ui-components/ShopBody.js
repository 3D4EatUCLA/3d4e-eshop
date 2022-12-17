import Listing from '../dynamic-components/Listing'
import ListingImg from '../assets/shop-items/Banner-Cape.jpg'
import React from 'react'

const ShopBody = () => {
  return (
  <div className='listing-container'>
    <Listing name={'forklift'} img={ListingImg} price={'1000 vbucks'}/>
  </div>
  )
}

export default ShopBody