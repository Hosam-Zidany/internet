import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/al-baath-univ-logo.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Al-Baath University Logo" />
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  