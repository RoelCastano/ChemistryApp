import React, { Component } from 'react';

import DragDropReactionQuestion from './DragDropReactionQuestion';
import './ReactionPractice.css';

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
          <DragDropReactionQuestion
            {...{
              reactionId,
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
