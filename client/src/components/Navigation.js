import React, { Component } from "react";
import { GlobalContext } from "../store";

import "../assets/css/navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  componentDidMount() {
    if (this.context.globalState.currentAccount.points === 0) {
      let user = JSON.parse(localStorage.getItem("user"));

      this.context.dispatch({
        type: "updatePoints",
        payload: user.points,
      });
    } else {
      localStorage.setItem(
        "points",
        this.context.globalState.currentAccount.points
      );
    }
  }

  render() {
    return (
      <div className="navigation">
        <div className="wrapper">
          <Link to="/home">
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
            <p>{this.context.globalState.currentAccount.points}</p>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.contextType = GlobalContext;
