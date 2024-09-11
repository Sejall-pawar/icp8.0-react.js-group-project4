import React from 'react'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import one from "./Img/1.jpg";
import two from "./Img/2.avif";
import three from "./Img/3.avif";
import four from "./Img/4.avif";
import R1 from "./Img/R1.jpg";
import R2 from "./Img/R2.jpg";
import R3 from "./Img/R3.jpg";
import R4 from "./Img/R4.jpg";
import R5 from "./Img/R5.avif";
import R6 from "./Img/R6.avif";
import "./Home.css";
import "./../../index.css"


function home() {

  const KeyItems = [
    {
      No: 1,
      Img: one,
      Title: 'Wide Range of Items',
      SubTitle: 'From furniture to electronics, find everything you need in one place.'
    },
    {
      No: 2,
      Img: two,
      Title: 'Affordable Prices',
      SubTitle: 'Quality rentals at prices that fit your budget.'
    },
    {
      No: 3,
      Img: three,
      Title: 'Flexible Terms',
      SubTitle: 'Rent items for as long or as short as you need.'
    },
    {
      No: 4,
      Img: four,
      Title: 'Convenient Delivery',
      SubTitle: 'Get items delivered to your doorstep hassle-free.'
    }
  ];

  const RentItems = [
    {
      No: 1,
      bgImg: R1,
      Name: 'Bed Room',
      Type: 'Furniture',
      Pricetag: 'Starting From',
      Price: '@200/mo'
    },
    {
      No: 2,
      bgImg: R2,
      Name: 'Living Room',
      Type: 'Furniture',
      Pricetag: 'Starting From',
      Price: '@100/mo'
    },
    {
      No: 3,
      bgImg: R3,
      Name: 'Garments',
      Type: 'Deals',
      Pricetag: 'Starting From',
      Price: '@350/day'
    },
    {
      No: 4,
      bgImg: R4,
      Name: 'Study Room',
      Type: 'Furniture',
      Pricetag: 'Starting From',
      Price: '@120/mo'
    },
    {
      No: 5,
      bgImg: R5,
      Name: 'Appliances',
      Type: 'Premium Quality',
      Pricetag: 'Starting From',
      Price: '@250/mo'
    },
    {
      No: 6,
      bgImg: R6,
      Name: 'Discounted',
      Type: 'Deals',
      Pricetag: 'Starting From',
      Price: '@99/mo'
    },
  ]

  return (
    <div>

      <Header />

      <div className='bg'>

        <h1 className='Tagline'>
          Affordable Rentals, Just a Click Away!
        </h1>

        <h3 className='Sub-tagline'>
          Discover the easiest way to rent furniture, electronics, vehicles, and more—without breaking the bank.
        </h3>

      </div>

      <div className='Rent-Contanier'>
        <h1 className='Rent-title'>Rent furniture & appliances</h1>
        <h3 className='Rent-subtitle'>Explore by categories</h3>

        <div className='Rent-Item-Contanier'>
          
          {RentItems.map((item) => (
            <div 
            key={item.No} 
            className='Rent-Item'
            style={{backgroundImage: `url(${item.bgImg})`, height:"400px", width:"350px"}}>
              <h1>{item.Name}</h1>
              <h2>{item.Type}</h2>
              <h3>{item.Pricetag}</h3>
              <h1 className='price'>{item.Price}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='Key-main-contanier'>
        <h1 className='key-title'>Why Choose Rentify Hub?</h1>

        <div className='key-contanier'>
          {KeyItems.map((item) => (
            <div key={item.No} className='key-detail'>
              <img src={item.Img} className="key-img" />
              <h1>{item.Title}</h1>
              <h2>{item.SubTitle}</h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default home