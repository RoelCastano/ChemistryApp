import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './Reaction.css';

import ReactionPractice from './ReactionPractice';

const Description = props => (
  <section className='section reaction-description'>
    <p>Reaction Description</p>
  </section>
);

class Reaction extends Component {
  render() {
    const match = this.props.match;
    const reactionId = this.props.match.params.reactionId;
    return (
      <div className="section">
        <p>
          Hello from Reaction {reactionId}.
        </p>
        <Switch>
          <Route path={`${match.url}/practice`}
            component={ReactionPractice}>
          </Route>
          <Route path={`${match.url}`}
            component={Description}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Reaction;
