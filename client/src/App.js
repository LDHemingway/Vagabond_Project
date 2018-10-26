import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
