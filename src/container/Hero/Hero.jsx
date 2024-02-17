import React from 'react';
import { images } from '../../constants';
import {IconScroll} from '../../components';
import './Hero.css';


// const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Web Suite For Nigerian Businesses & Brands</h1>
          <p className="py-4">Our web agency propels businesses and brands to online success with a suite of services including website design and creation, SEO, PPC, Google Ads, and email marketing.</p>
          <a href="https://d2zhcj7kad1.typeform.com/to/YHMKeYYM" className="btn-positivus" target="_blank" rel="noopener noreferrer">
            Book a consultation
          </a>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">

      {/* {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))} */}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero