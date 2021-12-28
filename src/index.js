import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Appp from "./Appp";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Weather/Store";

ReactDOM.render(
  <Provider store={store}>
    <Appp />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
