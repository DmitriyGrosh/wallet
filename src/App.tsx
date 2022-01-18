import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { Box, Typography } from "@mui/material";
import { BrowserRouter, NavLink } from "react-router-dom";

import store from "./redux";

import Router from "./router/Router";

import "./App.scss";
import UnauthorizedRouter from "./router/UnauthorizedRouter";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    const auth = localStorage.getItem("isAuth");

    if (auth) setIsAuth(true);
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        {isAuth ? (
          <Box display="flex" flexDirection="row">
            <Box className="toolbar" display="flex" flexDirection="column">
              <NavLink to="/">
                <Typography>Home</Typography>
              </NavLink>
              <NavLink to="posts">
                <Typography>Posts</Typography>
              </NavLink>
              <NavLink to="users">
                <Typography>Users</Typography>
              </NavLink>
            </Box>
            <Box className="container">
              <Router />
            </Box>
          </Box>
        ) : (
          <UnauthorizedRouter setIsAuth={setIsAuth} />
        )}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
