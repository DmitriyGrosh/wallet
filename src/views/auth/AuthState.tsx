import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import { Button } from "@mui/material";

interface IState {
  setTest: Dispatch<SetStateAction<boolean>>;
}

const AuthState: FC<IState> = ({ setTest }) => {
  const [currentState, setCurrentState] = useState<boolean>(false);

  useEffect(() => {
    console.log("==========>2", 2);
  }, []);

  const changeState = () => {
    setCurrentState((prevState) => !prevState);
  };

  const changeState2 = () => {
    setTest((prevState) => !prevState);
  };

  console.log("==========>3", 3);
  return (
    <div>
      <Button onClick={changeState}>First Test</Button>
      <Button onClick={changeState2}>Second Test</Button>
    </div>
  );
};

export default AuthState;
