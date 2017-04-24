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
    const reaction = this.props.reaction;
    return (
      <div className="section background">
        <div className="displayBox">
          <p>
            Hello from Reaction {reactionId}.
          </p>
          <Switch>
            <Route path={`${match.url}/practice`}
              component={() =>
                <ReactionPractice
                  reactionId={reactionId}
                  reaction={reaction}/>}>
            </Route>
            <Route path={`${match.url}`}
              component={Description}>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Reaction;
