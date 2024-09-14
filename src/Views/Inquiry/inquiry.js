import React from "react";
import './Inquiry.css'
import Input from "../../Components/input/input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Box from './box.jpg'

function Inquiry(){
    return(
        <div>
            <Header />
            <div className="inquiry-container">
                <div className="input-container">
                    <div><h1>Send Inquiry</h1></div>
                     <Input />
                </div>
                <div><img src={Box} alt="img" className="box-img" /></div>
            </div>
            <Footer />
        </div>

    )
}

export default Inquiry;