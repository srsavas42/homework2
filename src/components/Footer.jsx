import React from "react";
import "./Footer.css";

function getYear (){
    return new Date().getFullYear();
}

const Footer = () => {
    return(
        <div className = "footer">
            <div className = "footer p">
                <p> Copyright @ 
                    <span> {getYear()} </span>
                </p>
           </div>
        </div>
    )
}

export default Footer;