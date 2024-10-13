import React from 'react';
import './Navbar.css'; // Import the CSS file specific to this component

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#" className="brand-title">Manan Kher</a>
        <div className="navbar-links">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
