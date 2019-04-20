import React, { Component } from "react";
import "./History.css";
import ItemComponent from "../item_component/ItemComponent";
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }
  render() {
    return (
      <div className="">
        <div>
          <div className="booking-result-view">

            <div className="booking-result-tabs-container ">
              <div className="tab-link">
                <a href="#client/bookings/type/upcoming">upcoming bookings</a>
              </div>

              <div className="tab-link">
                <a href="#client/bookings/type/all">all bookings</a>
              </div>
            </div>
            
            <div class="container-fluid column">
              <ItemComponent />
              <ItemComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
