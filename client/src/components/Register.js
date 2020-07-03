import React, { Component } from "react";
import { GlobalContext } from "../store";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";
import "../assets/css/register.css";
import Loading from "./Loading";

class Register extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    birthYear: "",
    errMsg: "",
    loading: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  register = () => {
    if (
      this.state.name &&
      this.state.email &&
      this.state.username &&
      this.state.birthYear
    ) {
      this.setState({ loading: true });

      const user = {
        username: this.state.username,
        name: this.state.name,
        password: this.state.birthYear,
        email: this.state.email,
      };

      axios.post("/api/registerUser", user).then((result) => {
        this.setState({ loading: false });

        this.context.dispatch({
          type: "updateUser",
          payload: result.data,
        });

        this.props.history.push("/");
      });
    } else {
      this.setState({ errMsg: "Please enter your credentials." });
    }
  };

  render() {
    return (
      <div className="register">
        {this.state.loading && <Loading />}
        <div className="content">
          <img src={require("../assets/images/zebra.png")} alt="Zebra" />

          <h1>Register</h1>

          <div className="form">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Birth year"
              value={this.state.birthYear}
              name="birthYear"
              onChange={this.handleInputChange}
            />
            <h1 style={{ color: "red", fontSize: "16px" }}>
              {this.state.errMsg}
            </h1>
            <button className="nunito-font yellow-bg" onClick={this.register}>
              Submit
            </button>
          </div>

          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

Register.contextType = GlobalContext;
export default withRouter(Register);
