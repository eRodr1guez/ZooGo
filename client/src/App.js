import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/main.css";

import { GlobalContext, initialState, reducer } from "./store";

import Landing from "./components/Landing";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AnimalPage from "./components/AnimalPage";
import QrPage from "./components/QrPage";
import Scanner from "./components/Scanner";
import TriviaPage from "./components/TriviaPage";
import Correct from "./components/Correct";
import Incorrect from "./components/Incorrect";
import Redeem from "./components/Redeem";
import Prizes from "./components/Prizes";

const App = () => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/qrpage" component={QrPage} />
        <Route path="/scanner" component={Scanner} />
        <Route path="/animal-page" component={AnimalPage} />
        <Route path="/trivia-page" component={TriviaPage} />
        <Route path="/correct" component={Correct} />
        <Route path="/incorrect" component={Incorrect} />
        <Route path="/redeem" component={Redeem} />
        <Route path="/prizes" component={Prizes} />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
