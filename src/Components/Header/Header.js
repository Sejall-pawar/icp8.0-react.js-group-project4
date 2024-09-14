import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    console.log('Menu state:', isOpen);
  }, [isOpen]);

  return (
    <header>
      <div className="container">
        <h1>Rentify Hub</h1>
        <input
          type="checkbox"
          id="nav-toggle"
          className="nav-toggle"
          checked={isOpen}
          onChange={toggleMenu}
        />
        <nav>
          <ul className={isOpen ? 'open' : ''}>
            <li><Link to="/" className='nav-names'>Home</Link></li>
            <li className="dropdown">
              <Link to="#" className='nav-names dropbtn'>Categories</Link>
              <div className="dropdown-content">
                <Link to="/furniture">Furniture</Link>
                <Link to="/garments">Garments</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/vehicles">Vehicles</Link>
              </div>
            </li>
            <li><Link to="/contact" className='nav-names'>Contact</Link></li>
            <li><Link to="/registration" className='nav-names'>Registration</Link></li>
            <li><Link to="/reviews" className='nav-names'>Reviews</Link></li>
            <li><Link to="/inquiry" className='nav-names'>Inquiry</Link></li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
