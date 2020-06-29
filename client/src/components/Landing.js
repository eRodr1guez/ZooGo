import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="resize-msg center-div">
          <img src={require("../assets/images/zooGo_logo.svg")} alt="logo" />
          <h1>
            This app has been optimized for phones and tablets up to 768px X
            1024px. To start using the app please resize your screen.
          </h1>
        </div>
        <div className="start">
          <div className="content center-div">
            <img
              className="logo"
              src={require("../assets/images/zooGo_logo.svg")}
              alt="logo"
            />
            <img
              className="discover-icon"
              src={require("../assets/images/discover_icon.svg")}
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
      </div>
    );
  }
}
