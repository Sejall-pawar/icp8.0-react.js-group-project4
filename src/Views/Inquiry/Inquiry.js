import React from "react";
import './Inquiry.css'
import Input from './../../Components/Input/Input'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Button1 from './../../Components/Button/Button'

function Inquiry(){
    return(
        <div>
            <Header />
            <div className="inquiry-container">
                <div className="input-container">
                    <div><h1>Send Inquiry</h1></div>
                    <div className="inner-container-1">
                    <div><h3>Name:</h3></div>
                    <div> <h3>Address</h3></div>
                    </div>
                    <div className="inner-container-2">
                     <div style={{width:'50%'}}><Input type='text' placeholder='Enter your name' /></div>
                    <div> <Input type='email' placeholder='xyz@abc'/></div>
                     </div>
                    <div> <h3>Enter query:</h3></div>
                     <div><textarea type='text' placeholder='Start typing here...' className="input-box"/></div>
                     <Button1 text='Submit'/>
                   
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Inquiry;