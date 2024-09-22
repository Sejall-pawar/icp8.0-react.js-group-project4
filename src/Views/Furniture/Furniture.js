import React, { useState } from 'react';
import './Furniture.css';
import Header from './../../Components/Header/Header';
import Footer from './../../Components/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

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
import priceIcon from './../Electronics/price.png';  

function Furniture() {
  const furnitureItems = [
    { id: 1, image: sofaImage, title: 'Sofa Set', description: 'Comfortable 3-seater sofa set available for rent.', fullDescription: 'Comfortable 3-seater sofa set available for rent. Perfect for cozy living spaces.', price: 1330, isAvailable: true },
    { id: 2, image: diningTableImage, title: 'Dining Table', description: 'Elegant dining table with 4 chairs available for rent.', fullDescription: 'Elegant dining table with 4 chairs available for rent. Made from premium wood, perfect for family meals.', price: 889, isAvailable: true },
    { id: 3, image: studyDeskImage, title: 'Study Desk', description: 'Spacious study desk, ideal for work or study.', fullDescription: 'Spacious study desk, ideal for work or study. Provides ample space and storage.', price: 469, isAvailable: false },
    { id: 4, image: bedImage, title: 'King Size Bed', description: 'Luxurious king size bed with a soft mattress, perfect for a sleep.', fullDescription: 'Luxurious king size bed with a soft mattress, perfect for a restful night’s sleep.', price: 1150, isAvailable: true },
    { id: 5, image: dressingTable, title: 'Dressing Table', description: 'Stylish dressing table with ample storage.', fullDescription: 'Stylish dressing table with ample storage space for your beauty essentials.', price: 600, isAvailable: true },
    { id: 6, image: wardRobe, title: 'Wardrobe', description: 'Spacious wardrobe with 3 compartments.', fullDescription: 'Spacious wardrobe with 3 compartments, perfect for storing clothes and accessories.', price: 980, isAvailable: false },
    { id: 7, image: centerTable, title: 'Center Table', description: 'Modern center table, ideal for living rooms.', fullDescription: 'Modern center table, ideal for living rooms, made with durable material.', price: 450, isAvailable: true },
    { id: 8, image: shoeRack, title: 'Shoe Rack', description: 'Sleek shoe rack for compact spaces.', fullDescription: 'Sleek shoe rack for compact spaces, holds up to 8 pairs of shoes.', price: 350, isAvailable: true },
    { id: 9, image: restChair, title: 'Arm Rest Chair', description: 'Comfortable arm rest chair for relaxing.', fullDescription: 'Comfortable arm rest chair for relaxing in living rooms or patios.', price: 700, isAvailable: true },
    { id: 10, image: bookShelf, title: 'Bookshelf', description: 'Stylish wooden bookshelf with 4 shelves.', fullDescription: 'Stylish wooden bookshelf with 4 shelves, perfect for organizing books.', price: 540, isAvailable: true },
    { id: 11, image: woodenSwing, title: 'Wooden Swing', description: 'Traditional wooden swing, perfect for patios.', fullDescription: 'Traditional wooden swing, perfect for patios and indoor decor.', price: 1200, isAvailable: false },
    { id: 12, image: bedTable, title: 'Bedside Table', description: 'Compact bedside table with a drawer.', fullDescription: 'Compact bedside table with a drawer for convenient storage.', price: 300, isAvailable: true },
  ];

  const [searchQuery, setSearchQuery] = useState("");  
  const [cart, setCart] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState({});

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredItems = furnitureItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery)
  );

  const toggleFullDescription = (id) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
        toast.success(`${product.title} added to cart!`);
      } else {
        toast.error('You can only add this item 3 times.');
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.title} added to cart!`);
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

  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header />
      <div className="furniture-container">
        <div className="main-container">
          <div className="head-container">
            <h2 className="heading">Furniture On Rent</h2>
            <p className="sub-heading">
              Browse through our wide range of Furniture categories.
            </p>
          </div>
          <input
            type="text"
            placeholder="Search Categories"
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        <div className="furniture-cards">
          {filteredItems.map((item) => (
            <FurnitureCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              showFullDescription={showFullDescription}
              toggleFullDescription={toggleFullDescription}
            />
          ))}
        </div>
        <CartSummary 
          cart={cart} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity} 
          totalCartPrice={totalCartPrice}
        />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

function FurnitureCard({ item, addToCart, showFullDescription, toggleFullDescription }) {
  return (
    <div className="furniture-card">
      <img src={item.image} alt={item.title} className="furniture-image" />
      <h3>{item.title}</h3>
      <p>
        {showFullDescription[item.id]
          ? item.fullDescription
          : `${item.description.substring(0, 50)}...`}
        <button
          onClick={() => toggleFullDescription(item.id)}
          className="toggle-description-button"
        >
          {showFullDescription[item.id] ? "Show Less" : "Show More"}
        </button>
      </p>
      <p className="furniture-price">
        <img src={priceIcon} alt="Price Icon" className="icon" /> 
        <strong>₹{item.price}/month</strong>
      </p>

      {!item.isAvailable ? (
        <div className="out-of-stock-message">
          <p>Out of Stock</p>
        </div>
      ) : (
        <button className="rent-button" onClick={() => addToCart(item)}>
          Rent Now
        </button>
      )}
    </div>
  );
}

function CartSummary({ cart, increaseQuantity, decreaseQuantity, totalCartPrice }) {
  return (
    <div className="cart-summary">
      <h2 className="cart-summary-heading">Cart Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>
                  <strong>₹{item.price * item.quantity}</strong>
                </p>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span className="item-quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total Price: ₹{totalCartPrice}</h3>
        </div>
      )}
    </div>
  );
}


export default Furniture;
