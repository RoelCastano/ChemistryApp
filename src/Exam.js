import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const ResultsScreen = props => {
  const correct = props.answers.filter(a => a.correct);
  const roundedResult = Math.round(props.result);
  const result = roundedResult <= 100 ? roundedResult : 100;
  return (
    <div className="results-screen">
      <p className="title is-1">
        Contestaste { correct.length } correctamente.
      </p>
      <p className="subtitle is-2">
        Por lo tanto sacaste { result } de 100 puntos posibles.
      </p>
    </div>
  );
};

const PreviousButton = props => {
  const { action, text } = props;
  return (
    <a className="button is-fullwidth is-large is-info is-inverted"
      onClick={action}>
      { text }
    </a>
  );
}

const NextButton = props => {

  const {
    actions: { next, skip, grade },
    index,
    maxIndex,
    isUnanswered,
  } = props;
  const isLastQuestion = index === maxIndex;
  let msg = 'Saltar pregunta';
  let classes = 'button is-fullwidth is-large';
  let action = skip;
  if (isUnanswered) {
    msg = 'Saltar pregunta';
    action = skip;
    classes += ' is-danger is-inverted';
    if (isLastQuestion) {
      msg += ' y calificar';
      action = grade;
    }
  } else {
    msg = 'Siguiente';
    action = next;
    classes += ' is-info is-inverted';
    if (isLastQuestion) {
      classes = 'button is-fullwidth is-large is-success is-inverted';
      msg = 'Calificar examen';
      action = grade;
    }
  }
  return (
    <a className={classes}
    onClick={action}>
      {msg}
    </a>
  );
}

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

  gradeExam = updateAppExamResults => () => {
    const { answers, reactionKeys } = this.state;
    if (answers.length < reactionKeys.length) {
      answers.push({ correct: false, answer: '' });
    }
    const questionWeight = 100.0 / reactionKeys.length;
    const result = answers.reduce((score, ans) =>
      score + (ans.correct ? questionWeight : 0), 0);
    this.setState({
      ...this.state,
      result,
    });
    this.nextIndex();
    updateAppExamResults({
      answers,
      result,
    });
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
      this.setState({
        ...this.state,
        shuffledOptions,
        gradeAnswer,
        reactionId,
        reaction,
        index,
      });
    }

  }

  updateIndex = (change) => {
    const {
      index,
      reactionKeys,
    } = this.state;
    let nextIndex = index + change;
    if (nextIndex <= reactionKeys.length &&
        nextIndex >= 0) {
      this.setState({
        ...this.state,
        index: nextIndex,
      });
      if (nextIndex < reactionKeys.length) {
        this.updateReaction(nextIndex);
      }
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
      reactionKeys,
      shuffledOptions,
    } = this.state;

    const gradeAndUpdate = this.gradeExam(this.props.updateAppExamResults);
    const isUnanswered = typeof answers[index] === 'undefined' ||
      answers[index].answer === '';


    return (
      <div className="section background">
        <div className="card is-info">
          <div className="card-content">
            {index < 0 ?
              <StartMessage {...this.props}
                nextIndex={this.nextIndex}
                /> :
              <div>
                {index < reactionKeys.length ?
                  <DragDropReactionQuestion
                    {...{
                      droppedCallback: gradeAnswer,
                      options: shuffledOptions,
                      reactionId,
                      reaction,
                    }}
                  /> :
                  <ResultsScreen
                    answers={this.state.answers}
                    result={this.state.result}
                    />
                }
              </div>
            }
          </div>
          {index >= 0 ?
            <footer className="card-footer">
              {index < reactionKeys.length ?
                  [<div key="prev" className="card-footer-item">
                    <PreviousButton action={this.previousIndex} text={"Anterior"} />
                  </div>,
                  <div key="next" className="card-footer-item">
                    <NextButton
                      index={index}
                      isUnanswered={isUnanswered}
                      maxIndex={reactionKeys.length - 1}
                      actions={{
                        next: this.nextIndex,
                        skip: this.skipQuestion,
                        grade: gradeAndUpdate,
                      }} />
                  </div>] :
                  [<div key="restart" className="card-footer-item">
                   <Link to={'/exam'}
                      className="button is-fullwidth is-large is-info is-inverted"
                      >
                      Iniciar de nuevo.
                    </Link>
                  </div>,
                  <div key="home" className="card-footer-item">
                    <Link to={'/'}
                      className="button is-fullwidth is-large is-info is-inverted"
                      >
                      Ir al inicio.
                    </Link>
                  </div>]
              }
            </footer> : ''
          }
        </div>
      </div>
    );
  }
}

export default Exam;
