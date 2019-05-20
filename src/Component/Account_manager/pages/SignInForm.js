import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { getCookie } from "../../Cookies/getCookie";
import { setCookie } from "../../Cookies/setCookie";
class Signinform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    onSignIn() {
      let email = this.state.email;
      let password = this.state.password;
      let url = "http://localhost:3001/api/login";
      axios
        .post(url, { email: email, password: password})
        .then(response => {
          alert(response.data);
          setCookie("u_id",response.data,365);
          if (getCookie("u_id") == "Login Fail") {
            setCookie("islogin", 0 , 365)
          } else {
            setCookie("islogin", 1 , 365)
            window.location.reload();
          }
          console.log(response)
        });
        this.props.updateCookie();
        this.props.updateMainCookie();
    }
    render() {
        return (
        <div className="formcenter">
            <form onSubmit={this.handleSubmit} className="formfields" onSubmit={this.handleSubmit}>
            <div className="formfield">
                <label className="formfield-label" htmlfor="email">E-Mail Address</label>
                <input type="email" id="email" className="formfield-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="formfield">
                <label className="formfield-label" htmlfor="password">Password</label>
                <input type="password" id="password" className="formfield-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="formfield">
                  <button className="formfield-button mr-20"
                  onClick={this.onSignIn}
                  >Sign in</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Signinform;
