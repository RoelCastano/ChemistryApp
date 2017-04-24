import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './TopNavbar.css';
import logo from './Logo2.png';

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

  buildReactionPath = reactionNo =>
    `/reaction/${reactionNo}`;

  selectReaction = (event) => {
    const selected = event.target.value;
    this.props.history.push(this.buildReactionPath(selected));
  };

  matchedReactionFromPath = (path) => {
    const reReactionId = /\/reaction\/([^/]+)/g;
    const match = reReactionId.exec(path);
    const hasMatchedReaction = match !== null;
    return hasMatchedReaction ? match[1] : '/';
  };

  render() {
    const isActive = this.state.toggled ?
      'is-active' : '';
    const matchedReaction = this.matchedReactionFromPath(
      this.props.location.pathname
    );
    return (
      <nav className="nav">
        <div className="nav-left">
          <Link to={'/'}
            className="nav-item"
            >
            <img src={logo} alt="PeekPeek logo" />
          </Link>
        </div>

        <div className="nav-center">
          <div className="nav-item field">
            <p className="control">
              <span className="select">
                <select value={matchedReaction} onChange={this.selectReaction}>
                  <option value="/">
                    Selecciona una reacción
                  </option>
                  {this.props.reactions_keys.map(r => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </span>
            </p>
          </div>
        </div>

        <span
          onClick={this.toggleMenu}
          className={`nav-toggle ${isActive}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={`nav-right nav-menu ${isActive} light-text`}>
          <NavLink to={'/exam'}
            className="nav-item is-tab"
            activeClassName="is-active"
            >
            <p style={{color:"white"}} className="title is-3">
              Examen
            </p>
          </NavLink>

        </div>
      </nav>
    );
  }
}

export default withRouter(TopNavbar);
