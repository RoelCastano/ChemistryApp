import React, { Component } from 'react';
import './Exam.css';

import reactions from './reaction_resources';

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
      reactionKeys,
      reactions,
      index: -1,
    };
  }

  updateIndex = change => {
    const {
      index,
      reactionKeys,
    } = this.state;
    let nextIndex = index + change;
    if (nextIndex >= reactionKeys.length ||
        nextIndex < 0) {
      nextIndex = index;
    }
    this.setState({
      ...this.state,
      index: nextIndex,
    });
  }

  nextIndex = () => this.updateIndex(1);
  previousIndex = () => this.updateIndex(-1);

  render() {
    const {
      index,
    } = this.state;

    return (
      <div className="section background">
        { index < 0 ?
          <StartMessage {...this.props}
            nextIndex={this.nextIndex}
            /> :
          'Starting...'
        }
      </div>
    );
  }
}

export default Exam;
