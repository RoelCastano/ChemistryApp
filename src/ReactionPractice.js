import React, { Component } from 'react';

import DragDropReactionQuestion from './DragDropReactionQuestion';
import './ReactionPractice.css';

class ReactionPractice extends Component {
  render() {
    const {
      reactionId,
      reaction: { reaction, options },
    } = this.props;
    const question = '¿Qué debe de ir en el espacio?';
    const instructions = 'Usa tu cursor para arrastrar la opción correcta al recuadrio.';
    return (
      <div className="section">
        <div className="card">
          <div className="card-content">
          <DragDropReactionQuestion
            {...{
              instructions,
              reactionId,
              question,
              reaction,
              options,
            }}
            />
          </div>
          <footer className="card-footer">
            <div
              className="card-footer-item is-paddingless">
              <a
                className="button is-fullwidth is-large is-info">
                Da click aquí para revisar tu respuesta
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default ReactionPractice;
