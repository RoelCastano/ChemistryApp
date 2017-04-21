import React, { Component } from 'react';
import { withRouter } from 'react-router';
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

  buildReactionPath = reactionNo =>
    `/reaction/${reactionNo}`;

  selectReaction = event =>
    this.props.history.push(this.buildReactionPath(event.target.value));

  render() {
    const isActive = this.state.toggled ?
      'is-active' : '';
    return (
      <nav className="nav">
        <div className="nav-left">
          <Link to={'/'}
            className="nav-item"
            >
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </Link>
        </div>

        <div className="nav-center">
          <div className="nav-item field">
            <p className="control">
              <span className="select">
                <select onChange={this.selectReaction}>
                  <option value="/">Selecciona una reacción</option>
                  <option value="1">
                    Reacción 1
                  </option>
                  <option value="2">
                    Reacción 2
                  </option>
                  <option value="3">
                    Reacción 3
                  </option>
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

        <div className={`nav-right nav-menu ${isActive}`}>
          <NavLink to={'/exam'}
            className="nav-item is-tab"
            activeClassName="is-active"
            >
            Exam
          </NavLink>

        </div>
      </nav>
    );
  }
}

export default withRouter(TopNavbar);
