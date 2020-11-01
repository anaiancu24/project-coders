import React from "react";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}