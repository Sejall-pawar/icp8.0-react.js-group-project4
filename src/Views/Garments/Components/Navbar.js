import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/womens-wear">Women's Wear</Link></li>
        <li><Link to="/mens-wear">Men's Wear</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
