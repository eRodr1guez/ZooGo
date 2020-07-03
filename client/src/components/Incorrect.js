import React, { Component } from "react";
import "../assets/css/incorrect.css";
import wrongIcon from "../assets/images/wrong-icon.svg";
import { Link } from "react-router-dom";

export default class Incorrect extends Component {
  render() {
    return (
      <div className="incorrect">
        <div className="header">
          <img src={wrongIcon} alt="" />
          <h1 className="font-yellow">Wrong!</h1>
        </div>

        <div className="center nunito-font">
          <h2>
            EARNED <span className="fs-70 font-yellow">0</span> POINTS
          </h2>
        </div>

        <Link className="bttn yellow-bg" to="/">
          Find more animals
        </Link>

        {/* <div className="pattern-bg"></div> */}
      </div>
    );
  }
}
