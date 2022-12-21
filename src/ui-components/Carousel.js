import React, { useState, useEffect } from 'react'
import noImg from '../assets/ui/no-img.png'
import prevImg from '../assets/ui/prev.png'
import nextImg from '../assets/ui/next.png'
import './styles/Carousel.css'

const Carousel = ({ imgArray }) => {

  const [currImgIndex, setImgIndex] = useState(-1);
  const [currImg, setImg] = useState(noImg);
  const [transition, setTransition] = useState('');
  const [autoScroll, setScroll] = useState(true);

  const scroll = () => {
    if (currImgIndex < 0) {
      return;
    }
    else if (currImgIndex + 1 < imgArray.length) {
      setImgIndex(currImgIndex + 1);
    }
    else {
      setImgIndex(0);
    }
    transit('left');
    setScroll(false);
    setTimeout(() => setScroll(true), 6000);
  };

  useEffect(() => {
    if (imgArray != null && currImgIndex < 0) {
      setImgIndex(0);
    }
    if (autoScroll) {
      scroll();
    }
    if (currImgIndex >= 0 && currImgIndex < imgArray.length) {
      setImg(imgArray[currImgIndex].url);
    }
  });

  const carouselNext = () => {
    setScroll(false);
    if (currImgIndex < 0) {
      return;
    }
    else if (currImgIndex + 1 < imgArray.length) {
      setImgIndex(currImgIndex + 1);
    }
    else {
      setImgIndex(0);
    }
  };

  const carouselPrev = () => {
    setScroll(false);
    if (currImgIndex < 0) {
      return;
    }
    else if (currImgIndex - 1 >= 0) {
      setImgIndex(currImgIndex - 1);
    }
    else {
      setImgIndex(imgArray.length - 1);
    }
  };

  const setCarousel = (index) => {
    setScroll(false);
    if (index < imgArray.length && index >= 0) {
      setImgIndex(index);
    }
  }

  const transit = (direction) => {
    setTransition("transition-" + direction);
    setTimeout(() => {
      setTransition("");
    }, 500);
  };

  const selectDots = imgArray.map((img, imgIndex) => (<div className='select-dot' key={imgIndex} onClick={() => { transit('left'); setCarousel(imgIndex); }}>⚪</div>));

  return (
    <div className='carousel'>
      <img className='prev-img' src={prevImg} alt='no image' onClick={() => { transit('left'); carouselPrev(); }} />
      <img className='next-img' src={nextImg} alt='no image' onClick={() => { transit('right'); carouselNext(); }} />
      <div className={transition} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <img className='carousel-img' src={currImg} alt='no image' />
      </div>
      <div className='carousel-select'>
        {selectDots}
      </div>
    </div>
  )
}

export default Carousel