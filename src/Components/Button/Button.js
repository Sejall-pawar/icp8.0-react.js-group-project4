import React from "react";
import './Button.css'

function Button(props){
    return(
        <button type={props.type} className="button">{props.text}</button>
    )
}

export default Button;