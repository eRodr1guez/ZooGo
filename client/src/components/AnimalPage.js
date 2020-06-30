import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/animal-page.css";
import Container from "react-bootstrap/Container";

import CoinsIcon from "../assets/images/coins_yellow.svg";
import { GlobalContext } from "../store";

export default class AnimalPage extends Component {
  // componentDidMount() {
  //   this.context.dispatch({
  //     type: "setCurrentAnimal",
  //     payload: this.props.match.params.id,
  //   });
  //   // axios.get(`/api/animals/${this.props.match.params.id}`).then((res) => {
  //   //   this.setState({ currentAnimal: res.data });
  //   // });
  // }

  render() {
    return (
      <Container fluid>
        <img
          src={this.context.globalState.currentAnimal.picture}
          alt={this.context.globalState.currentAnimal.name}
          width="100%"
          className="animal-img my-4"
        />
        <h2 className="nunito-font animal-title">
          {this.context.globalState.currentAnimal.name}
        </h2>
        <h3 className="nunito-font animal-subtitle mb-3">
          Home: {this.context.globalState.currentAnimal.origin}
        </h3>
        <p className="animal-description mb-4">
          {this.context.globalState.currentAnimal.description}
        </p>
        <div className="text-center pt-2">
          <Link to="/trivia-page">
            <button className="nunito-font mb-5">
              <img
                className="pr-2"
                src={CoinsIcon}
                width="60px"
                alt="coins icon"
              />
              Get Points!
            </button>
          </Link>
        </div>
        <div className="coral-box"></div>
      </Container>
    );
  }
}

AnimalPage.contextType = GlobalContext;
