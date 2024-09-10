import React from 'react'
import './Furniture.css'

function Furniture() {
  const furnitureItems = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/images/sofa.jpg`, 
      title: 'Sofa Set',
      description: 'Comfortable 3-seater sofa set available for rent.',
      price: '$25/month'
    },
    
  ];

  return (
    <div className="furniture-container">
      <h1>Furniture on Rent</h1>
      <div className="furniture-cards">
        {furnitureItems.map((item) => (
          <div key={item.id} className="furniture-card">
            <img src={item.image} alt={item.title} className="furniture-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="furniture-price">{item.price}</p>
            <button className="rent-button">Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture