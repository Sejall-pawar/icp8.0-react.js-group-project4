import React from 'react'
import { Link } from 'react-router-dom';
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
import R6 from "./Img/R6.jpg";
import trust from "./Img/trust.png";
import cheers from "./Img/cheers.png";
import CD1 from "./Img/CD1.avif";
import CD2 from "./Img/CD2.avif";
import CD3 from "./Img/CD3.jpg";
import CD4 from "./Img/CD4.jpg";
import msg from "./Img/msg.png";
import "./Home.css";
import "./../../index.css"
import { THEME } from '../../Config/Data';


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
      Name: 'Bed Room Furniture',
      Pricetag: 'Starting From',
      Price: '@1500/mo',
      link: './furniture'
    },
    {
      No: 2,
      bgImg: R2,
      Name: 'Living Room Furniture',
      Pricetag: 'Starting From',
      Price: '@1300/mo',
      link: './furniture'
    },
    {
      No: 3,
      bgImg: R3,
      Name: 'Garments Deals',
      Pricetag: 'Starting From',
      Price: '@300/day',
      link: './garments'
    },
    {
      No: 4,
      bgImg: R4,
      Name: 'Study Room Furniture',
      Pricetag: 'Starting From',
      Price: '@400/mo',
      link: './furniture'
    },
    {
      No: 5,
      bgImg: R5,
      Name: 'AppliancesPremium Quality',
      Pricetag: 'Starting From',
      Price: '@250/mo',
      link: './electronics'
    },
    {
      No: 6,
      bgImg: R6,
      Name: 'car & Bikes Deals',
      Pricetag: 'Starting From',
      Price: '@500/day',
      link: './vehicles'
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
            <Link to={item.link} key={item.No} className='Rent-Link'>
              <div
                className='Rent-Item'
                style={{
                  backgroundImage: `url(${item.bgImg})`,
                  height: "400px",
                  width: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px"
                }}>
                <h1 style={{ textAlign: "center", marginBottom: "auto" }}>{item.Name}</h1>
                <div style={{ display: "flex", justifyContent: "space-between", width: "100%",marginBottom: "290px" }}>
                  <h3>{item.Pricetag}</h3>
                  <h2 className='price'>{item.Price}</h2>
                </div>
              </div>

            </Link>
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

      <div className='CD-contanier'>

        <div className='CD1'>
          <img src={trust} className='CD-img' />
          <h1>150K+</h1>
          <h2>We are trusted by more than 150K Indians</h2>
          <hr />
          <img src={cheers} className='CD-img' />
          <h1>15K+</h1>
          <h2>Almost over 12K Furnitures and Appliances are rented every month</h2>
        </div>
        <div className='CD2'>

          <div className='CD2-1'>

            <h3>How it works</h3>
            <h1>You are just 4 steps away.!</h1>

            <div className='CD2-1sub'>

              <div className='CD2-1-1'>
                <img src={CD1} className='step-img' />
                <h1>Step 1</h1>
                <h3>Select a product & tenure to start renting</h3>
              </div>

              <div className='CD2-1-1'>
                <img src={CD2} className='step-img' />
                <h1>Step 2</h1>
                <h3>Pay the amount & do KYC</h3>
              </div>

              <div className='CD2-1-1'>
                <img src={CD3} className='step-img' />
                <h1>Step 3</h1>
                <h3>Get items delivered & assembled within 72 hrs</h3>
              </div>

              <div className='CD2-1-1'>
                <img src={CD4} className='step-img' />
                <h1>Step 4</h1>
                <h3>Experience the firsthand magic of furniture</h3>
              </div>

            </div>

          </div>
          <div className='CD2-2'>
            <h3>Have a query? Need help?</h3>
            <h1 style={{ color: THEME.primary }}>Chat With Us</h1>
            <h2>Write to us at  <a href="mailto:hello@rentifyhub.com">hello@rentifyhub.com </a> or talk to our customer care
              representative at &emsp;<a href="tel:070-70984830 "> 070-70984830 </a>(9 AM - 9 PM)</h2>
            <Link to="/contact"><button className='msg-btn'>
              <img src={msg} className='msg-img' />
              <h3>Write to us</h3>
            </button></Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default home