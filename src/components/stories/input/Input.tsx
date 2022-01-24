import React, {
  Dispatch,
  FC,
  forwardRef,
  useEffect,
  SetStateAction,
  ForwardedRef,
  ChangeEventHandler,
  LegacyRef,
  MutableRefObject,
} from "react";
import { useMountedState } from "react-use";
import { StyledComponentProps } from "@mui/material";

interface IInput {
  setIsMounted: Dispatch<SetStateAction<boolean>>;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const { setIsMounted } = props;
  const isMounted = useMountedState();
  useEffect(() => {
    const data = isMounted();
    setIsMounted(data);
    console.log("==========>isMountedInput()", data);
  }, []);

  console.log("==========>isMountedInput()2", isMounted());

  return <input ref={ref} />;
});

export default Input;
