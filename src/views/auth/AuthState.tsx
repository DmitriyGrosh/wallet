import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import { Button } from "@mui/material";
import Input from "../../components/stories/input/Input";

interface IState {
  setTest: Dispatch<SetStateAction<boolean>>;
}

const AuthState: FC<IState> = ({ setTest }) => {
  const [currentState, setCurrentState] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    console.log("==========>2", 2);
  }, [isMounted]);

  const changeState = () => {
    setCurrentState((prevState) => !prevState);
  };

  const changeState2 = () => {
    setTest((prevState) => !prevState);
  };

  console.log("==========>3", 3);

  const innerRef = useRef<HTMLInputElement>(null);
  const innerRef2 = useRef<HTMLInputElement>(null);

  console.log("==========>innerRef", innerRef.current);
  console.log("==========>innerRef2", innerRef2.current?.value);
  return (
    <div>
      <Input setIsMounted={setIsMounted} ref={innerRef} />
      <input ref={innerRef2} />
      <Button onClick={changeState}>First Test</Button>
      <Button onClick={changeState2}>Second Test</Button>
    </div>
  );
};

export default AuthState;
