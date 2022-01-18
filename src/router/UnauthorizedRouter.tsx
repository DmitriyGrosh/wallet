import React, { FC, Dispatch, SetStateAction } from "react";
import { Routes, Route } from "react-router-dom";
import AuthContainer from "../views/auth/AuthContainer";

interface IUnauthorizedRouter {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const UnauthorizedRouter: FC<IUnauthorizedRouter> = ({ setIsAuth }) => {
  return (
    <Routes>
      <Route path="/login" element={<AuthContainer setIsAuth={setIsAuth} />} />
      <Route path="*" element={<AuthContainer setIsAuth={setIsAuth} />} />
    </Routes>
  );
};

export default UnauthorizedRouter;
