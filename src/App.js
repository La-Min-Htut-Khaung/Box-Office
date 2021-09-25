import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <div>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
