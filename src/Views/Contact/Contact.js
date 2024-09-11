import React from 'react'
import './contact.css'
import helpimg from './help.jpg'
import callimg from './call.png'
import Button1 from '../../Components/button/button'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

function Contact() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='sales'>
          <div><h1>Contact Us</h1></div>
          <div className='innerbox1'>
            <div>          <img src={callimg} alt='img' className='callimg'></img>
            </div>
            <div style={{textAlign:'center',fontSize:'30px'}}>Talk to a member of our sales team.</div>
            <div style={{textAlign:'center',margin:'10px'}}>We'll help you find out right  product at right pricing.</div>            
            <div style={{margin:'35px'}}><Button1 text='Contact Sales'/></div>
           </div>
        </div>
        <div>
          <img src={helpimg} alt='img' className='img'></img>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact