import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Company Name</Link> 
        <Link className="nav-element" to="/services">Services</Link> 
        <Link className="nav-element" to="/about">About</Link> 
        <Link className="nav-element" to="/contact">Contact Us</Link> 
        <Link className="nav-element" to="/login">Log in</Link> 
      </div>
    </nav>
  );
};

export default Navbar;


