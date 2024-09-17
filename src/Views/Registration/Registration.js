import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import RegInput from '../../Components/RegistrationInput/RegInput'
import './Registration.css'
import register from './register.jpg'
function Registration() {
  // State variables for form fields
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Load data from local storage on component mount
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedConfirmPassword = localStorage.getItem('confirmPassword');

    

    if (storedUserName) setUserName(storedUserName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
    if (storedConfirmPassword) setConfirmPassword(storedConfirmPassword);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    // Save data to local storage
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmPassword', confirmPassword);

    setMessage('Registration successful!');
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <div><Header /></div>

      <div className='container-reg'>
        <div><img src={register} alt='regImg' className='imgReg' /></div>

        <h2>Register</h2>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter your username'
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
          />

          <button type="submit" id='save'>Register</button>
          <p id="message">{message}</p>
          
        </form>
        <RegInput />
      </div>

      <div><Footer /></div>
    </div>
  );
}

export default Registration;