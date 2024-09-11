import React from "react";
import './inquiry.css'
import Input from "../../Components/input/input";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Inquiry(){
    return(
        <div>
            <Header />
            <div className="container-inquiry">
                <div><Input /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Inquiry;