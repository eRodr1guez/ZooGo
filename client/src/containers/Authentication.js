import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "../components/Landing";
import Register from "../components/Register";
import Login from "../components/Login";

const Authentication = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default Authentication;
