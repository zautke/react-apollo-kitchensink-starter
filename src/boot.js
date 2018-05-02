import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

React.render(<App />, document.getElementById("app"));
registerServiceWorker();
