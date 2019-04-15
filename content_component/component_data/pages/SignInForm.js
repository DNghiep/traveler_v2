import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signinform extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                  <button className="formfield-button mr-20">Sign in</button>
              </div>
            </form>
          </div>
        );
    }
}

export default Signinform;
