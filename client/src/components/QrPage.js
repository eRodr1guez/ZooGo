import React, { Component } from "react";

import { Link } from "react-router-dom";
import { GlobalContext } from "../store";
import Container from "react-bootstrap/Container";
import QrIllustration from "../assets/images/qr-icon.svg";

export default class QrPage extends Component {
  render() {
    return (
      <div className="">
        <Container className="text-center">
          <h3 className="mt-5">Did you find the</h3>
          <h2 className="nunito-font font-blue">animal</h2>
          <h3>in the zoo?</h3>
          <img
            src={QrIllustration}
            alt="scan the qr code in the zoo"
            width="50%"
            className="my-5"
          />
          <h2 className="font-blue worksans-light">
            Scan the code with your camera to play!
          </h2>
          <button className="nunito-font red-bg my-5">
            <Link style={{ color: "white" }} to="/scanner">
              Scan now
            </Link>
          </button>
        </Container>
      </div>
    );
  }
}

QrPage.contextType = GlobalContext;
