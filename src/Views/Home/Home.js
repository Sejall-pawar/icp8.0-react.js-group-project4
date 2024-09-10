import React from 'react'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import one from "./Img/1.jpg";
import two from "./Img/2.avif";
import three from "./Img/3.avif";
import four from "./Img/4.avif";
import "./Home.css";
import "./../../index.css"


function home() {

  const KeyItems=[
    {
      No : 1,
      Img : one,
      Title : 'Wide Range of Items',
      SubTitle : 'From furniture to electronics, find everything you need in one place.'
    },
    {
      No : 2,
      Img : two,
      Title : 'Affordable Prices',
      SubTitle : 'Quality rentals at prices that fit your budget.'
    },
    {
      No : 3,
      Img : three,
      Title : 'Flexible Terms',
      SubTitle : 'Rent items for as long or as short as you need.'
    },
    {
      No : 4,
      Img : four,
      Title : 'Convenient Delivery',
      SubTitle : 'Get items delivered to your doorstep hassle-free.'
    }
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

      <div>
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