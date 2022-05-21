import React, {Component} from 'react';
import "../style/app";
import powerpills from "../images/powerpills.png";
import Powers from "./PowersList"
import PowersList from './PowersList';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="Background"></div>
          <div className="heading">
            <h1>Welcome to the ARSENAL</h1>
          </div>
          <div className="youtube-vid">
          <iframe width="770" height="440" 
          src="https://www.youtube.com/embed/2ErUZv5fc4c?clip=UgkxJ6EhtexinBBW67ay7N21lHmYxuS_mXkS&amp;clipt=EAAYiCc" title="YouTube video player" 
          frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="text-body">
            <h1>This is where regular folk come to become legends!</h1>
          </div>
          <div className="text-body">
          <h2>Do you ever look at the sky and wonder whats out there? Have you ever stopped to ask yourself is what I see on tv actually possible? 
            Well with our new and approved Power Pill from our ground breaking Project Power research you can get to the stars and beyond with a varriety of powers. 
            We have everything from walking on walls, going invisible, and even multiveral travel. Our best Sellers are shown above in our video.</h2>
          </div>

          {/* <PowersList /> */}
      </div>  
    );
  }                 
}
