import React, {Component} from 'react';
import "../style/app";
import powerpills from "../images/powerpills.png";

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="text-body heading">
            <h1>Welcome to the ARSENAL</h1>
          </div>
          <img className="powerpills" src={powerpills} alt='background' />
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
}
