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
    const instructions = 'Usa tu cursor para arrastrar la opción correcta al recuadro.';
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
        </div>
      </div>
    );
  }
}

export default ReactionPractice;
