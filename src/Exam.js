import React, { Component } from 'react';
import './Exam.css';

class Exam extends Component {
  render() {
    return (
      <div className="section background">
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
            <a className="button continue">COMENZAR</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Exam;
