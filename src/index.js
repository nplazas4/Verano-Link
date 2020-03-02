import React from "react";
import ReactDOM from "react-dom";
// import "./materialize-core.css";
import "materialize-css/dist/css/materialize.css";
import "./theme-verano.css";
import "./all.min.css";
import App from "../src/components/App";
import * as serviceWorker from "./serviceWorker";

// Browser Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
