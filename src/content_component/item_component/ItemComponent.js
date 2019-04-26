import React, { Component } from "react";
import "./ItemComponent.css";
class ItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="item-container">
        <div className="from-container">
          <h2>9:35</h2>
          <h5>Ha Noi</h5>
        </div>

        <div className="vehicle-container">
          <h2>Vehicle</h2>
        </div>

        <div className="to-container">
          <h2>10:35</h2>
          <h5>Ho Chi Minh</h5>
        </div>

        <div className="price-container">
          <h2>1,800,000 VND</h2>
        </div>

        <button className="btn-item">
          <h4>Book</h4>
        </button>
      </div>
    );
  }
}

export default ItemComponent;
