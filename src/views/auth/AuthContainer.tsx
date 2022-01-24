import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AuthState from "./AuthState";

interface IAuthContainer {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
  })
  .required();

const AuthContainer: FC<IAuthContainer> = ({ setIsAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [test, setTest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "1");
    navigate("/");
  };

  const changeState = () => {
    setTest((prevState) => {
      console.log("==========>prevState", prevState);
      return !prevState;
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <TextField
              data-testid="name"
              color="primary"
              error={!!errors.name}
              variant="filled"
              margin="normal"
              label="Name"
              helperText={errors.name?.message}
              inputProps={{
                ...register("name"),
              }}
            />
            {errors.name?.message && <span>{errors.name?.message}</span>}
            <TextField
              data-testid="email"
              color="primary"
              error={!!errors.email}
              variant="filled"
              margin="normal"
              label="Email"
              helperText={errors.email?.message}
              inputProps={{
                ...register("email"),
              }}
            />
            <TextField
              data-testid="password"
              type="password"
              color="primary"
              error={!!errors.password}
              variant="filled"
              margin="normal"
              label="Password"
              helperText={errors.password?.message}
              inputProps={{
                ...register("password"),
              }}
            />
            {/* eslint-disable-next-line jsx-a11y/aria-role */}
            <Button role="submit" type="submit">
              send
            </Button>
            <Button onClick={changeState}>Test</Button>
            {test && <span>required</span>}
            <AuthState setTest={setTest} />
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AuthContainer;
