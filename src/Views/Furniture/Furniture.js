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
      price: '$25/month'
    },
    {
      id: 2,
      image: diningTableImage, 
      title: 'Dining Table',
      description: 'Elegant dining table with 4 chairs available for rent',
      price: '$20/month'
    },
    {
      id: 3,
      image: studyDeskImage,  
      title: 'Study Desk',
      description: 'Spacious study desk, ideal for work or study.',
      price: '$15/month'
    },
    {
      id: 4,
      image: bedImage,
      title: 'King Size Bed',
      description: 'Luxurious king size bed with a soft mattress, perfect for a good night\'s sleep.',
      price: '$30/month'
    },
    {
      id: 5,
      image: dressingTable, 
      title: 'Dressing Table',
      description: 'Elegant dressing table with a large mirror and multiple storage compartments.',
      price: '$18/month'
    },
    {
      id: 6,
      image: wardRobe, 
      title: 'Wardrobe',
      description: 'Spacious 2-door wardrobe with ample space for clothes and accessories.',
      price: '$22/month'
    },

    {
      id: 7,
      image: centerTable, 
      title: 'Center Table',
      description: 'Stylish wooden center table, perfect for your living room or office space.',
      price: '$22/month'
    },
    {
      id: 8,
      image: shoeRack, 
      title: 'Shoe Rack',
      description: 'Compact and durable shoe rack with multiple shelves to keep your footwear organized.',
      price: '$22/month'
    },
    {
      id: 9,
      image: restChair, 
      title: 'Rest Chair',
      description: 'Comfortable reclining rest chair, ideal for relaxation or reading.',
      price: '$22/month'
    },
    {
      id: 10,
      image: bookShelf, 
      title: 'Bookshelf',
      description: 'Spacious wooden bookshelf with multiple shelves for organizing your books and decor.',
      price: '$22/month'
    },
    {
      id: 11,
      image: woodenSwing, 
      title: 'Wooden Swing',
      description: 'Charming wooden swing, perfect for indoor or outdoor relaxation.',
      price: '$22/month'
    },
    {
      id: 12,
      image: bedTable, 
      title: 'Bedside Table',
      description: 'Elegant bedside table with storage drawers for your night-time essentials.',
      price: '$22/month'
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