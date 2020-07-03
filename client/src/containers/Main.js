import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import Home from "../components/Home";
import Animal from "../components/Animal";
import Scan from "../components/Scan";
import Trivia from "../components/Trivia";
import Correct from "../components/Correct";
import Incorrect from "../components/Incorrect";
import Prizes from "../components/Prizes";
import Redeem from "../components/Redeem";

const Main = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/scan" component={Scan} />
        <Route path="/animal" component={Animal} />
        <Route path="/trivia" component={Trivia} />
        <Route path="/correct" component={Correct} />
        <Route path="/incorrect" component={Incorrect} />
        <Route path="/prizes" component={Prizes} />
        <Route path="/redeem" component={Redeem} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Main;
