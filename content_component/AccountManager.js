import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ManagerPage from './component_data/pages/ManagerPage';

import './css_component/AccountManager.css';

class AccountManager extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="manager-body">
          <p className="title"> account infomation </p>
          <ManagerPage />
          </div>
        </div>
      </Router>
    );
  }
}

export default AccountManager;
