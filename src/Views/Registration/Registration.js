import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';  
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import RegInput from '../../Components/RegistrationInput/RegInput';
import './Registration.css';
import register from './register.jpg';

function Registration() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const navigate = useNavigate();  

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedUserName) setUserName(storedUserName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
  
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('address', address);
  
    toast.success('Registration successful!');  
  
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAddress('');
  
    setTimeout(() => {
      navigate('/');
    }, 1500); 
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      toast.success('Logged in successfully!');  
  
      setLoginEmail('');
      setLoginPassword('');
      setIsLoginOpen(false);
  
      setTimeout(() => {
        navigate('/');
      }, 1000);  
    } else {
      toast.error('Invalid email or password!');
    }
  };
  

  return (
    <div>
      <Header />
<div className='main'>
      <div className='container-reg'>
        <Toaster />
        <img src={register} alt='regImg' className='imgReg' />
        <h2>Register</h2>
        <form id="registrationForm" onSubmit={handleSubmit}>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter your username'
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter your address'
          />

          <button type="submit" id='save'>Register</button>

          <div className="terms">
            <p>
              By signing up, you agree to our{' '}
              <span className="link" onClick={() => setIsTermsOpen(true)}>Terms of Service</span> and{' '}
              <span className="link" onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</span>.
            </p>
            <p>
              Already have an account?{' '}
              <span className="link" onClick={() => setIsLoginOpen(true)}>Log in here</span>.
            </p>
          </div>
        </form>
        <RegInput />
      </div>
      </div>
      <Footer />

      {isTermsOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsTermsOpen(false)}>&times;</span>
            <h2>Terms of Service</h2>
            <p>By using our Site, you confirm that you are at least [age] years old and have the legal capacity to enter into these Terms...</p>
          </div>
        </div>
      )}

      {isPrivacyOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsPrivacyOpen(false)}>&times;</span>
            <h2>Privacy Policy</h2>
            <p>We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information...</p>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                id="loginEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder='Enter your email'
                required
              />

              <label htmlFor="loginPassword">Password:</label>
              <input
                type="password"
                id="loginPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder='Enter your password'
                required
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;