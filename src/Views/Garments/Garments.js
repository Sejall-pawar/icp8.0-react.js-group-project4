import React, { useState } from "react";
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./Garments.css";
import CategoriesData from "../../Config/GarmentsData";

// Import the custom price icon
import priceIcon from './price.png';

const GarmentsCategories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState({});
  const [error, setError] = useState("");

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());

  const toggleFullDescription = (id) =>
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

  const updateCart = (product, increment) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      if (exists.quantity + increment > 3 || exists.quantity + increment < 1) {
        setError(increment > 0 ? "You cannot add more than 3 items." : "");
        return;
      }
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + increment }
            : item
        )
      );
      setError("");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to handle removing an item from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Header />

      <div className="main-container">
        <div className="head-container">
          <h2 className="heading">Garments On Rent</h2>
          <p className="sub-heading">
            Browse through our wide range of Garments categories.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search Categories"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />

        <div className="categories-list">
          {CategoriesData.filter((category) =>
            category.name && category.name.toLowerCase().includes(searchQuery)
          ).map((category) => (
            <div key={category.id} className="category-item">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
                onClick={() => setSelectedProduct(category)}
              />
              <h3>{category.name}</h3>
              <p>
                {showFullDescription[category.id]
                  ? category.fullDescription
                  : `${
                      category.description
                        ? category.description.substring(0, 60)
                        : ""
                    }...`}
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

              {category.inStock ? (
                <button
                  onClick={() => updateCart(category, 1)}
                  className="add-to-cart-button"
                >
                  Rent Now
                </button>
              ) : (
                <div className="out-of-stock-overlay">
                  <p>Out of Stock</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="card-summary-heading">Cart Summary</h2>
        <div className="cart-summary">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-image" />
                    <div className="cart-details">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>Quantity: {item.quantity}</p>

                      {/* Total Price with Custom Icon */}
                      <p>
                        <img src={priceIcon} alt="Price Icon" className="icon" />
                        <strong>Total Price:</strong> ₹
                        {(item.finalPrice * item.quantity).toFixed(2)}
                      </p>

                      <div className="btn-quantity">
                        <button
                          onClick={() => updateCart(item, 1)}
                          className="btn-inc-dec"
                        >
                          +
                        </button>
                        <button
                          onClick={() => updateCart(item, -1)}
                          className="btn-inc-dec"
                        >
                          -
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn-remove"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="error-message">{error}</p>
              <div className="total-price">
                <h3>
                  Total Price: ₹
                  {cart
                    .reduce(
                      (total, item) => total + item.finalPrice * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </h3>
              </div>
            </>
          )}
        </div>

        {selectedProduct && (
          <div className="product-details">
            <h3>{selectedProduct.name}</h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="category-image"
            />
            <p>
              <strong>Full Description:</strong> {selectedProduct.fullDescription}
            </p>
            <p>
              <strong>Price:</strong> ₹{selectedProduct.finalPrice.toFixed(2)}
            </p>
            <button onClick={() => updateCart(selectedProduct, 1)}>
              Add to Cart
            </button>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default GarmentsCategories;
