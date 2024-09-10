import React from 'react';
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import './garments.css';
import heroImage1 from './GarmentsImages/hero1.png'; // Your single hero image

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

      

      <Footer />
    </div>
  );
}

export default Garments;
