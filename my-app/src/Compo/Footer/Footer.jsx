
import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Please enter your email address.');
    } else {
      alert('Thanks for subscribing!');
      setEmail(''); // Clear the input field
    }
  };

  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Keerthana.R</h1>
          <p>
            Iam a software developer with 1 year of experience</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Keerthana. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
