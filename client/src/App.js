import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
          <Route path='*' component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
