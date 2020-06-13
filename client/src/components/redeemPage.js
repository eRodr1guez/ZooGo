import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeNavbar from "./HomeNav";

import "../assets/css/redeem.css";
import PointsIcon from "../assets/images/gift-icon.svg";
import CoinIcon from "../assets/images/coin.svg";
import Soda from "../assets/images/soda.jpg";
import Popcorn from "../assets/images/popcorn.jpg";
import Pizza from "../assets/images/pizza.jpg";

import BlueCheckmarkIcon from "../assets/images/checkmark_blue.svg";

const Check = () => (
  <img src={BlueCheckmarkIcon} alt="Prize selected" className="checkmark" />
);

export default class Redeem extends Component {
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
      <Container>
        <HomeNavbar />
        <div className="prizes">
          <div className="center-div">
            <img
              src={PointsIcon}
              alt="Click here to redeem your points"
              className="redeem-icon mt-5"
            />
            <h1 className="font-blue mt-2">Prize Time!</h1>
            <div className="points-box m-4 py-4">
              <h2 className="font-blue nunito-font">
                You have <br />
                250 points
              </h2>
            </div>
            <p>Choose your prize below</p>

            <Row className="my-4" onClick={this.toggleHidden.bind(this)}>
              <Col xs={6}>
                {!this.state.isHidden && <Check />}
                <img
                  src={Soda}
                  alt="fountain drink"
                  width="100%"
                  className="prize-item"
                />
              </Col>
              <Col xs={6} className="text-left">
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
              </Col>
            </Row>
            <Row className="my-4" onClick={this.toggleHidden.bind(this)}>
              <Col xs={6}>
                {!this.state.isHidden && <Check />}
                <img
                  src={Popcorn}
                  alt="popcorn tub"
                  width="100%"
                  className="prize-item"
                />
              </Col>
              <Col xs={6} className="text-left">
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
              </Col>
            </Row>
            <Row className="my-4" onClick={this.toggleHidden.bind(this)}>
              <Col xs={6}>
                {!this.state.isHidden && <Check />}
                <img
                  src={Pizza}
                  alt="pizza slice"
                  width="100%"
                  className="prize-item"
                />
              </Col>
              <Col xs={6} className="text-left">
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
              </Col>
            </Row>

            <button className="redeem-btn nunito-font mb-4">Redeem!</button>

            <a href="/logout" className="regular-link pb-5">
              Log Out
            </a>
          </div>
        </div>
        <div className="yellow-zigzag"></div>
      </Container>
    );
  }
}
