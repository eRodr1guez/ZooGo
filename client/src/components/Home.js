import React, { Component } from "react";
import "../assets/css/home.css";
import AnimalGrid from "./common/AnimalGrid";

import EyesIcon from '../assets/images/eyes_icon.svg'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        
        <div className="center-div">
        <img src={EyesIcon} alt="eyes icon" className="eyes-icon mt-5" />
          <h1 className="font-green mt-2">Howdy explorer!</h1>
          <p>Click on an animal to get started!</p>

          <AnimalGrid />
          <a href="/logout" className="regular-link pb-5">Log Out</a>
        </div>
        <div className="blue-box"></div>
      </div>
    );
  }
}
