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

const descriptions = {
  Librium,
  Aspirin: Aspirina,
  Advil: Ibuprofeno,
  Valium: Diazepam,
  Paracetamol: Tylenol,
};

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
              component={descriptions[reactionId] || 'sin descripción'}>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Reaction;
