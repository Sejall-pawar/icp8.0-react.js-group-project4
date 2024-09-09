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
                        <Link to="/vehicles">Vehicles</Link>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer