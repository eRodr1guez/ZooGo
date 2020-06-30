import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

export default class Loading extends Component {
  render() {
    const { container } = styles;

    return (
      <div style={container}>
        <Spinner animation="grow" className="spinner">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    backgroundColor: "rgba(153, 153, 153, 0.4)",
  },
};
