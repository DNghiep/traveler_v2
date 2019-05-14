import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class SignUpform extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      repassword: "",
      name: "",
      hasAgreed: false
    };

    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange(e) {
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

  onSignUp(email, password, name) {
    let url = "http://localhost:3000/api/signup";
    axios
      .post(url, { email: email, password: password, user_name: name })
      .then(res => {
        alert(res.statusText);
      });
  }

  render() {
    return (
      <div className="formcenter">
        <form onSubmit={this.handleSubmit} className="formfields">
          <div className="formfield">
            <label className="formfield-label" htmlfor="name">
              full Name
            </label>
            <input
              type="text"
              id="name"
              className="formfield-input"
              placeholder="Enter your full name at least 4 characters"
              name="name"
              value={this.state.name}
              onchange={this.handlechange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlfor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formfield-input"
              placeholder="Enter your password at least 4 characters"
              name="password"
              value={this.state.password}
              onchange={this.handlechange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlfor="repassword">
              Retype Password
            </label>
            <input
              type="password"
              id="repassword"
              className="formfield-input"
              placeholder="Enter your password again"
              name="repassword"
              value={this.state.repassword}
              onchange={this.handlechange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlfor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formfield-input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onchange={this.handlechange}
            />
          </div>

          <div className="formfield">
            <label className="formfield-checkboxlabel">
              <input
                className="formfield-checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onchange={this.handlechange}
              />{" "}
              i agree all statements in{" "}
              <a href="" className="formfield-Termslink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formfield">
            <button
              className="formfield-button mr-20"
              onClick={() => {
                this.onSignUp(this.state.email, this.state.password, this.state.password)
              }}
            >
              create account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpform;
