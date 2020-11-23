import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Home from "./Home";
import Deporte from "./Deportes/Deporte";
import Plan from "./Planes/Plan";

export default function Menu() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/planes">Planes</Link>
          </li>
          <li>
            <Link to="/deportes">Deportes</Link>
          </li>
        </ul>
        <hr></hr>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/deportes">
            <Deporte></Deporte>
          </Route>
          <Route path="/planes">
            <Plan></Plan>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
