import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./ElectronicCategories.css";
import CategoriesData from "../../Config/CategoriesData";
import toast, { Toaster } from 'react-hot-toast';

// Import price icon
import priceIcon from './price.png';

const ElectronicsCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState({});
  const [error, setError] = useState("");

  // Function to handle search input changes
  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  // Function to toggle full description visibility
  const toggleFullDescription = (id) => setShowFullDescription({ ...showFullDescription, [id]: !showFullDescription[id] });

  // Function to update the cart: add or remove items
  const updateCart = (product, increment) => {
    const exists = cart.find((item) => item.id === product.id);
    
    if (exists) {
      const newQuantity = exists.quantity + increment;

      // Check for exceeding limits
      if (newQuantity > 3) {
        setError("You can only add this item 3 times.");
        return;
      }

      // Remove if quantity falls below 1
      if (newQuantity < 1) {
        setCart(cart.filter((item) => item.id !== product.id));
        toast.success(`${product.name} removed from cart!`);
        setError("");
      } else {
        // Update quantity
        setCart(cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        ));
        setError("");
      }
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`);
      setError("");
    }
  };


  return (
    <div>
      <Header />

      <div className="main-container">
        <div className="head-container">
          <h2 className="heading">Electronics On Rent</h2>
          <p className="sub-heading">
            Browse through our wide range of electronic categories.
          </p>
        </div>

        {/* search input */}
        <input
          type="text"
          placeholder="Search Categories"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />

       {/* Display list of categories based on search query */}
       <div className="categories-list">
          {CategoriesData.filter((category) =>
            category.name.toLowerCase().includes(searchQuery)
          ).map((category) => (
            <div key={category.id} className="category-item">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
                onClick={() => setSelectedProduct(category)}
              />
              <h3 className="category-name">{category.name}</h3>
              <p className="category-fulldescriprion">
                {showFullDescription[category.id]
                  ? category.fullDescription
                  : `${category.description.substring(0, 60)}...`}
                <button
                  onClick={() => toggleFullDescription(category.id)}
                  className="toggle-description-button"
                >
                  {showFullDescription[category.id] ? "Show Less" : "Show More"}
                </button>
              </p>
              
              {/* Price with Custom Icon */}
              <p className="price">
                <img src={priceIcon} alt="Price Icon" className="icon" />
                <strong>₹{category.pricePerMonth} / month</strong>
              </p>
              {category.inStock ? (
                <button
                  onClick={() => updateCart(category, 1)}
                  className="add-to-cart-button"
                >
                  Rent Now
                </button>
              ) : (
                <div className="out-of-stock-overlay"><p>Out of Stock</p></div>
              )}
            </div>
          ))}
        </div>

       {/* Cart Summary Section */}
       <h2 className="card-summary-heading">Cart Summary</h2>
        <div className="cart-summary">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="cart-summary-container">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p>
                      <img src={priceIcon} alt="Price Icon" className="icon" />
                      <strong>Monthly Price:</strong> ₹{item.pricePerMonth * item.quantity} / month
                    </p>
                    <div className="btn-quantity">
                      <button onClick={() => updateCart(item, 1)} className="btn-inc-dec">+</button>
                      <button onClick={() => updateCart(item, -1)} className="btn-inc-dec">-</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <p className="error-message">{error}</p>
        </div>

       {/* Product Details Modal */}
       {selectedProduct && (
          <div className="product-details">
            <h3>{selectedProduct.name}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="category-image" />
            <p><strong>Full Description:</strong> {selectedProduct.fullDescription}</p>
            <p><strong>Monthly Price:</strong> ₹{selectedProduct.pricePerMonth}</p>
            <button onClick={() => updateCart(selectedProduct, 1)}>Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        )}
      </div>

      <Footer />
      <Toaster />
    </div>
  );
};

export default ElectronicsCategories;
