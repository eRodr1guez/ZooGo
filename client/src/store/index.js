// configuration to access heroku database
// "development": {
//   "username": "umk01e2375qvi5qx",
//   "password": "f1idg5bqejquu4sf",
//   "database": "i34adtr8uas8wno3",
//   "host": "sq65ur5a5bj7flas.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   "port": 3306,
//   "dialect": "mysql"
// },

import React from "react";

export const GlobalContext = React.createContext();
export const initialState = {
  currentAccount: {
    username: "", //use userid instead
    points: 0,
  },
  animals: [],
  currentAnimal: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addPoints":
      const newState = {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload + state.currentAccount.points,
        },
      };
      return newState;
    case "updatePoints":
      localStorage.setItem("points", action.payload);
      return {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload,
        },
      };
    case "storeAnimals":
      return {
        ...state,
        animals: action.payload,
      };
    case "setCurrentAnimal":
      // const currentAnimal = state.animals.find(
      //   // eslint-disable-next-line
      //   (animal) => animal.id == action.payload
      // );
      // console.log(currentAnimal);
      return {
        ...state,
        currentAnimal: action.payload,
      };

    default:
      return state;
    // break;
  }
};
