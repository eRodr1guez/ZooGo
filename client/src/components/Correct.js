import React, { Component } from "react";
import "../assets/css/correct.css";
// import animalPrint from "../assets/images/animal-spots-green.svg";
import correctIcon from "../assets/images/correct-icon.svg";
import { Link } from "react-router-dom";

export default class Correct extends Component {
  render() {
    return (
      <div>
        <div className="correct">
          <div className="header">
            <img src={correctIcon} alt="" />
            <h1 className="font-yellow">Correct!</h1>
          </div>

          <div className="center nunito-font">
            <h2>
              EARNED <span className="fs-70 font-yellow">20</span> POINTS
            </h2>
          </div>

          <Link className="bttn yellow-bg" to="/home">
            Find more animals
          </Link>
        </div>
        {/* <img className="pattern-bg" src={animalPrint} alt="animal-pattern" /> */}
      </div>
    );
  }
}
