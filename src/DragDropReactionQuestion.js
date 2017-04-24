import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './DragDropReactionQuestion.css';

import { DropTarget } from 'react-dnd';
import { DragSource } from 'react-dnd';

const defaultQuestion = '¿Qué debe de ir en el espacio?';
const defaultInstructions = 'Usa tu cursor para arrastrar la opción correcta al recuadro.';

const dropBinStyle = {
  height: '12rem',
  width: '12rem',
  marginRight: 'auto',
  marginBottom: 'auto',
  color: 'white',
  textAlign: 'center',
};
const optionStyle = {
  cursor: 'move',
  float: 'left',
};
class QuestionDropBin extends Component {
  render() {
    const {
      canDrop, isOver, connectDropTarget
    } = this.props;
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if(canDrop) {
      backgroundColor = 'darkkhaki';
    }
    return connectDropTarget(
      <div style={{ ...dropBinStyle, backgroundColor }}>
        {isActive ?
          'Release to drop' :
          'Drag a box here'
        }
      </div>
    );
  }
}
const answerTarget = {
  drop() {
    return { name: 'Answerbin' };
  },
};
const QuestionDroppableBin = DropTarget(
  'answer',
  answerTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(QuestionDropBin);

class DragAnswer extends Component {
  render () {
    const {
      isDragging,
      connectDragSource,
      index,
      option,
    } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...optionStyle, opacity }}>
          <figure className="image">
            <img alt={`Option ${index}`}
              className="option-img" src={option} />
          </figure>
        </div>,
      )
    );
  };
}
const answerSource = {
  beginDrag(props) {
    return {
      name: props.index,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped option ${item.name} into ${dropResult.name}!`,
      );
    }
  },
};
const DraggableAnswer = DragSource(
  'answer',
  answerSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(DragAnswer);

class DragDropReactionQuestion extends Component {
  render () {
    const {
      instructions,
      reactionId,
      question,
      reaction,
      options,
    } = this.props;
    return (
      <div>
        <div
          className="question columns">
          <div className="column has-text-centered">
            <p className="title is-3">
              {question || defaultQuestion}
            </p>
            <p className="subtitle is-4">
              {instructions || defaultInstructions}
            </p>
          </div>
        </div>
        <div
          className="problem columns">
          <div className="column is-one-third">
            <QuestionDroppableBin />
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
              <DraggableAnswer index={i} option={option} />
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
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropReactionQuestion);