import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import trust from "./Img/trust.png";
import cheers from "./Img/cheers.png";
import CD1 from "./Img/CD1.avif";
import CD2 from "./Img/CD2.avif";
import CD3 from "./Img/CD3.jpg";
import CD4 from "./Img/CD4.jpg";
import msg from "./Img/msg.png";
import closeIcon from "./Img/close.png";
import "./Home.css";
import "./../../index.css"
import { THEME, RentItems, KeyItems } from '../../Config/Data';
import { Toaster, toast } from 'react-hot-toast';

function Home() {
  const [showPopup, setShowPopup] = useState(true);

 

  return (
    <div>

      <Header />

      {showPopup && (
        <div className="popup-box">
          <div className="popup-content">
            <img src={closeIcon} alt="close" className="popup-close" onClick={() => {setShowPopup(false); 
              toast.success("See you soon! Your registration awaits.👋")}} />
            <h2>Register Now!</h2>
            <p>Sign up today to get exclusive rental deals and offers.</p>
            <Link to="/registration">
              <button className="popup-button">Go to Registration</button>
            </Link>
          </div>
        </div>
      )}

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
            <Link to={item.link} key={item.No} className="Rent-Link">
              <div className="Rent-Item">
                <div
                  className="background-blur"
                  style={{
                    backgroundImage: `url(${item.bgImg})`,
                  }}
                ></div>
                <h1 style={{ textAlign: "center", marginBottom: "auto" }}>{item.Name}</h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "290px",
                  }}
                >
                  <h3>{item.Pricetag}</h3>
                  <h2 className="price">{item.Price}</h2>
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
      <Toaster/>
    </div>
  );
}

export default Home;
