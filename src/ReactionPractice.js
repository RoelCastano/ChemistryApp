import React, { Component } from 'react';

import DragDropReactionQuestion from './DragDropReactionQuestion';
import './ReactionPractice.css';

class ReactionPractice extends Component {

  constructor(props) {
    super(props);
    const {
      reaction: { options },
    } = this.props;
    const shuffledOptions = [...options];
    this.shuffle(shuffledOptions);
    const correctAnswer = shuffledOptions.indexOf(options[0]);
    this.state = {
      shuffledOptions,
      correctAnswer,
      selected: -1,
    };
  }

  updateSelected = selected =>
    this.setState({...this.state, selected});

  checkAnswer = () => {
    const { selected, correctAnswer } = this.state;
    const correct = selected === correctAnswer;
    window.alert(`Tu respuesta seleccionada es ${correct ? '':'in'}correcta.`);
    this.setState({...this.state, selected: -1});
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  render() {
    const {
      reactionId,
      reaction: { reaction, options },
    } = this.props;
    const {
      selected,
    } = this.state;

    const question = '¿Qué debe de ir en el espacio?';
    const instructions = 'Usa tu cursor para arrastrar la opción correcta al recuadrio.';
    return (
      <div className="section">
        <div className="card">
          <div className="card-content">
          <DragDropReactionQuestion
            {...{
              droppedCallback: this.updateSelected,
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
                onClick={this.checkAnswer}
                className="button is-fullwidth is-large is-info"
                disabled={selected === -1}>
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
