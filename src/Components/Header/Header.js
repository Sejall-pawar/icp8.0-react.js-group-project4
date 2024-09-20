import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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
            <li>
              <NavLink 
                exact 
                to="/" 
                className='nav-names' 
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="dropdown">
              <span className='nav-names dropbtn'>Categories</span>
              <div className="dropdown-content">
                <NavLink to="/furniture" activeClassName="active">Furniture</NavLink>
                <NavLink to="/garments" activeClassName="active">Garments</NavLink>
                <NavLink to="/electronics" activeClassName="active">Electronics</NavLink>
              </div>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className='nav-names' 
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/registration" 
                className='nav-names' 
                activeClassName="active"
              >
                Registration
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/inquiry" 
                className='nav-names' 
                activeClassName="active"
              >
                Inquiry
              </NavLink>
            </li>
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
