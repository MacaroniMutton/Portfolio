import React from 'react';
import './Footer.css'; // Import the CSS file specific to this component

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Manan Kher. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
