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

import reactions from './reaction_resources';

const reactions_keys = Object.keys(reactions);

class App extends Component {

  reactionFromProps = props =>
    reactions[props.match.params.reactionId];

  render() {
    return (
      <Router>
        <div id="main-content">
          <TopNavbar reactions_keys={reactions_keys} />
          <Switch>
            <Route path="/reaction/:reactionId"
              component={props =>
                <Reaction {...props}
                  reaction={this.reactionFromProps(props)} />
              }>
            </Route>
            <Route path="/exam"
              component={props =>
                <Exam {...props} />
              }>
            </Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
