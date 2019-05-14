import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './SignIn_SignUp.css';

class SignIn_SignUp extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="app">
          <div className="header">  < /div>
          <div className="body">
            <div className="app-aside">
            <p className="title"> sign in </p>
            <SignInForm />
            </div>
            <div className="app-form">
            <p className="title"> sign up </p>
            <SignUpForm />
            </div>
          </div>
          <div className="footer"> < /div>
        </div>
      </Router>
    );
  }
}

export default SignIn_SignUp;
