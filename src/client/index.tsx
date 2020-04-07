import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "core-js/modules/es.array.find";

import App from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
