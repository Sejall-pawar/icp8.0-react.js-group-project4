import React from 'react'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./Home.css"

function home() {
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

      <Footer />
    </div>
  )
}

export default home