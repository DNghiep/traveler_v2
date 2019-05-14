import React, { Component } from "./node_modules/react";
import "./History.css";
//import ItemComponent from "../item_component/ItemComponent";
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
            <div className="booking-result-tabs-container " />
          </div>

          <div class="container-fluid column">
            <TableComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default HistoryComponent;
