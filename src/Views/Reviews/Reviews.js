import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/reviewcard/reviewcard'
import profile from './profile.png'
import rating from './rating.png'
import './Reviews.css';
function Reviews() {
  return (
    <div>
      <div><Header/></div>
      <div><h1 className='review-title'>WHAT OUR CUSTOMER SAYS!!</h1></div>
      <div className='card-container'>

        <div className='card-container1'>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      </div>
      <div className='card-container2'>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' Reviews='4' /></div>
      </div>
      </div>
      
      

      
      <div><Footer/></div>
    </div>
  )
}

export default Reviews