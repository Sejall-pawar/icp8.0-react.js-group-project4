import React from "react";
import './input.css'

function Input(props){
    return(
        <div>
            <input type={props.type} id="id" placeholder={props.placeholder} className="input-box"></input>
        </div>
    )
}

export default Input;