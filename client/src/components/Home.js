import React, { Component } from "react";
import "../assets/css/home.css";
import AnimalGrid from "./AnimalGrid";

import EyesIcon from "../assets/images/eyes_icon.svg";
import { GlobalContext } from "../store";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={EyesIcon} alt="eyes icon" className="eyes-icon mt-5" />
        <h1 className="font-green mt-2">Howdy explorer!</h1>
        <p>Click on an animal to get started!</p>

        <AnimalGrid />
        <a href="/logout" className="regular-link pb-5">
          Log Out
        </a>

        {/* <div className="blue-box"></div> */}
      </div>
    );
  }
}

Home.contextType = GlobalContext;
