import './App.css';
import Carousel from './ui-components/Carousel.js';
import Navbar from './ui-components/Navbar.js';
import ShopBody from './ui-components/ShopBody.js'
import clubLogo from './assets/logo/favicon-192x192.png'
import carousel1 from './assets/shop-items/carousel1.jpg'
import carousel2 from './assets/shop-items/carousel2.jpg'
import carousel3 from './assets/shop-items/carousel3.jpg'
import carousel4 from './assets/shop-items/carousel4.jpg'

function App() {
  const carouselImg = [
    { url: carousel1, index: 1 },
    { url: carousel2, index: 2 },
    { url: carousel3, index: 3 },
    { url: carousel4, index: 4 },
  ];
  return (
    <div className="App">
      <img className='club-logo' src={clubLogo} alt='logo not found'></img>
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className='carousel-container'>
        <Carousel imgArray={carouselImg} />
      </div>
      <div className='shop-body-container'>
        <ShopBody />
      </div>
    </div>
  );
}

export default App;
