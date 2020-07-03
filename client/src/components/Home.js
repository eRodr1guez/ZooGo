import React, { Component } from "react";
import { GlobalContext } from "../store";

import "../assets/css/home.css";
import axios from "axios";
import AnimalGrid from "./AnimalGrid";

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
        <img
          src={require("../assets/images/eyes_icon.svg")}
          alt="eyes icon"
          className="eyes-icon"
        />
        <h1 className="font-green">Howdy explorer!</h1>
        <p>Click on an animal to get started!</p>

        <AnimalGrid />
      </div>
    );
  }
}

Home.contextType = GlobalContext;
