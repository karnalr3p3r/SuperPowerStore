import React from "react";
import powerpill from "../images/powerpill.png";
import about from "../style/about.scss"


export default function About() {
  return (
    <div className="about">
        <div className="text-body">
          <h1>Welcome to the ARSENAL</h1>
        </div>
        <img className="picture" src={powerpill} alt='background' />
        <div className="text-body">
          <h1>This is where regular folk come to become legends!</h1>
        </div>
        <div className="text-body">
        <h2>Do you ever look at the sky and wonder whats out there? Have you ever stopped to ask yourself is what I see on tv actually possible. 
          Well with our new and approved Power Pill you can get to the stars and beyond with a varriety of powers. 
          We have everything from walking on walls, going invisible, and even multiveral travel.</h2>
        </div>
    </div>  
  );
}



