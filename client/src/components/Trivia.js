import React, { Component } from "react";
import "../assets/css/trivia.css";

import { initialState, GlobalContext } from "../store";
import { withRouter } from "react-router-dom";

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      trivia: {},
    };
  }

  componentDidMount() {
    this.setState({ trivia: this.context.globalState.currentAnimal.Trivia[0] }); // only gets the first question
  }

  checkAnswer = (choice) => {
    let correctAnswer = this.state.trivia.answer;
    if (choice === correctAnswer) {
      this.context.dispatch({
        type: "addPoints",
        payload: 20,
      });
      this.props.history.push("/correct");
    } else {
      this.props.history.push("/incorrect");
    }
  };

  render() {
    return (
      <div className="trivia">
        <div className="content">
          <div className="center-div">
            <img
              src={require("../assets/images/star_icon.svg")}
              width="40px"
              alt="star icon"
            />
            <h1 className="font-yellow">Trivia time!</h1>
            <p className="text-light mt-5">True or False</p>
            <h3 className="nunito-font text-light">
              {this.state.trivia.question}
            </h3>
            <div className="mt-4">
              <span>
                <button
                  className="trivia-btn nunito-font mb-2"
                  onClick={() => this.checkAnswer("1")}
                >
                  True
                </button>
                <button
                  className="trivia-btn nunito-font"
                  onClick={() => this.checkAnswer("0")}
                >
                  False
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Trivia.contextType = GlobalContext;
export default withRouter(Trivia);
