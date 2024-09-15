import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import RegInput from '../../Components/RegistrationInput/RegInput'
import './Registration.css'
import register from './register.jpg'
function Registration() {
  return (
    <div>
      <div><Header/></div>


      <div class="container-reg">
        <h2>Register</h2>
        <form id="registrationForm">
            <label for="username">Username:</label>
            <input type="text" id="username"  />
            
            <label for="email">Email:</label>
            <input type="email" id="email" />
            
            <label for="password">Password:</label>
            <input type="password" id="password" />
            
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword"/>
            
            <button type="submit">Register</button>
            <p id="message"></p>
        </form>
        <RegInput />
    </div>
   

      <div><Footer/></div>
    </div>
  )
}

export default Registration;