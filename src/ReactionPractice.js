import React, { Component } from 'react';

import DragDropReactionQuestion from './DragDropReactionQuestion';
import './ReactionPractice.css';
import {
  Link,
} from 'react-router-dom';

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
      modalIsActive: false,
      selected: -1,
      modalMsg: '',
      modalClass: ' is-danger',
    };
  }

  updateSelected = selected =>
    this.setState({...this.state, selected});

  toggleModal = () => this.setState({
    ...this.state,
    modalIsActive: !this.state.modalIsActive,
  })

  checkAnswer = () => {
    const { selected, correctAnswer } = this.state;
    const correct = selected === correctAnswer;
    const msg = `Tu respuesta seleccionada es ${correct ? '':'IN'}CORRECTA.`;
    console.log(msg);
    this.setState({
      ...this.state,
      selected: -1,
      modalClass: correct ? ' is-success' : ' is-danger',
      modalIsActive: !this.state.modalIsActive,
      modalMsg: msg,
    });
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
      modalIsActive,
      modalMsg,
    } = this.state;

    const question = '¿Qué debe de ir en el espacio?';
    const instructions = 'Usa tu cursor para arrastrar la opción correcta al recuadro.';

    return (
      <div className="section">
        <Link to={`reaction/${reactionId}`} className="card-footer-item button is-large is-info">
          Descripción
        </Link>
        <div
          className={`modal ${modalIsActive ? 'is-active':''}`}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <div
              className={`notification ${this.state.modalClass}`}>
              <button onClick={this.toggleModal}
                className="delete is-large"></button>
                <h1 className="title is-1">
                  { modalMsg }
                </h1>
            </div>
          </div>
        </div>
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
