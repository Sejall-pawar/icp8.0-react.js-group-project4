import React from 'react'
import './Contact.css'
import sales from './sales.png'
import Button1 from '../../Components/Button/Button'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { Link} from 'react-router-dom'
import location from './location.png'
import call from './call.png'
import mail from './mail.png'
import phone from './phone.png'

function Contact() {
  return (
    <div>
      <Header />
      <div>
      
        <div className='container-1'>
          <div className='innerbox-1'>
            <div><h1 className='title'>Contact Us</h1></div>
             <div className='items'>
              <img src={location} alt='img' className='icons'/> 1 &2, Agarwal Market, Station Rd, Opp.rly St., Vile Parle (e) Mumbai Maharashtra</div>
             <div className='items'>
                <img src={call} alt='img' className='icons'/> <a href='tel:+91 2226146184' className='link-items'>070-70984830</a>
              </div>
             <div className='items'><img src={mail} alt='img' className='icons'/><a href='mailto:rentifyhub@gmail.com'  className='link-items'>hello@rentifyhub.com</a></div>
          </div>
          <div className='innerbox-2'>
            <div><img src={sales} alt='img' className='callimg'></img>
            </div>
            <div style={{textAlign:'center',fontSize:'30px',color:'#405D72',padding:'10px'}}>Talk to a member of our sales team.</div>
            <div style={{textAlign:'center',margin:'10px',color:'#758694'}}>We'll help you find out right  product at right pricing.</div>            
            <div className='button1'><a href='tel:+91 2226146184' ><Button1 text='Contact Sales' /></a></div>
            <div className='button1'><Link to='/inquiry'><Button1 text='Send Inquiry'/></Link></div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact