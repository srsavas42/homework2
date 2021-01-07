import React from "react";
import "./Footer.css";

function getYear (){
    return new Date().getFullYear();
}

const Footer = () => {
    return(
        <div className = "footer">
            <p> Copyright @ 
                <span> {getYear()} </span>
           </p>
        </div>
    )
}

export default Footer;