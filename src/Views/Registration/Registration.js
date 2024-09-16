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

<div className='container-reg'>

{/* <div className='imgReg'> */}

<div><img src = {register} alt='regImg' className='imgReg'/></div>

{/* </div> */}
      {/* <div class="container-reg"> */}
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
    {/* </div> */}
    </div>

      <div><Footer/></div>
    </div>
  )
}
// const form = document.getElementById('registrationForm');


// form.addEventListener('submit', function(event) {
  
//     event.preventDefault();

    
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword= document.getElementById('confirmPassword').value;

//     const userData = {
//         username: username,
//         email: email,
//         password: password,
//         confirmPassword:confirmPassword
//     };

//     localStorage.setItem('userData', JSON.stringify(userData));

//     alert('Registration successful! Your data has been saved.');

//     form.reset();
    
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const storedData = localStorage.getItem('userData');

//     if (storedData) {
//         const userData = JSON.parse(storedData);

//         document.getElementById('username').value = userData.username || '';
//         document.getElementById('email').value = userData.email || '';
//         document.getElementById('password').value = userData.password || '';
//         document.getElementById('confirmPassword').value = userData.confirmPassword || '';
//     }
// });


export default Registration;