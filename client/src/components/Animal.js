import React, { Component } from "react";
import "../assets/css/animal.css";
import { GlobalContext } from "../store";
import { Link } from "react-router-dom";

export default class AnimalPage extends Component {
  render() {
    return (
      <div className="animal">
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
          <Link to="/trivia">
            <button className="nunito-font mb-5">
              <img
                className="pr-2"
                src={require("../assets/images/coins_yellow.svg")}
                width="60px"
                alt="coins icon"
              />
              Get Points!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

AnimalPage.contextType = GlobalContext;
