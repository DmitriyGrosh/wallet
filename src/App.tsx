import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Box, Drawer } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box display="flex" flexDirection="row">
          <Box className="toolbar" display="flex" flexDirection="column">
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
            <div>asd</div>
          </Box>
          <Box className="container">
            <Router />
          </Box>
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
