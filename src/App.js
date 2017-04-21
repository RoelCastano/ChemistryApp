import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import TopNavbar from './TopNavbar';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <div className="section">
        </div>
      </div>
    );
  }
}

export default App;
