import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Cards from './Components/cards';

function GarmentsApp() {
  return (
    <div>
      {/* Navigation bar with links to Men's and Women's sections */}
      <Navbar />

      {/* Hero section with changing images */}
      <HeroSection />

      {/* Cards for Women's and Men's wear */}
      <Cards />
    </div>
  );
}

export default GarmentsApp;
