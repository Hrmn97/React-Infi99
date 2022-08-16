import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "../src/context/ResultContextProvider";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>
);
