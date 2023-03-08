import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../images/home-slider/IMG_8010.jpg'
import image2 from '../images/home-slider/IMG_8004.jpg'
import image3 from '../images/home-slider/IMG_8005.jpg'
import image4 from '../images/home-slider/IMG_8012.jpg'
import image5 from '../images/home-slider/IMG_8014.jpg'
import image6 from '../images/home-slider/IMG_8017.jpg'

function ImageSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

  return (
    <div>
        <Slider {...settings}>
          <img src={image1} alt="image 1" class="img-fluid" />
          <img src={image2} alt="image 2" class="img-fluid"/>
          <img src={image3} alt="image 3" class="img-fluid"/>
          <img src={image4} alt="image 4" class="img-fluid"/>
          <img src={image5} alt="image 5" class="img-fluid"/>
          <img src={image6} alt="image 6" class="img-fluid"/>
      </Slider>
      
    </div>
  )
}



  export default ImageSlider