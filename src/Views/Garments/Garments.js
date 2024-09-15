import React, { useState } from 'react';
import Header from './../../Components/Header/Header'; 
import Footer from './../../Components/Footer/Footer';
import './garments.css'; 
import heroImage1 from './GarmentsImages/hero1.png';

// Import images for the garments
import lehengaImage from './GarmentsImages/lehenga.jpg';
import formalWearImage from './GarmentsImages/formalwere.jpg';
import bridalGownImage from './GarmentsImages/bridalgown.jpeg';
import sherwaniImage from './GarmentsImages/sherwani.jpeg';
import suitImage from './GarmentsImages/suit.jpg';
import kurtaImage from './GarmentsImages/kurta.jpeg';

function Garments() {
  const womensWearItems = [
    {
      id: 1,
      image: lehengaImage,
      title: 'Lehenga',
      description: 'Traditional Lehenga for weddings and special occasions.',
      price: 1500,
    },
    {
      id: 2,
      image: formalWearImage,
      title: 'Formal Wear',
      description: 'Elegant formal wear for business events.',
      price: 1000,
    },
    {
      id: 3,
      image: bridalGownImage,
      title: 'Bridal Gown',
      description: 'Stunning bridal gown for your special day.',
      price: 5000,
    }
  ];

  const mensWearItems = [
    {
      id: 4,
      image: sherwaniImage,
      title: 'Sherwani',
      description: 'Royal sherwani for weddings and ceremonies.',
      price: 2000,
    },
    {
      id: 5,
      image: suitImage,
      title: 'Suit',
      description: 'Classic suit for formal and business events.',
      price: 1200,
    },
    {
      id: 6,
      image: kurtaImage,
      title: 'Kurta Pajama',
      description: 'Comfortable and stylish kurta pajama for casual occasions.',
      price: 800,
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage1})` }}
      >
        <div className="hero-text">
          <h1>"Rent the latest styles, no commitment needed. Look great, save more!"</h1>
          <p>Find the best outfits for every occasion.</p>
        </div>
      </div>

      {/* Women's Wear Section */}
      <div className="garment-section">
        <h2>Women's Wear Collection</h2>
        <div className="garment-cards">
          {womensWearItems.map((item) => (
            <GarmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Men's Wear Section */}
      <div className="garment-section">
        <h2>Men's Wear Collection</h2>
        <div className="garment-cards">
          {mensWearItems.map((item) => (
            <GarmentCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function GarmentCard({ item }) {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 5) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="garment-card">
      <img src={item.image} alt={item.title} className="garment-image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="garment-price">Price: ₹{item.price}/day</p>

      {/* Quantity controls */}
      <div className="quantity-controls">
        <button className="decrement-button" onClick={decrementQuantity}>-</button>
        <span className="quantity">{quantity}</span>
        <button className="increment-button" onClick={incrementQuantity}>+</button>
      </div>

      <p>Total: ₹{item.price * quantity}</p>
      <button className="rent-button">Rent Now</button>
    </div>
  );
}

export default Garments;
