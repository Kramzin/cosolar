import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
}
