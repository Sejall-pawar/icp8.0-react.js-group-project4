import React from 'react'
import "./Footer.css"
import facebook from "./facebook.png"
import instagram from "./social.png"
import twitter from "./twitter.png"
import linkedin from "./linkedin.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div>
                        <div>
                            <h1>Rentify Hub</h1>
                            <div>
                                <img className='social-img' src={facebook} />
                                <img className='social-img' src={instagram} />
                                <img className='social-img' src={twitter} />
                                <img className='social-img' src={linkedin} />
                            </div>
                        </div>
                    </div>
                    <div className='pages'>
                        <Link to="/">Home</Link>
                        <Link to="/furniture">Furniture</Link>
                        <Link to="/garments">Garments</Link>
                        <Link to="/electronics">Electronics</Link>
                    </div>
                    <div className='pages'>
                        <Link to="/contact">Contact</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/registration">User Registration</Link>
                    </div>
                    <div></div>
                    <div>
                        <h1 className='type'>Furniture On Rent</h1>
                        <h3 className='type-name'>Bedroom Furniture</h3>
                        <h3 className='type-name'>Living Room Furniture</h3>
                        <h3 className='type-name'>Sofa Set</h3>
                        <h3 className='type-name'>Dining Table</h3>
                    </div>
                    <div>
                    <h1 className='type'>Appliances On Rent</h1>
                        <h3 className='type-name'>Refrigerator</h3>
                        <h3 className='type-name'>Air Cooler</h3>
                        <h3 className='type-name'>Washing Mschine</h3>
                        <h3 className='type-name'>Microwave</h3>
                    </div>
                </div>
                <hr></hr>
                <div className='footer-line'>
                    <h1>&copy; 2024  Rentify Hub Products & Services Pvt. Ltd</h1>
                    <h1>
                    All Rights Reserved | Terms and Conditions | Privacy Policy
                    </h1>
                </div>
            </footer>
        </div>
    )
}

export default Footer