import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ManagerPage extends Component {
  constructor() {
      super();

      this.state = {
          email: '',
          adress: '',
          phonenumber: '',
          name: ''
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
          <form onSubmit={this.handleSubmit} className="formfields">
            <div className="formfield">
              <label className="formfield-label" htmlfor="name">full Name</label>
              <input type="text" id="name" className="formfield-input" placeholder="User Name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className="formfield">
              <label className="formfield-label" htmlfor="adress">Adress</label>
              <input type="text" id="adress" className="formfield-input" placeholder="User Address" name="adress" value={this.state.adress} onChange={this.handleChange} />
            </div>
            <div className="formfield">
              <label className="formfield-label" htmlfor="email">E-Mail Address</label>
              <input type="email" id="email" className="formfield-input" placeholder="User Email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="formfield">
              <label className="formfield-label" htmlfor="phonenumber">Phone Number</label>
              <input type="number" id="phonenumber" className="formfield-input" placeholder="User Phone Number" name="phonenumber" value={this.state.number} onChange={this.handleChange} />
            </div>
            <div className="formfield">
            <button className="formfield-button mr-20">Update infomation</button>
            </div>
            <div className="formfield">
            <Link to="/" className="formfield-link">My History</Link>
            </div>
            <div className="formfield">
            <Link to="/" className="formfield-link">Change my password</Link>
            </div>
          </form>
        </div>
      );
  }
}
export default ManagerPage;
