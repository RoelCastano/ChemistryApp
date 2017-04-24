import React, { Component } from 'react';
import './Exam.css';

import reactions from './reaction_resources';
import DragDropReactionQuestion from './DragDropReactionQuestion';

const StartMessage = props => (
  <div className="displayBox">
    <div className="content">
      <div className="container is-fluid">
        <p className="title">
            ¿Estás listo para un examen rápido?
        </p>
        <p className="subtitle">
            Hemos aprendido sobre 5 diferentes analgésicos y hemos practicado.
            Ahora estás listo para demostrar tus conocimientos.
        </p>
      </div>
    </div>
    <div className="buttons">
      <a className="button continue"
        onClick={props.nextIndex}>
        COMENZAR
      </a>
    </div>
  </div>
);

class Exam extends Component {

  constructor() {
    super();
    const reactionKeys = Object.keys(reactions);
    this.state = {
      reactions,
      reactionKeys,
      gradeAnswer: id => id,
      shuffledOptions: [],
      reactionId: '',
      reaction: {},
      answers: [],
      index: -1,
    };
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  updateReaction = (index) => {
    const {
      reactions,
      reactionKeys,
    } = this.state;

    const reactionId = reactionKeys[index];
    const { reaction, options } = reactions[reactionId] || {};

    let shuffledOptions = [];
    let gradeAnswer = i => i;
    if (typeof options !== 'undefined') {
      shuffledOptions = [...options];
      this.shuffle(shuffledOptions);
      const correctAnswer = shuffledOptions.indexOf(options[0]);
      gradeAnswer = this.updateExamResults(correctAnswer, shuffledOptions);
    }

    this.setState({
      ...this.state,
      shuffledOptions,
      gradeAnswer,
      reactionId,
      reaction,
      index,
    });
  }

  updateIndex = change => {
    const {
      index,
      reactionKeys,
    } = this.state;
    let nextIndex = index + change;
    if (nextIndex < reactionKeys.length &&
        nextIndex >= 0) {
      this.setState({
        ...this.state,
        index: nextIndex,
      });
      this.updateReaction(nextIndex);
    }
  }

  nextIndex = () => this.updateIndex(1)
  previousIndex = () => this.updateIndex(-1)
  skipQuestion = () => {
    const { index, answers } = this.state;
    answers[index] = { correct: false, answer: '' };
    this.nextIndex();
  }

  updateExamResults = (correctAnswer, options) => (selected) => {
    const { index, answers } = this.state;
    const nextAnswers = [...answers];
    nextAnswers[index] = {
       answer: options[selected],
       correct: correctAnswer === selected,
    };
    this.setState({
      ...this.state,
      answers: nextAnswers,
    });
  }

  render() {
    const {
      index,
      answers,
      reaction,
      reactionId,
      gradeAnswer,
      shuffledOptions,
    } = this.state;

    const isUnanswered = typeof answers[index] === 'undefined' ||
      answers[index].answer === '';


    return (
      <div className="section background">
        <div className="card is-info">
          <div className="card-content">
            { index < 0 ?
              <StartMessage {...this.props}
                nextIndex={this.nextIndex}
                /> :
              <div className="exam-question">
                <DragDropReactionQuestion
                  {...{
                    droppedCallback: gradeAnswer,
                    options: shuffledOptions,
                    reactionId,
                    reaction,
                  }}
                />
              </div>
            }
          </div>
          {index >= 0 ?
            <footer className="card-footer">
              <div className="card-footer-item">
                <a className="button is-fullwidth is-large is-info is-inverted"
                  onClick={this.previousIndex}>
                  Anterior
                </a>
              </div>
              <div className="card-footer-item">
                {isUnanswered ?
                  <a className="button is-fullwidth is-large is-danger is-inverted"
                  onClick={this.skipQuestion}>
                    Saltar pregunta
                  </a>:
                  <a className="button is-fullwidth is-large is-info is-inverted"
                    onClick={this.nextIndex}>
                    Siguiente
                  </a>
                }
              </div>
            </footer> :
              ''
          }
        </div>
      </div>
    );
  }
}

export default Exam;
