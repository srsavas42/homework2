import React from "react";
import "./Notes.css";

function Entry (message){
    return (
        <div className = "note">
            <h1>{message.title}</h1>
            <p>{message.content}</p>
        </div>
    )
}

export default Entry;