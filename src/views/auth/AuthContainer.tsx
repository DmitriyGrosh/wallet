import React, { Dispatch, FC, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  console.log("==========>errors", errors);

  const onSubmit: SubmitHandler<IFormInputs> = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "1");
    navigate("/");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <TextField
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
            <TextField
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
            <Button type="submit">send</Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AuthContainer;
