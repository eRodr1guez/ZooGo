import React, { Component } from "react";
import { GlobalContext } from "../store";
import { Link } from "react-router-dom";

import "../assets/css/prizes.css";
import CoinIcon from "../assets/images/coin.svg";
import Soda from "../assets/images/soda.jpg";
import Popcorn from "../assets/images/popcorn.jpg";
import Pizza from "../assets/images/pizza.jpg";

const Check = () => (
  <img
    src={require("../assets/images/checkmark_blue.svg")}
    alt="Prize selected"
    className="checkmark"
  />
);

export default class Prizes extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }

  render() {
    return (
      <div className="prizes">
        <div className="">
          <img
            src={require("../assets/images/gift-icon.svg")}
            alt="Click here to redeem your points"
            className="prizes-icon mt-5"
          />
          <h1 className="font-blue mt-2">Prize Time!</h1>
          <div className="points-box m-4 py-4">
            <h2 className="font-blue nunito-font">
              You have <br />
              {this.context.globalState.currentAccount.points} coins
            </h2>
          </div>
          <p>Choose your prize below</p>

          <div className="my-4" onClick={this.toggleHidden.bind(this)}>
            <div xs={6}>
              {!this.state.isHidden && <Check />}
              <img
                src={Soda}
                alt="fountain drink"
                width="100%"
                className="prize-item"
              />
            </div>
            <div xs={6} className="text-left">
              <h3 className="nunito-font font-blue">Fountain Drink</h3>

              <h4 className="font-grey">
                <img
                  src={CoinIcon}
                  alt="Points"
                  className="mr-1"
                  width="22px"
                />
                70 points
              </h4>
            </div>
          </div>
          <div className="my-4">
            <div xs={6}>
              <img
                src={Popcorn}
                alt="popcorn tub"
                width="100%"
                className="prize-item"
              />
            </div>
            <div xs={6} className="text-left">
              <h3 className="nunito-font font-red">Popcorn Tub</h3>
              <h4 className="font-grey">
                <img
                  src={CoinIcon}
                  alt="Points"
                  className="mr-1"
                  width="22px"
                />
                100 points
              </h4>
            </div>
          </div>
          <div className="my-4">
            <div xs={6}>
              <img
                src={Pizza}
                alt="pizza slice"
                width="100%"
                className="prize-item"
              />
            </div>
            <div xs={6} className="text-left">
              <h3 className="nunito-font font-green">Pizza Slice</h3>
              <h4 className="font-grey">
                <img
                  src={CoinIcon}
                  alt="Points"
                  className="mr-1"
                  width="22px"
                />
                130 points
              </h4>
            </div>
          </div>

          <button
            onClick={() => console.log("sub")}
            className="prizes-btn nunito-font mb-4"
          >
            <Link to="/redeem">Redeem!</Link>
          </button>
        </div>
      </div>
    );
  }
}

Prizes.contextType = GlobalContext;
