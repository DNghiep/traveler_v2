import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ManagerPage from './pages/ManagerPage';
import './SignIn_SignUp.css';

class Account_manager extends Component {
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

export default Account_manager;
