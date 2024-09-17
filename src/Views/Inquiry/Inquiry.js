import React from "react";
import './Inquiry.css'
import Input from "../../Components/Input/Input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button from './../../Components/Button/Button'

function Inquiry(){
    return(
        <div>
            <Header />
            <div className="inquiry-container">
                    <div className="box-1">
                    <h1>Send us query</h1>
                    <h3>Enter your Name:</h3>
                     <Input type='text' placeholder='Enter your name' />
                     <h3>Enter your Phone No:</h3>
                     <Input type='telephone' placeholder='Enter your Number'/>
                    </div>
                    <div className="box-2">
                    <h3>Enter query:</h3>
                    <textarea type='text' placeholder='Start typing here...' className="input-box-1"/>
                    <div className='submit'><Button type='submit' text ='Submit'/></div>
                    </div>
            </div>
            <Footer />
        </div>

    )
}

export default Inquiry;