import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import tryout4 from '../images/tryouts/4.png'

function TryoutSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 999999
    };

    const [showImage, setShowImage] = useState(false);
    const [imageSrc, setImageSrc] = useState('');

    const openImage = (src) => {
      setImageSrc(src);
      setShowImage(true);
    }

  return (
    <div>
        <Slider {...settings}>
        <SlideContainer>
          <img src={tryout4} alt="tryout 1" style={{width: '30%', height :'auto',display: 'block', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer'}} onClick={() => openImage(tryout4)} />
        </SlideContainer>
      </Slider>
      {showImage && <ImageModal src={imageSrc} onClose={() => setShowImage(false)} />}
    </div>
  )
}

const SlideContainer = styled.div`
    padding-bottom: 30px;
    padding-top: 30px;
    
  `;

  const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalImage = styled.img`
    max-width: 80%;
    max-height: 80%;
`;

function ImageModal(props) {
  return (
    <ModalContainer onClick={props.onClose}>
      <ModalImage src={props.src} onClick={(e) => e.stopPropagation()} />
    </ModalContainer>
  )
}

export default TryoutSlider