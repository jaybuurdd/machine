import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className='py-5' style={{backgroundColor :'#224094'}}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 text-center text-md-start mb-3 mb-md-0'>
          <a href='https://www.facebook.com/themachine.dmv/' target='_blank' rel='noopener noreferrer'>
            <button className='btn btn-danger'>Subscribe</button>
            </a>
          </div>
          <div className='col-md-6 text-center text-md-end'>
            <a href='https://www.facebook.com/themachine.dmv/' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
            <a href='https://www.instagram.com/machine_hoops/' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a href='https://twitter.com/MACHINE_Hoops' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
            <a href='https://www.youtube.com/channel/UCIyRdx_AseJt5ARoFS7ZmAQ' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FontAwesomeIcon icon={faYoutube} size='2x' />
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 text-center text-md-start'>
            {/* <a href='/disclaimer' className='text-white me-3' style={{textDecoration: 'none', marginLeft: '-10px'}}>Disclaimer |</a>
            <a href='/policy' className='text-white me-3' style={{textDecoration: 'none', marginLeft: '-10px'}}>Policy |</a>
            <a href='/contact' className='text-white me-3' style={{textDecoration: 'none',marginLeft: '-10px'}}>Contact</a> */}
          </div>
          <div className='col-12 col-md-6 text-center text-md-end'>
            <a href='mailto:themachine.pro17@gmail.com' className='text-white'>
              <FontAwesomeIcon icon={faEnvelope} className='me-2' />
              themachine.pro17@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
