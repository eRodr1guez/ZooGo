import React from "react";

export const GlobalContext = React.createContext();
export const initialState = {
  currentAccount: null,
  animals: [],
  currentAnimal: null,
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("user", JSON.stringify(data.currentAccount));
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "updateUser": {
      const newState = {
        ...state,
        currentAccount: {
          id: action.payload.id,
          name: action.payload.name,
          username: action.payload.username,
          points: action.payload.points,
        },
      };
      saveToLocalStorage(newState);
      return newState;
    }
    case "logout": {
      const newState = {
        ...state,
        currentAccount: null,
      };
      localStorage.deleteItem("user");
      return newState;
    }
    case "addPoints": {
      const newState = {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload + state.currentAccount.points,
        },
      };
      saveToLocalStorage(newState);
      return newState;
    }
    case "subtractPoints": {
      const newState = {
        ...state,
        currentAccount: {
          ...state.currentAccount,
          points: action.payload - state.currentAccount.points,
        },
      };
      saveToLocalStorage(newState);
      return newState;
    }
    case "storeAnimals": {
      return {
        ...state,
        animals: action.payload,
      };
    }
    case "setCurrentAnimal": {
      return {
        ...state,
        currentAnimal: action.payload,
      };
    }
    default:
      return state;
  }
};
