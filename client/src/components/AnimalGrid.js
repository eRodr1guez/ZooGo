import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import axios from "axios";
import { GlobalContext } from "../store";

export default class AnimalGrid extends Component {
  state = {
    loading: true,
  };

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
      <div className="animal-grid">
        <div className="grid">
          {this.context.globalState.animals.map((animal, key) => (
            <AnimalCard
              key={key}
              src={animal.thumbnail}
              id={animal.id}
              name={animal.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
AnimalGrid.contextType = GlobalContext;
