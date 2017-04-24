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
              Reacción de obtención de analgésicos
            </p>
            <br />
            <p className="subtitle is-4">
              Esta unidad estudia los fundamentos de las reacciones para
              la obtención de fármacos analgésicos.
            </p>
            <br />
            <div className="columns">
              <Link to={`/reaction/${first}`}
                className="column button is-half is-offset-one-quarter is-info is-medium is-fullwidth"
                >
                COMENZAR
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
