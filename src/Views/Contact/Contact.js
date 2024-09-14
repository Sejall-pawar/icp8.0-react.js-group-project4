import React from 'react'
import './contact.css'
import sales from './sales.png'
import Button1 from '../../Components/button/button'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { Link} from 'react-router-dom'
import location from './location.png'
import call from './call.png'
import mail from './mail.png'

function Contact() {
  return (
    <div>
      <Header />
      <div>
      <div><h1 className='title'>Contact Us</h1></div>
        <div className='container-1'>
          <div className='innerbox'>
             <div className='items'><img src={location} alt='img' className='icons'/> 1 &2, Agarwal Market, Station Rd, Opp.rly St., Vile Parle (e) Mumbai Maharashtra</div>
             <div className='items'><img src={call} alt='img' className='icons'/> +91 2226146184</div>
             <div className='items'><img src={mail} alt='img' className='icons'/> rentifyhub@gmail.com</div>
          </div>
          <div className='innerbox1'>
            <div><img src={sales} alt='img' className='callimg'></img>
            </div>
            <div style={{textAlign:'center',fontSize:'30px',color:'#405D72',padding:'10px'}}>Talk to a member of our sales team.</div>
            <div style={{textAlign:'center',margin:'10px',color:'#758694'}}>We'll help you find out right  product at right pricing.</div>            
            <div className='button1'><Button1 text='Contact Sales'/></div>
            <div className='button1'><Link to='/inquiry'><Button1 text='Send Inquiry'/></Link></div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact