import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    const { container } = styles;

    return (
      <div style={container}>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "100%",
    width: "100vw",
    position: "absolute",
    overflow: "hidden",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    backgroundColor: "rgba(153, 153, 153, 0.4)",
  },
};
