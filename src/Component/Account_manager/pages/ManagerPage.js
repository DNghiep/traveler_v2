import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ManagerPage extends Component {
  constructor() {
      super();

      this.state = {
          email: '',
          address: '',
          name: '',
          phonenumber:''
      };
  }


  render() {
      return (
      <div className="FormCenter">
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="name">Full Name</label>
              <input type="text" id="name" className="FormField__Input" placeholder="User Name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">Password</label>
              <input type="password" id="password" className="FormField__Input" placeholder="User Address" name="address" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" className="FormField__Input" placeholder="User Email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="phonenumber">Phone Number</label>
              <input type="number" id="phonenumber" className="FormField__Input" placeholder="User Phone Number" name="phonenumber" value={this.state.number} onChange={this.handleChange} />
            </div>
            <div className="FormField">
                <Link to="/history" className="FormField__Link">My History</Link> <Link to="/change-password" className="FormField__Link">Change my password</Link>
            </div>
          </form>
        </div>
      );
  }
}
export default ManagerPage;
