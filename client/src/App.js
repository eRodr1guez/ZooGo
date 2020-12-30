import React from "react";

import "./assets/css/app.css";

import { GlobalContext, initialState, reducer } from "./store";

import Authentication from "./containers/Authentication";
import Main from "./containers/Main";

import logo from "./assets/images/zooGo_logo.svg";

const App = () => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (!globalState.currentAccount && localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));

      dispatch({
        type: "updateUser",
        payload: user,
      });
    }
  });

  const displayHandler = () => {
    if (!localStorage.getItem("user") || !globalState.currentAccount) {
      return <Authentication />;
    } else {
      return <Main />;
    }
  };

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      <div className="resize-msg center-div">
        <img src={logo} alt="logo" />
        <h1>
          For the best user experience this app has been optimized for phones
          and tablets up to 768px X 1024px. To use the app please resize your
          screen.
        </h1>
      </div>
      <div className="main">{displayHandler()}</div>
    </GlobalContext.Provider>
  );
};

export default App;
