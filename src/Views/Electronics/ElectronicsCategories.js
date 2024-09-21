import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./ElectronicCategories.css";
import CategoriesData from "../../Config/CategoriesData";

// Import your custom icons
import priceIcon from './price.png';

const EMI_RATE = 0.1; // 10% interest rate

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
      if (exists.quantity + increment > 3 || exists.quantity + increment < 1) {
        setError(increment > 0 ? "You cannot add more than 3 items." : "");
        return;
      }
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + increment } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

   //Function to calculate EMI for a given price and number of months
  const calculateEMI = (price, months) => ((price * (1 + EMI_RATE)) / months).toFixed(2);


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
                <strong>₹{category.finalPrice.toFixed(2)}</strong>
              </p>
              <p className="emi">
                <strong>EMI (12 Months):</strong> ₹{calculateEMI(category.finalPrice, 12)} / month</p>
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
                    <p>{item.description}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p>
                      <img src={priceIcon} alt="Price Icon" className="icon" />
                      <strong>Total Price:</strong> ₹{item.finalPrice * item.quantity}
                    </p>
                    <p><strong>EMI (12 months):</strong> ₹ {calculateEMI(item.finalPrice * item.quantity, 12)} / month</p>
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
            <p><strong>Price:</strong> ₹{selectedProduct.finalPrice.toFixed(2)}</p>
            <p><strong>Monthly EMI:</strong> ₹ {calculateEMI(selectedProduct.finalPrice, 12)}</p>
            <button onClick={() => updateCart(selectedProduct, 1)}>Add to Cart</button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ElectronicsCategories;
