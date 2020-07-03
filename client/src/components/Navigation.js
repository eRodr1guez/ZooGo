import React, { Component } from "react";
import { GlobalContext } from "../store";

import "../assets/css/navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = {
    points: 0,
  };

  componentDidUpdate() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (this.state.points !== user.points) {
      this.setState({ points: user.points });
    }
  }

  render() {
    return (
      <div className="navigation">
        <div className="wrapper">
          <Link to="/">
            <img
              src={require("../assets/images/home-icon.svg")}
              alt="Home Icon"
            />
            <p>Home</p>
          </Link>

          <Link to="/prizes">
            <img
              src={require("../assets/images/gift-icon.svg")}
              alt="Home Icon"
            />
            <p>Prizes</p>
          </Link>

          <div className="coins">
            <img
              src={require("../assets/images/coins_blue.svg")}
              alt="Home Icon"
            />
            <p>{this.state.points}</p>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.contextType = GlobalContext;
