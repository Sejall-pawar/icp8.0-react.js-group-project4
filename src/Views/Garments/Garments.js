import React, { useState } from 'react';
import './garments.css';
import Header from './../../Components/Header/Header';
import Footer from './../../Components/Footer/Footer';

// Import images for the garments
import lehengaImage from './GarmentsImages/lehenga.jpg';
import lehengaImage2 from './GarmentsImages/lehenga2.jpg';
import lehengaImage3 from './GarmentsImages/lehenga3.jpeg';

import formalWearImage from './GarmentsImages/formalwere.jpg';
import formalWearImage2 from './GarmentsImages/formalwere2.jpeg';
import formalWearImage3 from './GarmentsImages/formalwere3.jpeg';

import bridalGownImage from './GarmentsImages/bridalgown.jpeg';
import bridalGownImage2 from './GarmentsImages/bridalgown2.jpeg';
import bridalGownImage3 from './GarmentsImages/bridalgown3.jpeg';

import sherwaniImage from './GarmentsImages/sherwani.jpeg';
import sherwaniImage2 from './GarmentsImages/sherwani2.jpg';
import sherwaniImage3 from './GarmentsImages/sherwani3.jpeg';

import suitImage from './GarmentsImages/suit.jpg';
import suitImage2 from './GarmentsImages/suit2.jpeg';
import suitImage3 from './GarmentsImages/suit3.jpeg';

import kurtaImage from './GarmentsImages/kurta.jpeg';
import kurtaImage2 from './GarmentsImages/kurta2.jpeg';
import kurtaImage3 from './GarmentsImages/kurta3.jpeg';

function Garments() {
  const womensWearItems = [
    { id: 1, image: lehengaImage, title: 'Gorgeous Red Lehenga', description: 'Traditional Lehenga for weddings and special occasions,.', price: 1500, isAvailable: true },
    { id: 2, image: lehengaImage2, title: 'Refined Walima Outfit', description: 'Perfect for making a statement on your special day', price: 1500, isAvailable: true },
    { id: 3, image: lehengaImage3, title: 'Lehenga', description: 'Traditional Lehenga for weddings and special occasions.', price: 1500, isAvailable: false },

    { id: 4, image: formalWearImage, title: 'Formal Wear', description: 'Elegant formal wear for business events.', price: 1000, isAvailable: true },
    { id: 5, image: formalWearImage2, title: 'Formal Wear', description: 'Elegant formal wear for business events.', price: 1000, isAvailable: true },
    { id: 6, image: formalWearImage3, title: 'Formal Wear', description: 'Elegant formal wear for business events.', price: 1000, isAvailable: false },

    { id: 7, image: bridalGownImage, title: 'Bridal Gown', description: 'Stunning bridal gown for your special day.', price: 5000, isAvailable: true },
    { id: 8, image: bridalGownImage2, title: 'Bridal Gown', description: 'Stunning bridal gown for your special day.', price: 5000, isAvailable: false },
    { id: 9, image: bridalGownImage3, title: 'Bridal Gown', description: 'Stunning bridal gown for your special day.', price: 5000, isAvailable: false },
  ];

  const mensWearItems = [
    { id: 10, image: sherwaniImage, title: 'Sherwani', description: 'Royal sherwani for weddings and ceremonies.', price: 2000, isAvailable: true },
    { id: 11, image: sherwaniImage2, title: 'Sherwani', description: 'Royal sherwani for weddings and ceremonies.', price: 2000, isAvailable: true },
    { id: 12, image: sherwaniImage3, title: 'Sherwani', description: 'Royal sherwani for weddings and ceremonies.', price: 2000, isAvailable: false },

    { id: 13, image: suitImage, title: 'Suit', description: 'Classic suit for formal and business events.', price: 1200, isAvailable: true },
    { id: 14, image: suitImage2, title: 'Suit', description: 'Classic suit for formal and business events.', price: 1200, isAvailable: false },
    { id: 15, image: suitImage3, title: 'Suit', description: 'Classic suit for formal and business events.', price: 1200, isAvailable: false },

    { id: 16, image: kurtaImage, title: 'Kurta Pajama', description: 'Comfortable and stylish kurta pajama for casual occasions.', price: 800, isAvailable: true },
    { id: 17, image: kurtaImage2, title: 'Kurta Pajama', description: 'Comfortable and stylish kurta pajama for casual occasions.', price: 800, isAvailable: true },
    { id: 18, image: kurtaImage3, title: 'Kurta Pajama', description: 'Comfortable and stylish kurta pajama for casual occasions.', price: 800, isAvailable: false },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!product.isAvailable) {
      alert('This item is out of stock');
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity < 3) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        alert('You can only add this item 3 times.');
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity < 3
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <Header />
      <div className="garments-container">
        <h1 className="headline">Women's Wear Collection</h1>
        <div className="garments-cards">
          {womensWearItems.slice(0, 3).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <div className="garments-cards">
          {womensWearItems.slice(3, 6).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <div className="garments-cards">
          {womensWearItems.slice(6).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <h1 className="headline">Men's Wear Collection</h1>
        <div className="garments-cards">
          {mensWearItems.slice(0, 3).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <div className="garments-cards">
          {mensWearItems.slice(3, 6).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <div className="garments-cards">
          {mensWearItems.slice(6).map((item) => (
            <GarmentCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

        <CartSummary
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
      <Footer />
    </div>
  );
}

function GarmentCard({ item, addToCart }) {
  return (
    <div className={`garment-card ${!item.isAvailable ? 'out-of-stock' : ''}`}>
      <img src={item.image} alt={item.title} className="garment-image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="garment-price">Price: ₹{item.price}/day</p>
      {!item.isAvailable ? (
        <p className="out-of-stock">Out of Stock</p>
      ) : (
        <button className='rent-button' onClick={() => addToCart(item)}>Add to Cart</button>
      )}
    </div>
  );
}

function CartSummary({ cart, increaseQuantity, decreaseQuantity }) {
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Total Amount: ₹{getTotal()}</h3>
      </div>
    </div>
  );
}

export default Garments;
