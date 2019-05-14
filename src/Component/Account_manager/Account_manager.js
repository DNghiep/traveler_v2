import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ManagerPage from './pages/ManagerPage';
import './Account_manager.css';

class Account_manager extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="app">
          <div className="header">  < /div>
          <div className="body">
            <div className="manager-body">
            <p className="title"> account infomation </p>
            <ManagerPage />
            </div>
          </div>
          <div className="footer"> < /div>
        </div>
      </Router>
    );
  }
}

export default Account_manager;
