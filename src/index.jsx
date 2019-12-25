import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
  document.getElementById("root")
);
