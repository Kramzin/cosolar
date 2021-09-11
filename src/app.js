import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Calculatorr } from "./pages";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculatorr />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
