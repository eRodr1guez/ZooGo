import React, { Component } from "react";
import { GlobalContext } from "../store";

import "../assets/css/home.css";
import axios from "axios";
import AnimalGrid from "./AnimalGrid";

import eyesIcon from "../assets/images/eyes_icon.svg";

export default class Home extends Component {
  componentDidMount() {
    axios.get("/api/animals").then((res) => {
      this.setState({ loading: false });
      this.context.dispatch({
        type: "storeAnimals",
        payload: res.data,
      });
    });
  }

  render() {
    return (
      <div className="home">
        <img src={eyesIcon} alt="eyes icon" className="eyes-icon" />
        <h1 className="font-green">Howdy explorer!</h1>
        <p>Click on an animal to get started!</p>

        <AnimalGrid />
      </div>
    );
  }
}

Home.contextType = GlobalContext;
