import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/main/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Router;
