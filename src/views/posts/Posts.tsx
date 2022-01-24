import React, { useReducer } from "react";
import { Button, Typography } from "@mui/material";

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  counter: number;
}

const initialState = { counter: 0 };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      throw new Error();
  }
};

const Posts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
      <Typography>{state.counter}</Typography>
    </div>
  );
};

export default Posts;
