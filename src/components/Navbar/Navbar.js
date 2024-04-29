import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Navbar.css'; // Import CSS file for styling (optional)


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="logo-header.svg" alt="Logo" /> {/* Correct path to your logo image */}
        </div>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          {/* Add to prop for each NavLink */}
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/Contacts">Contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn">Contact Me</button>
      </div>
    </nav>
  );
}

export default Navbar;
