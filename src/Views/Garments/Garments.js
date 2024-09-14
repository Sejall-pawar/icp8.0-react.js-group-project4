import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import './garments.css';
import heroImage1 from './GarmentsImages/hero1.png';
import herImage from './GarmentsImages/forher.jpg'; 
import himImage from './GarmentsImages/forhim.jpg';  

function Garments() {
  return (
    <div>
      <Header />
      <div 
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage1})` }}
      >
        <div className="hero-text">
          <h1>"Rent the latest styles, no commitment needed. Look great, save more!"</h1>
          <p>Find the best outfits for every occasion.</p>
        </div>
      </div>

     
      <div className="garment-container">
        <h2>Explore Clothing for Everyone</h2>
        <div className="garment-cards">
          <div className="garment-card">
            <img src={herImage} alt="For Her" className="garment-image" />
            <h3>For Her</h3>
            <p>Elegant dresses, stylish outfits, and more available for rent.</p>
            <p className="garment-price">Starting at ₹299/day</p>
            <Link to="/womens-wear">
              <button className="rent-button">Explore Women's Wear</button>
            </Link>
          </div>

          <div className="garment-card">
            <img src={himImage} alt="For Him" className="garment-image" />
            <h3>For Him</h3>
            <p>Sharp suits, casual wear, and more available for rent.</p>
            <p className="garment-price">Starting at ₹249/day</p>
            <Link to="/mens-wear">
              <button className="rent-button">Explore Men's Wear</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Garments;
