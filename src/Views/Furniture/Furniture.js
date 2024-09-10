import React from 'react'
import './Furniture.css'
import Header from './../../Components/Header/Header'; 
import Footer from './../../Components/Footer/Footer';

import sofaImage from './Furniture Img/sofa.jpeg';
import diningTableImage from './Furniture Img/dinning table.jpeg';
import studyDeskImage from './Furniture Img/study desk.jpg';
import bedImage from './Furniture Img/bed.jpg';
import dressingTable from './Furniture Img/dressing table.jpg';
import wardRobe from './Furniture Img/wardrobe.jpeg';



function Furniture() {
    
  const furnitureItems = [
    {
      id: 1,
      image: sofaImage,   
      title: 'Sofa Set',
      description: 'Comfortable 3-seater sofa set available for rent.',
      price: '$25/month'
    },
    {
      id: 2,
      image: diningTableImage,  // Use imported image
      title: 'Dining Table',
      description: 'Elegant dining table with 4 chairs.',
      price: '$20/month'
    },
    {
      id: 3,
      image: studyDeskImage,  // Use imported image
      title: 'Study Desk',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month'
    },
    {
      id: 4,
      image: bedImage,
      title: 'Bed',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month'
    },
    {
      id: 5,
      image: dressingTable, 
      title: 'Study Desk',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month'
    },

    {
      id: 6,
      image: wardRobe, 
      title: 'Study Desk',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month'
    }
    
    
];


return (
  <div>
    
    <Header />

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

  
    <Footer />
  </div>
);
}

export default Furniture;