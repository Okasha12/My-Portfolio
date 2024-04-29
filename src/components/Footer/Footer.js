import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="left">
        {/* Your logo image */}
        <img src="logo-header.svg" alt="Logo" />
      </div>
      <div className="middle">
        {/* Your text */}
        <p>© 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved</p>
      </div>
      <div className="right">
        {/* Your icons */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </footer>
  );
}

export default Footer;
