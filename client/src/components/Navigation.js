import React, { Component } from "react";
import { GlobalContext } from "../store";

import "../assets/css/navigation.css";
import { Link } from "react-router-dom";

import homeIcon from "../assets/images/home-icon.svg";
import giftIcon from "../assets/images/gift-icon.svg";
import coinsIcon from "../assets/images/coins_blue.svg";

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
            <img src={homeIcon} alt="Home Icon" />
            <p>Home</p>
          </Link>

          <Link to="/prizes">
            <img src={giftIcon} alt="Gift Icon" />
            <p>Prizes</p>
          </Link>

          <div className="coins">
            <img src={coinsIcon} alt="Coins Icon" />
            <p>{this.state.points}</p>
          </div>
        </div>
      </div>
    );
  }
}

Navigation.contextType = GlobalContext;
