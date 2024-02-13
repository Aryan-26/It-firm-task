// src/Footer.js
import React from 'react';
import '../App.css';


const Footer = () => {
  return (
    <footer className="footer">
      {/* Industries */}
      <div>
        <h3>Industries</h3>
        <a href="#">Banking</a>
        <a href="#">Capital Markets</a>
       
      </div>


      {/* Social Media Links */}
      <div className="footer-social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Linkdin</a>
      
      </div>

      {/* Copyright */}
      <div className="footer-copy-right">
      © 2024 MaMo Technolabs LLP. All rights reserved.

      </div>
    </footer>
  );
};

export default Footer;
