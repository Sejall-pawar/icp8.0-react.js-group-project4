import React, { useState } from 'react';
import './Inquiry.css'
import Input from '../../Components/Input/Input';
import Header from './../../Components/Header/Header'
import Footer from './../../Components/Footer/Footer'
import Button from './../../Components/Button/Button'

const Inquiry = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const inquiry = { name, email, query };

        localStorage.setItem('inquiry', JSON.stringify(inquiry));

        setName('');
        setEmail('');
        setQuery('');

        alert('Inquiry submitted!');
    };

    return (
        <div>
            <Header />
            <div className='inquiry-container'>
            <form onSubmit={handleSubmit}>
                <div className='box-1'>
                <h1>Send us Inquiry</h1>
                    <h3>Name:</h3>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
                    <h3>Email:</h3>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='xyz@abc' />
                </div>
                <div className='box-2'>
                    <h3>Query:</h3>
                    <textarea  value={query} onChange={(e) => setQuery(e.target.value)} required className='input-box-1' placeholder='Start typing here...'/>
                <div className='submit'><Button type="submit" text='Submit' >Submit</Button></div>
                </div>
            </form>
            </div>
            <Footer />
        </div>
    );
};

export default Inquiry;
