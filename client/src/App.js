import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import HomePage from './components/HomePage';
import CityPage from './components/CityPage';
import UserProfilePage from './components/UserProfilePage';
import PostPage from './components/PostPage';
import NewPostPage from './components/NewPostPage';
import EditPost from './components/EditPost';
import Footer from './components/shared_components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/cities/:cityId' component={CityPage} />
          <Route exact path='/users/:userId' component={UserProfilePage} />
          <Route exact path='/posts/:postId' component={PostPage} />
          <Route exact path='/cities/:cityId/posts/new' component={NewPostPage} />
          <Route exact path='/cities/:cityId/posts/:id/edit' component={EditPost}/>
          <Route path='*' component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
