import React, { useState } from 'react';
import './Furniture.css';
import Header from './../../Components/Header/Header';
import Footer from './../../Components/Footer/Footer';

import sofaImage from './Furniture Img/sofa.jpeg';
import diningTableImage from './Furniture Img/dinning table.jpeg';
import studyDeskImage from './Furniture Img/study desk.jpg';
import bedImage from './Furniture Img/bed.jpg';
import dressingTable from './Furniture Img/dressing table.jpg';
import wardRobe from './Furniture Img/wardrobe.jpeg';
import centerTable from './Furniture Img/center table.jpg';
import shoeRack from './Furniture Img/shoe rack.jpg';
import restChair from './Furniture Img/Arm rest chair.jpg';
import bookShelf from './Furniture Img/book shelf.jpg';
import woodenSwing from './Furniture Img/wooden swing.jpg';
import bedTable from './Furniture Img/bed side table.jpeg';

function Furniture() {
  const furnitureItems = [
    { id: 1, image: sofaImage, title: 'Sofa Set', description: 'Comfortable 3-seater sofa set available for rent.', price: 1330, isAvailable: true },
    { id: 2, image: diningTableImage, title: 'Dining Table', description: 'Elegant dining table with 4 chairs available for rent.', price: 889, isAvailable: true },
    { id: 3, image: studyDeskImage, title: 'Study Desk', description: 'Spacious study desk, ideal for work or study.', price: 469, isAvailable: true },
    { id: 4, image: bedImage, title: 'King Size Bed', description: 'Luxurious king size bed with a soft mattress, perfect for a sleep.', price: 1150, isAvailable: true },
    { id: 5, image: centerTable, title: 'Center Table', description: 'Modern center table, perfect for your living room.', price: 549, isAvailable: true },
    { id: 6, image: shoeRack, title: 'Shoe Rack', description: 'Spacious shoe rack to keep your footwear organized.', price: 380, isAvailable: false },
    { id: 7, image: restChair, title: 'Wooden Chair', description: 'Elegant wooden chair for comfort and style.', price: 430, isAvailable: true },
    { id: 8, image: bookShelf, title: 'Bookshelf', description: 'Wooden bookshelf with multiple shelves.', price: 660, isAvailable: false },
    { id: 9, image: woodenSwing, title: 'Wooden Swing', description: 'Traditional wooden swing for your home.', price: 980, isAvailable: true },
    { id: 10, image: bedTable, title: 'Bedside Table', description: 'Compact bedside table with a drawer for storage.', price: 380, isAvailable: false },
    { id: 11, image: dressingTable, title: 'Dressing Table', description: 'Elegant dressing table with a large mirror and multiple storage compartments.', price: 750, isAvailable: true },
    { id: 12, image: wardRobe, title: 'Wardrobe', description: 'Spacious 2-door wardrobe with ample space for clothes and accessories.', price: 805, isAvailable: true }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
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
      <div className="furniture-container">
        <h1 className='Headline'>Elevate Your Home with Our Premium Furniture Rentals</h1>
        <div className="furniture-cards">
          {furnitureItems.map((item) => (
            <FurnitureCard key={item.id} item={item} addToCart={addToCart} />
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

function FurnitureCard({ item, addToCart }) {
  return (
    <div className="furniture-card">
      <img src={item.image} alt={item.title} className="furniture-image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="furniture-price">Price: ₹{item.price}/month</p>

      {!item.isAvailable ? (
        <div className='out-of-stock-message'>
          <p>Out of Stock</p>
        </div>
      ) : (
        <button className="rent-button" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

function CartSummary({ cart, increaseQuantity, decreaseQuantity }) {
  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h2 className="cart-summary-heading">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>Price: ₹{item.price}</p>
               
                
                <div className="btn-quantity">
                  <button className="btn-inc-dec" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn-inc-dec" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className='cart-total'>
          <h3>Total Price: ₹{totalCartPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Furniture;
