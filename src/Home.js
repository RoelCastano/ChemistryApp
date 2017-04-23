import React, { Component } from 'react';
import './Home.css';
//import image from './Image.png';

class Home extends Component {
  render() {
    return (
      <div className="section background">
        <div className="displayBox">
          <div className="content">
            <div className="container is-fluid">
              <p className="title">
                  Reacción de obtención de analgésicos
              </p>
              <p className="subtitle">
                  Esta unidad estudia los fundamentos de las reacciones para
                  la obtención de fármacos analgésicos.
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

export default Home;
