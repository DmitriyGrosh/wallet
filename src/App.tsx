import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/main/Main";
import store from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
