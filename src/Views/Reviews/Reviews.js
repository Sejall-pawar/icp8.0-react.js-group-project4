import React from 'react'
import "./reviews.css"
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Card from '../../Components/reviewcard/reviewcard'
import profile from './profile.png'
import rating from './rating.png'
function Reviews() {
  return (
    <div>
      <div><Header/></div>
      <div><h1 className='review-title'>WHAT OUR CUSTOMER SAYS!!</h1></div>
      <div className='cards-container'>

        <div className='card-container1'>
      <div className='review-container'><Card img={profile} userName = 'Omkar Pawar' CustReviews = 'providing such a good service.' Reviews='(4.5)'Card img1={rating} /></div>
      <div className='review-container'><Card img={profile} userName = 'Netra W'  CustReviews = 'products are so useful and clean.' Reviews='(4.5)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={profile} userName = 'Tanuja S'  CustReviews = 'good rental service.' Reviews='(4.7)' Card img1={rating}  /></div>
      </div>
      <div className='card-container2'>
      <div className='review-container'><Card img={profile} userName = 'Varsha vanve'  CustReviews = 'affordable pricing.' Reviews='(4.1)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={profile} userName = 'Sanika S'  CustReviews = 'amazing staff and services.' Reviews='(4.3)' Card img1={rating}  /></div>
      <div className='review-container'><Card img={profile} userName = 'Pratik S'  CustReviews = 'pricing start range is good.' Reviews='(4.1)' Card img1={rating} /></div>
      </div>
      </div>
      
      

      
      <div><Footer/></div>
    </div>
  )
}

export default Reviews