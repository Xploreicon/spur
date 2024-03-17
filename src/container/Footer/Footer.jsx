import React from 'react';
import './Footer.css';
import { images, data } from '../../constants';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="row align-items-center">
        <div className="col-md-2 col-12">
          <img src={images.logofooter} alt="logo" className="img-fluid" />
        </div>
        <div className="col-md-8 col-12 ">
          <ul className="navbar-footer">
            {data.Menu.slice(0, -1).map((item, index) => (
              <li key={index}><a href="#">{item.text}</a></li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 col-12 text-center text-md-end fs-4">
          <a href="https://www.instagram.com/spur_ng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><BsInstagram /></a>
          <a href="https://x.com/spur_ng?s=20" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><BsTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><BsLinkedin /></a>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-12">
          <ul className="info-contact">
            <li><span>Contact us:</span></li>
            <li>Email: info@spur.ng</li>
            <li>Phone: +2348103587435</li>
          </ul>
        </div>
        <div className="col-md-8 col-12">
          <form className="row form-news">
            <div className="col-lg-6 col-12">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="col-lg-6 col-12 mt-3 mt-lg-0">
              <button type="submit" className="btn-positivus w-100">Subscribe to news</button>
            </div>
          </form>
        </div>
      </div>
      <div className="rights">
        <p>© 2023 Spur. All Rights Reserved.</p>
        <p><a href="#" alt="Privacy Policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
