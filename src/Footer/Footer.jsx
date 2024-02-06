// src/Footer.js
import React from 'react';
import '../App.css'; // Ensure this is correctly importing your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Example section: Industries */}
      <div>
        <h3>Industries</h3>
        <a href="#">Banking</a>
        <a href="#">Capital Markets</a>
        {/* Add more industries as needed */}
      </div>

      {/* Repeat for other sections like Services, Products and Platforms, etc. */}

      {/* Social Media Links */}
      <div className="footer-social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Linkdin</a>
        {/* Add more social media links as needed */}
      </div>

      {/* Copyright */}
      <div className="footer-copy-right">
      © 2024 MaMo Technolabs LLP. All rights reserved.

        {/* Add any other legal links or texts */}
      </div>
    </footer>
  );
};

export default Footer;
