import React, { Component } from "react";
import "../assets/css/register.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    birthYear: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  signUp = () => {
    const user = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.birthYear,
      email: this.state.email,
    };
    axios.post("/api/registerUser", user).then((result) => {
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result.data));
      this.props.history.push("/home");
    });
  };

  render() {
    return (
      <div className="register">
        <div className="content">
          <div>
            <img
              src={require("../assets/images/zebra.png")}
              alt="Zebra"
              className="zebra"
            />
          </div>

          <h1>Sign Up</h1>

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

            <button className="nunito-font" onClick={this.signUp}>
              Sign Up
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

// .register {
//   text-align: center;
//   /* height: 100vh;
//   width: 100vw; */
//   background-color: #2b7f06;
//   /* position: fixed; */
//   top: 0;
//   left: 0;
//   position: fixed;
//   width: 100%;
//   height: 100%;
// }

// .register .center-div {
//   width: 80%;
//   max-width: 260px;
// }

// .register h1 {
//   color: #ffd328;
// }

// .register .form input::placeholder {
//   color: #035300;
//   font-weight: bold;
// }

// .register .form button {
//   background-color: #ffd328;
//   color: #035300;
//   font-weight: bold;
// }

// .register .form button a {
//   font-weight: bold;
//   color: #035300;
//   text-decoration: none;
// }

// .register p {
//   color: #fff;
//   font-size: 20px;
// }

// .register a {
//   color: #fff;
//   text-decoration: underline;
// }

// .zebra {
//   margin: 0 auto;
//   padding-bottom: 2em;
// }

// /* targeting iphone 5 screen size */
// @media only screen and (max-height: 630px) {
//   .zebra {
//     width: 45%;
//   }
// }

// /* targeting iphone X screen size */
// @media only screen and (min-width: 360px) {
//   .zebra {
//     width: 65%;
//   }
// }

// /* targeting ipad screen size */
// @media only screen and (max-width: 1024px) and (min-width: 620px) {
//   .zebra {
//     width: 25%;
//   }
// }

// /* targeting large screen sizes */
// @media screen and (min-width: 1400px) {
//   .zebra {
//     width: 18%;
//   }
// }
