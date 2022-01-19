import React, { FC, Dispatch, SetStateAction, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthContainer from "../views/auth/AuthContainer";

interface IUnauthorizedRouter {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);
  return null;
};

const UnauthorizedRouter: FC<IUnauthorizedRouter> = ({ setIsAuth }) => {
  return (
    <Routes>
      <Route path="/login" element={<AuthContainer setIsAuth={setIsAuth} />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default UnauthorizedRouter;
