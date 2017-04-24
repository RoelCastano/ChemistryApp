import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './ReactionPractice.css';

class QuestionDropBin extends Component {
  render() {
    return (
      <div>Hello</div>
    );
  }
}

class ReactionPractice extends Component {
  render() {
    const {
      reactionId,
      reaction: { reaction, options },
    } = this.props;
    return (
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div
              className="question columns">
              <div className="column has-text-centered">
                <p className="title is-3">
                  ¿Qué debe de ir en el espacio?
                </p>
                <p className="subtitle is-4">
                  Usa tu cursor para arrastrar la opción correcta al recuadro.
                </p>
              </div>
            </div>
            <div
              className="problem columns">
              <div className="column is-one-third">
                <QuestionDropBin />
              </div>
              <div className="column is-two-thirds">
                <figure className="image">
                  <img
                    alt={`Reaction for ${reactionId} without result`}
                    src={reaction} />
                </figure>
              </div>
            </div>
            <div
              className="options columns is-multiline">
              {options.map((option, i) =>
                <div key={i} className="column is-half">
                  <figure className="image">
                    <img alt={`Option ${i}`}
                      className="option-img" src={option} />
                  </figure>
                </div>
              )}
            </div>
            <div className="controls columns">
              <div
                className="column is-half is-offset-one-quarter">
                <a
                  className="button is-fullwidth is-large is-primary">
                  is-one-quarter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ReactionPractice);
