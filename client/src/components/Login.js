import React, { Component } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Giraffe from "../assets/images/giraffe.png";

export default class Login extends Component {
  state = {
    username: "",
    birthYear: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const user = {
      username: this.state.username,
      password: this.state.birthYear,
    };
    console.log(user);
    axios
      .post("/api/login", {
        username: user.username,
        password: user.password,
      })
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.data));
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="content center-div">
          <img src={Giraffe} width="100%" alt="Giraffe" />
          <h1>Hello again!</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Username"
              value={this.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Birth year"
              value={this.birthYear}
              name="birthYear"
              onChange={this.handleInputChange}
            />
            <button className="nunito-font" onClick={this.login}>
              Login
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    );
  }
}
