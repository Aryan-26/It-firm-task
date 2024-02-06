// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Company Name</Link> {/* Use Link instead of <a> */}
        <Link className="nav-element" to="/services">Services</Link> {/* Use Link instead of <a> */}
        <Link className="nav-element" to="/about">About</Link> {/* Use Link instead of <a> */}
        <Link className="nav-element" to="/contact">Contact Us</Link> {/* Use Link instead of <a> */}
        <Link className="nav-element" to="/login">Log in</Link> {/* Use Link instead of <a> */}
      </div>
    </nav>
  );
};

export default Navbar;


// src/Navbar.js
// import React from 'react';
// import Login from '../Login/Login'
// import '../App.css'
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div>
//         <a href="">
//         Company Name
//           </a>
//         <a className="Navelement" href="/services">Services</a>
       
//         <a className="Navelement" href="/about">About</a>
//         <a className="Navelement" href="/about">Contect Us</a>
//         <a className="Navelement" href="{.\src\Login\Login.js}">Log in</a>
          
       
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


