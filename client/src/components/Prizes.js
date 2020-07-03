import React, { Component } from "react";
import { GlobalContext } from "../store";
import { withRouter } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import "../assets/css/prizes.css";
import CoinIcon from "../assets/images/coin.svg";

class Prizes extends Component {
  state = {
    points: 0,
  };

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (this.state.points !== user.points) {
      this.setState({ points: user.points });
    }
  }

  redeem = (points) => {
    if (this.context.globalState.currentAccount.points >= points) {
      this.context.dispatch({
        type: "subtractPoints",
        payload: points,
      });

      this.props.history.push("/redeem");
    } else {
      alert("not enough coins");
    }
  };

  render() {
    return (
      <div className="prizes">
        <img
          src={require("../assets/images/gift-icon.svg")}
          alt="Click here to redeem your points"
          className="prizes-icon mt-5"
        />
        <h1 className="font-blue mt-2">Prize Time!</h1>
        <div className="points-box m-4 py-4">
          <h2 className="font-blue nunito-font">
            You have <br />
            {this.state.points} coins
          </h2>
        </div>
        <p>Choose your prize below</p>

        <MDBContainer onClick={() => this.redeem(70)}>
          <MDBRow>
            <MDBCol size="6">
              <img
                src={require("../assets/images/soda.jpg")}
                alt="fountain drink"
                className="prize-item"
              />
            </MDBCol>
            <MDBCol size="6">
              <h3 className="nunito-font font-blue">Drink</h3>
              <h4 className="font-grey">
                <img src={CoinIcon} alt="Points" width="22px" />
                70 coins
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer onClick={() => this.redeem(100)}>
          <MDBRow>
            <MDBCol size="6">
              <img
                src={require("../assets/images/popcorn.jpg")}
                alt="popcorn"
                className="prize-item"
              />
            </MDBCol>
            <MDBCol size="6">
              <h3 className="nunito-font font-blue">Popcorn</h3>
              <h4 className="font-grey">
                <img src={CoinIcon} alt="Points" width="22px" />
                100 coins
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer onClick={() => this.redeem(120)}>
          <MDBRow>
            <MDBCol size="6">
              <img
                src={require("../assets/images/pizza.jpg")}
                alt="Pizza Slice"
                className="prize-item"
              />
            </MDBCol>
            <MDBCol size="6">
              <h3 className="nunito-font font-blue">Pizza</h3>
              <h4 className="font-grey">
                <img src={CoinIcon} alt="Points" width="22px" />
                120 coins
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        {/* <button
          onClick={() => console.log("sub")}
          className="prizes-btn nunito-font mb-4"
        >
          <Link to="/redeem">Redeem!</Link>
        </button> */}
      </div>
    );
  }
}

Prizes.contextType = GlobalContext;
export default withRouter(Prizes);
