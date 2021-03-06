import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './DragDropReactionQuestion.css';

import { DropTarget } from 'react-dnd';
import { DragSource } from 'react-dnd';

const defaultQuestion = '¿Qué debe de ir en el espacio?';
const defaultInstructions = 'Usa tu cursor para arrastrar la opción correcta al recuadro.';

const dropBinStyle = {
  height: '100%',
  width: '100%',
  marginRight: 'auto',
  marginBottom: 'auto',
  color: 'white',
  textAlign: 'center',
};
const dropBinPStyle = {
  width: '100%',
  height: '50%',
  marginRight: 'auto',
  marginBottom: 'auto',
  marginTop: 'auto',
  marginLeft: 'auto',
  color: 'white',
};
const optionStyle = {
  cursor: 'move',
  float: 'left',
};
class QuestionDropBin extends Component {

  constructor() {
    super();
    this.state = {
      selectedImage: null,
    };
  }

  selectImage = img =>
    this.setState({
      selectedImage: img,
    })

  clearImage = () => this.setState({
    selectedImage: null,
  })

  render() {
    const {
      canDrop, isOver, connectDropTarget
    } = this.props;
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    let opacity = 1;
    if (isActive) {
      backgroundColor = 'darkgreen';
      opacity = 0.3;
    } else if(canDrop) {
      backgroundColor = 'darkkhaki';
      opacity = 0.8;
    }
    return connectDropTarget(
      <div>
      {this.state.selectedImage === null ?
        <div
          style={{ ...dropBinStyle, backgroundColor }}>
          <p
            style={{...dropBinPStyle}} className="title is-4">
            {isActive ?
              'Suelta para seleccionar' :
              'Arrastra imagen aquí'
            }
          </p>
        </div> :
        <figure className="image">
          <img style={{ opacity }} alt={`Selected option`}
            className="option-img" src={this.state.selectedImage} />
        </figure>
      }
      </div>
    );
  }
}
const answerTarget = {
  drop(props, monitor, component) {
    console.log("Drops it");
    console.log(component);
    return {
      name: 'Answerbin',
      selectImage: component.selectImage,
    };
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
      src: props.option,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      //console.log(`Dropped ${item.src} in ${dropResult.name}`);
      dropResult.selectImage(item.src);
      props.droppedCallback(item.name);
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
      droppedCallback,
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
          <div className="column is-one-third questionBox">
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
              <DraggableAnswer
                {...{
                  droppedCallback,
                  option,
                  index: i,
                }} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragDropReactionQuestion);
