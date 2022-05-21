import React from "react";
import "../style/superpower"

export default function Power(props){
    return (
        <div className="mainContainer">
            <div className="nameContainer">
                <h1>{props.name}</h1>
            </div>
            <div className="descriptionContainer">
                <p>{props.detail}</p>
           </div>
        </div>
    );
};