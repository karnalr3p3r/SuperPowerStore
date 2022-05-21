import React from "react";
import powerpill from "../images/powerpill.png";
import "../style/about.scss"


export default function About() {
  return (
    <div className="about">
        <div className="text-body">
          <h1>This is where we began!</h1>
        </div>
        <div className="">
        <iframe width="1180" height="664" src="https://www.youtube.com/embed/2ErUZv5fc4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
        
        </div>
        <div className="text-body">
        <h2>Do you ever look at the sky and wonder whats out there? Have you ever stopped to ask yourself is what I see on tv actually possible. 
          Well with our new and approved Power Pill developed by Project Power you can get to the stars and beyond with a varriety of powers. 
          We have everything from walking on invisible skin, to going invisible, and even multiveral travel in some of our latest discoveries.</h2>
          <a href="/Quiz">Take the Quiz Now to find out what Power will choose you!</a>
        </div>
    </div>  
  );
}



