import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when an item is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="brand-title">Manan Kher</a>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={handleMenuItemClick}><a href="#about">About</a></li>
          <li onClick={handleMenuItemClick}><a href="#skills">Skills</a></li>
          <li onClick={handleMenuItemClick}><a href="#projects">Projects</a></li>
          <li onClick={handleMenuItemClick}><a href="#education">Education</a></li>
          <li onClick={handleMenuItemClick}><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* Hamburger menu for mobile view */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
