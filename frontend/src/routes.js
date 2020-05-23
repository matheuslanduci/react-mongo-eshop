import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";
import ListAll from "./pages/ListAll";
import Update from "./pages/Update";
import Delete from "./pages/Delete";

import Sidebar from "./components/Sidebar";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="*">
        <Sidebar />
      </Route>
    </Switch>
    <Switch>
      <Route exact path="/">
        <ListAll />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/update">
        <Update />
      </Route>
      <Route exact path="/update/:id">
        <Update />
      </Route>
      <Route exact path="/delete">
        <Delete />
      </Route>
      <Route exact path="/delete/:id">
        <Delete />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
