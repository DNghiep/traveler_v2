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
          <h2>From</h2>
        </div>

        <div className="vehicle-container">
          <h2>Vehicle</h2>
        </div>

        <div className="to-container">
          <h2>To</h2>
        </div>

        <div className="price-container">
          <h2>1,800,000vnd</h2>
        </div>

        <div class="btn-item" >
          <h4>Select</h4>
        </div>
      </div>
    );
  }
}

export default ItemComponent;
