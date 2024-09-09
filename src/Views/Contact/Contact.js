import React from 'react'
import './contact.css'
import helpimg from './help.jpg'
import callimg from './call.png'

function Contact() {
  return (
    <div className='big'>
      <div className='container'>
        <div className='sales'>
          <div><h1>Contact Us</h1></div>
          <div className='innerbox1'>
            <div>          <img src={callimg} alt='img' className='callimg'></img>
            </div>
            <div style={{textAlign:'center',fontSize:'30px'}}>Talk to a member of our sales team.</div>
            <div style={{textAlign:'center',margin:'10px'}}>We'll help you find out right  product at right pricing.</div>
            <button className='button'>Contact Sales</button>
          </div>
        </div>
        <div>
          <img src={helpimg} alt='img' className='img'></img>
        </div>
      </div>
    </div>
  )
}

export default Contact