import "regenerator-runtime/runtime.js";
import React from "react";
import ReactDOM from "react-dom";
import "balloon-css";
import { App } from "./app/app";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
