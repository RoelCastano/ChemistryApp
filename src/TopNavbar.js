import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TopNavbar.css';

class TopNavbar extends Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
    };
  }

  toggleMenu = () =>
    this.setState({
      toggled: !this.state.toggled,
    });

  render() {
    const isActive = this.state.toggled ?
      'is-active' : '';
    return (
      <nav className="nav">
        <div className="nav-left">
          <NavLink to={'/'}
            className="nav-item"
            activeClassName="is-active"
            >
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </NavLink>
        </div>

        <div className="nav-center">
          <a className="nav-item">
            <span className="icon">
              <i className="fa fa-github"></i>
            </span>
          </a>
          <a className="nav-item">
            <span className="icon">
              <i className="fa fa-twitter"></i>
            </span>
          </a>
        </div>

        <span
          onClick={this.toggleMenu}
          className={`nav-toggle ${isActive}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={`nav-right nav-menu ${isActive}`}>
          <NavLink to={'/reaction'}
            className="nav-item is-tab"
            activeClassName="is-active"
            >
            Reaction
          </NavLink>
          <NavLink to={'/exam'}
            className="nav-item is-tab"
            activeClassName="is-active"
            >
            Exam
          </NavLink>

          <div className="nav-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button" >
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a className="button is-primary">
                  <span className="icon">
                    <i className="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavbar;
