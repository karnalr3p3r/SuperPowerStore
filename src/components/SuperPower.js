import React, { useState } from "react";
import "../style/superpower"


export default function Power(props){

    const [style, setStyle] = useState("descriptionContainer");

    const changeStyle = () => {
        return (
            setStyle("descriptionContainer2")
        )
    };

    return (
        <div className="mainContainer">
            {/* <div className={style}>
                <button className="button" onClick={changeStyle()}>{props.name}</button>
            </div> */}

            <div className="nameContainer">
                <h1>{props.name}</h1>
            </div>
            <div className="descriptionContainer">
                <p>{props.detail}</p>
           </div>
        </div>
    );
};