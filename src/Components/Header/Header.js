import React from 'react'
import "./Header.css";
import "./../../index.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <div class="container">
            <h1>Rentify Hub</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li class="dropdown">
                        <Link to="#" class="dropbtn">Categories</Link>
                        <div class="dropdown-content">
                        <Link to="/furniture">Furniture</Link>
                        <Link to="/garments">Garments</Link>
                        <Link to="/electronics">Electronics</Link>
                        <Link to="/vehicles">Vehicles</Link>
                        </div>
                    </li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="registration">Registration</a></li>
                    <li><a href="reviews">Reviews</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header