import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { GlobalContext } from "../store";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../assets/css/scan.css";

import scanIcon from "../assets/images/qr-icon.svg";

class Scan extends Component {
  handleScan = (data) => {
    if (data) {
      let animal = JSON.parse(data);

      axios.get(`/api/animals/${animal.id}`).then((res) => {
        this.context.dispatch({
          type: "setCurrentAnimal",
          payload: res.data,
        });

        this.props.history.push(`/animal`);
      });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div className="scan">
        <div className="content">
          <img src={scanIcon} alt="scan icon" />

          <p className="worksans-light">
            Scan the QR-Code near the animal's exhibition to play!
          </p>

          <QrReader
            delay={500}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%", maxWidth: "400px", margin: "auto" }}
          />
        </div>
      </div>
    );
  }
}

Scan.contextType = GlobalContext;
export default withRouter(Scan);
