import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Pic1 from '../../assets/img/carousels/tips.png'
import Pic2 from '../../assets/img/carousels/construction.jpg'
import Pic3 from '../../assets/img/carousels/storage.png'

function IndexCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={Pic1} alt=''/>
        <Carousel.Caption className='bg-white rounded-md text-gray-700'>
          <div className='text-3xl md:text-5xl py-3 font-bold leading-9'>Kenya’s <span className='text-orange-600'># 1 </span><br />Movers <span className="d-none md:inline-block"><br/></span>Website</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={Pic2} alt=''/>
        <Carousel.Caption className='bg-white rounded-md text-gray-700'>
          <div className='text-3xl md:text-5xl py-3 font-bold leading-9'>Best <span className='text-orange-600'>Rates </span><span className="d-none md:inline-block"><br/></span>In Town</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Pic3} alt=''/>
        <Carousel.Caption className='bg-white rounded-md text-gray-700'>
          <div className='text-3xl md:text-5xl py-3 font-bold leading-9'>Extreme <br /><span className='text-orange-600'>Professionalism</span> <span className="d-none md:inline-block"><br/></span></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndexCarousel;