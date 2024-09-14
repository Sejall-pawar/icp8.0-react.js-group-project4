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
    {
      id: 1,
      image: sofaImage,
      title: 'Sofa Set',
      description: 'Comfortable 3-seater sofa set available for rent.',
      price: '$25/month',
      isAvailable: true
    },
    {
      id: 2,
      image: diningTableImage,
      title: 'Dining Table',
      description: 'Elegant dining table with 4 chairs.',
      price: '$20/month',
      isAvailable: true
    },
    {
      id: 3,
      image: studyDeskImage,
      title: 'Study Desk',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month',
      isAvailable: true
    },
    {
      id: 4,
      image: bedImage,
      title: 'King Size Bed',
      description: 'Luxurious king size bed with a soft mattress, perfect for a good night\'s sleep.',
      price: '$30/month',
      isAvailable: true
    },
    {
      id: 5,
      image: centerTable,
      title: 'Center Table',
      description: 'Modern center table, perfect for your living room.',
      price: '$10/month',
      isAvailable: true
    },
    {
      id: 6,
      image: shoeRack,
      title: 'Shoe Rack',
      description: 'Spacious shoe rack to keep your footwear organized.',
      price: '$8/month',
      isAvailable: false
    },
    {
      id: 7,
      image: restChair,
      title: 'Wooden Chair',
      description: 'Elegant wooden chair for comfort and style.',
      price: '$12/month',
      isAvailable: true
    },
    {
      id: 8,
      image: bookShelf,
      title: 'Bookshelf',
      description: 'Wooden bookshelf with multiple shelves for your books.',
      price: '$18/month',
      isAvailable: false
    },
    {
      id: 9,
      image: woodenSwing,
      title: 'Wooden Swing',
      description: 'Traditional wooden swing for your home.',
      price: '$20/month',
      isAvailable: false
    },
    {
      id: 10,
      image: bedTable,
      title: 'Bedside Table',
      description: 'Compact bedside table with a drawer for storage.',
      price: '$15/month',
      isAvailable: false
    },
    {
      id: 11,
      image: dressingTable,
      title: 'Dressing Table',
      description: 'Elegant dressing table with a large mirror and multiple storage compartments.',
      price: '$18/month',
      isAvailable: true
    },
    {
      id: 12,
      image: wardRobe,
      title: 'Wardrobe',
      description: 'Spacious 2-door wardrobe with ample space for clothes and accessories.',
      price: '$22/month',
      isAvailable: true
    }
  ];

  return (
    <div>
      <Header />
      <div className="furniture-container">
        <h1>Furniture on Rent</h1>
        <div className="furniture-cards">
          {furnitureItems.map((item) => (
            <FurnitureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

function FurnitureCard({ item }) {
  const [count, setCount] = useState(1);
  const [error, setError] = useState('');

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
      setError(''); 
    } else {
      setError('Maximum limit reached (5 items).');
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setError(''); 
    } else {
      setError('Minimum quantity is 1.');
    }
  };

  return (
    <div className="furniture-card">
      <img src={item.image} alt={item.title} className="furniture-image" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="furniture-price">{item.price}</p>

      {!item.isAvailable ? (
        <p className="out-of-stock-message">Out of Stock</p>
      ) : (
        <>
          <div className="counter-container">
            <button className="counter-button" onClick={handleDecrement}>-</button>
            <span className="quantity-display">{count}</span>
            <button className="counter-button" onClick={handleIncrement}>+</button>
          </div>
          <p className="error-message">
            {error || (count > 5 ? 'You cannot add more than 5 items.' : '')}
          </p>
          <button className="rent-button">Rent Now</button>
        </>
      )}
    </div>
  );
}

export default Furniture;
