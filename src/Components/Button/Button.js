import React from "react";
import './Button.css'

function Button(props){
    return(
        <button type={props.type} className="button"><img src={props.img} height='25px'/>{props.text}</button>
    )
}

export default Button;