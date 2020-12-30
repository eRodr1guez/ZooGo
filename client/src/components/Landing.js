import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/landing.css";

import logo from "../assets/images/zooGo_logo.svg";
import discoverIcon from "../assets/images/discover_icon.svg";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="content center-div">
          <img className="logo" src={logo} alt="logo" />
          <img
            className="discover-icon"
            src={discoverIcon}
            alt="discover icon"
          />
          <h1 className="font-green">Welcome!</h1>
          <p>
            Explore the zoo to find animals and earn points you can redeem for
            cool prizes!
          </p>
          <Link className="bttn red-bg nunito-font" to="/register">
            Let's Play!
          </Link>
        </div>
      </div>
    );
  }
}
