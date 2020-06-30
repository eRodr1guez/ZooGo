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
