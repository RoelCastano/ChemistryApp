import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import TopNavbar from './TopNavbar';
import Home from './Home';
import Reaction from './Reaction';
import Exam from './Exam';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-content">
          <TopNavbar />
          <Switch>
            <Route path="/reaction" component={Reaction}>
            </Route>
            <Route path="/exam" component={Exam}>
            </Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
