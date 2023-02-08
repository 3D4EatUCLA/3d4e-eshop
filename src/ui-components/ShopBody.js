import Listing from '../dynamic-components/Listing'
import ListingImg1 from '../assets/shop-items/Banner-Cape.jpg'
import ListingImg2 from '../assets/shop-items/Banner-Skin1.jpg'
import ListingImg3 from '../assets/shop-items/Banner-Skin2.jpg'
import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import './styles/ShopBody.css'

const ShopBody = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display', 'Playfair Display SC', 'Open Sans']
      }
    });
  });

  return (
    <div className='listing-container'>
      <div className='specials our-favorites'>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: '40px', fontWeight: 'bold', fontStyle: 'italic', color: 'rgba(224, 224, 224, 1)', justifySelf: 'flex-start' }}>Our Favorites</h3>
        <Listing name={'forklift'} img={ListingImg1} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
        <Listing name={'hawt skin'} img={ListingImg2} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
        <Listing name={'hawt skin'} img={ListingImg3} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
      </div>
      <div className='specials new-arrivals'>

        <Listing name={'forklift'} img={ListingImg1} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
        <Listing name={'hawt skin'} img={ListingImg2} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
        <Listing name={'hawt skin'} img={ListingImg3} tag={'favorite-listings'} containerStyle={favContainerStl} imgStyle={favImgStl} nameStyle={favTextStl} />
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: '40px', fontWeight: 'bold', fontStyle: 'italic', color: 'rgba(224, 224, 224, 1)', justifySelf: 'flex-start' }}>New Arrivals</h3>
      </div>
      <div className='specials explore-all'>

      </div>
    </div>
  )
}

const favContainerStl = {
  backgroundColor: 'rgba(210, 211, 212, 1)',
  display: 'grid',
  gridTemplateRows: '1fr 80px 0px',
  width: '350px',
  height: '400px',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all .2s ease-in-out'
}

const favImgStl = {
  height: '250px',
  width: 'auto',
  borderRadius: '20px'
}

const favTextStl = {
  fontFamily: 'Open Sans', fontSize: '30px', fontWeight: 'bold', fontStyle: 'normal', color: 'rgba(3, 3, 3, 1)'
}

const favAnimation = `favorite-listings:hover {transform: scale(1.1); }`

export default ShopBody