import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-background'></div>
      <div className="company-details">
        <div className="main-label"><h1>The Grand Hotel</h1></div>
        <div className="sub-label">will give you comfort you deserve</div>
        <div className="contact-info">
          <p className="address">Mumbai, India</p>
          <p className="contact-no">+91 1234567890</p>
          <p className="gmail">info@thegrandhotel.com</p>
          <p className="copyright">©The Grand Hotel 2023. All rights reserved.</p>
        </div>
      </div>
      <div className="home-link">
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>             
        <Link onClick={() => window.scrollTo({ top: 966, behavior: "smooth" })}>About Us</Link>     
        <Link onClick={() => window.scrollTo({ top: 1932, behavior: "smooth" })}>Rooms and Rates</Link>     
        <Link onClick={() => window.scrollTo({ top: 2898, behavior: "smooth" })}>Dining</Link>     
        <Link onClick={() => window.scrollTo({ top: 3200, behavior: "smooth" })}>Services</Link>                   
      </div>
      <div className="right-side">
        <div className="subscribe-wrapper">Subscribe for Offers</div>
        <div className='subscribe-email'>
          <input type='text' placeholder='example@gmail.com'/>
        </div>
        <div className='subscribe-button'>
          <button>Subscribe</button>
        </div>
        <div className="social-media-icons">
          <div className="follow-us">Follow us on:</div>
          <div className="fab-icons">
            <FontAwesomeIcon className='icon' icon={faFacebook} />
            <FontAwesomeIcon className='icon' icon={faInstagram} />
            <FontAwesomeIcon className='icon' icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
