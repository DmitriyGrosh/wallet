import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Provider } from "react-redux";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from "react-router-dom";

import store from "./redux";

import Router from "./router/Router";

import "./App.scss";
import UnauthorizedRouter from "./router/UnauthorizedRouter";
import AuthorizedRouter from "./router/AuthorizedRouter";

interface ILogout {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
}

const Logout = ({ setIsAuth }: ILogout) => {
  const navigate = useNavigate();
  localStorage.clear();

  useEffect(() => {
    setIsAuth(false);
    navigate("/logout");
  }, [navigate, setIsAuth]);

  return null;
};

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    const auth = localStorage.getItem("isAuth");

    if (auth) setIsAuth(true);
  }, [isAuth]);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
        </Routes>
        {isAuth ? <AuthorizedRouter /> : <UnauthorizedRouter setIsAuth={setIsAuth} />}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
