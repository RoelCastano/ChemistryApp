import React, { Component } from 'react';
import './ReactionPractice.css';

class ReactionPractice extends Component {
  render() {
    return (
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div
              className="question columns">
              <div className="column has-text-centered">
                <code>Centered question?</code>
              </div>
            </div>
            <div
              className="problem columns">
              <div className="column is-one-third">
                <code>is-one-third</code>
              </div>
              <div className="column is-two-thirds">
                <code>is-two-thirds</code>
              </div>
            </div>
            <div
              className="options columns is-multiline">
              <div className="column is-half">
                <code>is-half</code>
              </div>
              <div className="column is-half">
                <code>is-half</code>
              </div>
              <div className="column is-half">
                <code>is-half</code>
              </div>
              <div className="column is-half">
                <code>is-half</code>
              </div>
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
        </div>
      </div>
    );
  }
}

export default ReactionPractice;
