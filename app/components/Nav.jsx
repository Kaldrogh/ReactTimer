import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
  render: () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer
            </li>
            <li>
              <IndexLink to="/timer" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <span className="menu-text-name">Marc Labreveux</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
