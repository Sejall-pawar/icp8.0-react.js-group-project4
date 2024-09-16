import React from 'react'
import "./Reviews.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/ReviewCard/ReviewCard'
import profile from './profile.png'
import rating from './rating.png'
import woman from './woman.png'
function Reviews() {
  return (
    <div>
      <div><Header/></div>
      <div><h1 className='review-title'>WHAT OUR CUSTOMER SAYS!!</h1></div>
      <div className='cards-container'>

        <div className='card-container1'>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' CustReviews = ' Such a lovely experience. The girls made the experience really enjoyable even in the current climate.Such a good experience.' Reviews='(4.5)'Card img1={rating} /></div>
      <div className='review-container'><Card img={woman} userName = 'Netra W'  CustReviews = ' The best! Found me the perfect dress and such lovely service and attention. Not stuffy or overbearing and listen to what you want.' Reviews='(4.5)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={woman} userName = 'Tanuja S'  CustReviews = 'This app allows me to do [problem] from my smartphone where I want and when I want to.The interface is easy to navigate.' Reviews='(4.7)' Card img1={rating}  /></div>
      </div>
      <div className='card-container2'>
      <div className='review-container'><Card img={woman} userName = 'Varsha vanve'  CustReviews = 'Great dealer to make your first car on rent! Everything went smooth and fast,salesman did a great job informing me about the vehicle.' Reviews='(4.1)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={woman} userName = 'Sanika S'  CustReviews = ' The Sony Alpha a7 III is an outstanding camera with fantastic image quality and low-light performance.' Reviews='(4.3)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={profile} userName = 'Pratik S'  CustReviews = 'The rental fee was reasonable compared to other services. Plus, the option to extend the rental period.' Reviews='(4.1)' Card img1={rating} /></div>
      </div>
      </div>
      
      
      <div><Footer/></div>
    </div>
  )
}

export default Reviews;