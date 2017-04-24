import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import reactions from './reaction_resources.js';

const first = Object.keys(reactions)[0];

class Home extends Component {
  render() {
    return (
      <div className="section background">
        <div className="displayBox card">
          <div className="content card-content">
            <p className="title is-2">
              <center> Reacción de Obtención de Analgésicos</center>
            </p>
            <p className="subtitle is-4">
              Esta unidad estudia los fundamentos de las reacciones para
              la obtención de fármacos analgésicos.
            </p>
            <br />
            <div className="start-button">
              <div className="columns">
                <Link to={`/reaction/${first}`}
                  className="column button is-half is-offset-one-quarter is-info is-medium is-fullwidth start-botton"
                  >
                  <div className="start-text">
                  COMENZAR
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
