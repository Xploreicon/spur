import React from 'react';
import { images } from '../../constants';
import {IconScroll} from '../../components';
import './Hero.css';


const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Get Your Business Online Fast – Websites & Ads That Work</h1>
          <p className="py-4">Affordable web solutions and targeted ads for Nigerian businesses – no tech skills needed."</p>
          <a href="https://d2zhcj7kad1.typeform.com/to/YHMKeYYM" className="btn-positivus" target="_blank" rel="noopener noreferrer">
          Build Your Website Now! 
          </a>
        </div>
        <div className="col-md-6 col-12 mt-md-0 mt-4">
          <img className="img-fluid" src={images.hero} alt="design" />
        </div>
      </div>
      
      <div className="clients">

      {logos.map((logo, index) => (
      <img
        key={index}
        src={images[logo]}
        alt={images[logo]}
      />
    ))}
  
      </div>
      <IconScroll />
    </div>
    
  )
}

export default Hero