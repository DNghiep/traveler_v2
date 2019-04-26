import React, { Component } from "react";
import "./History.css";
import ItemComponent from "../item_component/ItemComponent";
import TableComponent from "./TableComponent/TableComponent";
class HistoryComponent extends Component {
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
                <h3>
                  <a href="#client/bookings/type/upcoming">Upcoming bookings</a>
                </h3>
              </div>

              <div className="tab-link">
                <h3>
                  <a href="#client/bookings/type/all">All bookings</a>
                </h3>
              </div>
            </div>

            <div class="container-fluid column">
              <TableComponent />

              <h4>For Item (Only for test)</h4>
              <div className="test-view">
                <ItemComponent />
                <ItemComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryComponent;
