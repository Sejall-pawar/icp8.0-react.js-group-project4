import React from "react";
import './Inquiry.css'
import Input from '../../Components/input/Input';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Box from './box.jpg'

function Inquiry(){
    return(
        <div>
            <Header />
            <div className="inquiry-container">
                <div className="input-container">
                    <div>Enter your Name:</div>
                     <Input type='text' placeholder='Enter your name' />
                     <div>Enter your Phone No:</div>
                     <Input type='telephone'/>
                     <div>Enter query:</div>
                     <Input type='text' placeholder='Start typing here...'/>
                </div>
                <div><img src={Box} alt="img" className="box-img" /></div>
            </div>
            <Footer />
        </div>

    )
}

export default Inquiry;