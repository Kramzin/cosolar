import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Calculatorr, Signin } from "./pages";
// import * as ROUTES from "./constants/routes";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
