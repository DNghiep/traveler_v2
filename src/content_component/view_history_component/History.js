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
              <div class="row">
                <div class="section-pd">
                  <div id="sb_message_container" />
                  <div id="sb_push_notification_container" />
                  <div id="sb_bookings_list">
                    <div>
                      <div
                        class="alert alert-info alert-dismissible"
                        role="alert"
                      >
                        There are no appointments yet. Press the "Book Now"
                        button to make an appointment.
                      </div>
                    </div>

                    <ItemComponent />
                  </div>

                  <div class="clearfix" />
                </div>
                <div id="sb_back_btns_plugin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
