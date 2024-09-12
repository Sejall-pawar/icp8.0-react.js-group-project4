import React from 'react'
import './contact.css'
import helpimg from './help.jpg'
import callimg from './call.png'
import Button1 from '../../Components/button/button'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Inquiry from '../Inquiry/inquiry'
import { Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Header />
      <div className='container-1'>
        <div className='sales'>
          <div><h1 className='title'>Contact Us</h1></div>
          <div className='innerbox1'>
            <div> <img src={callimg} alt='img' className='callimg'></img>
            </div>
            <div style={{textAlign:'center',fontSize:'30px',color:'#405D72',}}>Talk to a member of our sales team.</div>
            <div style={{textAlign:'center',margin:'10px',color:'#758694'}}>We'll help you find out right  product at right pricing.</div>            
            <div style={{margin:'35px'}}><Button1 text='Contact Sales'/></div>
            <div style={{margin:'35px'}}><Link to='/inquiry'><Button1 text='Send Inquiry'/></Link></div>
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