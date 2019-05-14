import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  onSignUp(email, password, username) {
    let url = "http://localhost:3000/api/signup";
    axios
      .post(url, { email: email, password: password, user_name: username })
      .then(response => {
        alert(response.data);
        console.log(response)
      });
  }
  render() {
    return (
      <div className="formcenter">
        <form onSubmit={this.handleSubmit} className="formfields">
          <div className="formfield">
            <label className="formfield-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formfield-input"
              placeholder="Enter your full name at least 4 characters"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formfield-input"
              placeholder="Enter your password at least 4 characters"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formfield-input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formfield">
            <button
              className="formfield-button mr-20"
              onClick={() => {
                this.onSignUp(
                  this.state.email,
                  this.state.password,
                  this.state.name
                );
              }}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
