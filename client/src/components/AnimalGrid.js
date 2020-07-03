import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import { GlobalContext } from "../store";

export default class AnimalGrid extends Component {
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
