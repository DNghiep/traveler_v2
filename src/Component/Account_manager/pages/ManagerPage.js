import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import PhoneInput from 'react-phone-number-input'
import { getCookie } from "../../Cookies/getCookie";
import { setCookie } from "../../Cookies/setCookie";

import History from "../../View_history_component/History";
class ManagerPage extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      address: "",
      phone: "",
      name: "",
      password: ""
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

  getData() {
    let u_id = getCookie("u_id");
    let url = "http://localhost:3001/api/account?u_id=" + u_id;
    axios.get(url).then(res => {
      this.setState({
        email: res.data.email,
        name: res.data.user_name,
        password: res.data.password,
        address: res.data.address,
        phone: res.data.phone
      });
    });
  }
  componentDidMount() {
    this.getData();
  }
  onUpdate(email, password, username, phone, address) {
    let u_id = getCookie("u_id");
    let url = "http://localhost:3001/api/account?u_id=" + u_id;
    axios
      .post(url, {
        email: email,
        password: password,
        user_name: username,
        address: address,
        phone: phone
      })
      .then(response => {
        alert(response.data);
        window.location.reload();
        console.log(response);
      });
  }

  render() {
    return (
      <div className="formcenter">
        <form onSubmit={this.handleSubmit} className="formfields">
          <div className="formfield">
            <label className="formfield-label" htmlfor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formfield-input"
              placeholder={this.state.name}
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlfor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="formfield-input"
              placeholder={this.state.address}
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
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
              placeholder={this.state.email}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              disabled="disabled"
            />
          </div>
          <div className="formfield">
            <label className="formfield-label" htmlfor="phone">
              Phone Number
            </label>
            <input
              type="number"
              id="phone"
              className="formfield-input"
              placeholder={this.state.phone}
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
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
              placeholder="Input new password here"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formfield">
            <button
              className="formfield-button mr-20"
              onClick={() => {
                this.onUpdate(
                  this.state.email,
                  this.state.password,
                  this.state.name,
                  this.state.phone,
                  this.state.address
                );
              }}
            >
              Update infomation
            </button>
          </div>
          <div className="formfield">
            <button
              className="formfield-button mr-20"
              onClick={() => {
                setCookie("u_id", "", 365);
                setCookie("islogin", 0, 365);
                window.location.reload();
              }}
            >
              Log out
            </button>
          </div>
        
        </form>
      </div>
    );
  }
}
export default ManagerPage;
