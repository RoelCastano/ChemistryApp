import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './Reaction.css';

import ReactionPractice from './ReactionPractice';

import Aspirina from './descriptions/Aspirina';
import Ibuprofeno from './descriptions/Ibuprofeno';
import Tylenol from './descriptions/Tylenol';
import Diazepam from './descriptions/Diazepam';
import Librium from './descriptions/Librium';

class Reaction extends Component {
  render() {
    const match = this.props.match;
    const reactionId = this.props.match.params.reactionId;

    const reactions = {
      'reaction_1': Aspirina,
      'reaction_2': Diazepam,
      'reaction_3': Librium,
      'reaction_4': Ibuprofeno,
      'reaction_5': Tylenol,
    };

    return (
      <div className="section background">
        <div className="displayBox">
          <p>
            Hello from Reaction {reactionId}.
          </p>
          <Switch>
            <Route path={`${match.url}/practice`}
              component={ReactionPractice}>
            </Route>
            <Route path={`${match.url}`}
              component={reactions[reactionId]}>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Reaction;
