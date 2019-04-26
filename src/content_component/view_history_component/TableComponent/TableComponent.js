import React, { Component } from "react";
import "./TableComponent.css";
import data from "./data.js";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import Modal from "react-awesome-modal";
import pic from "../../component_data/image/image1.jpg";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      select_id: "",
      data: [],
      selected_data: ""
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  componentDidMount() {
    this.setState({
      data: data
    });
  }
  render() {
    const columns = [
      {
        Header: "By",
        accessor: "by",
        filterable: true,
        Filter: ({ filter, onChange }) => (
          <select
            value={filter ? filter.value : "0"}
            onChange={event => onChange(event.target.value)}
          >
            <option value="">--</option>
            <option value="Car">Car</option>
            <option value="Plane">Plane</option>
            <option value="Train">Train</option>
          </select>
        ),
        maxWidth: 75,
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "Id",
        accessor: "_id",
        maxWidth: 150,
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "From",
        accessor: "from",
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "To",
        accessor: "to",
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "Depart",
        accessor: "date_go",
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "Return Date",
        accessor: "date_back",
        Cell: props => <div className="cell-text">{props.value}</div>
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: props => (
          <div className="cell-text">
            {Number(props.value).toLocaleString()} VND
          </div>
        )
      },
      {
        Header: "Status",
        accessor: "status",

        filterable: true,
        Filter: ({ filter, onChange }) => (
          <select
            value={filter ? filter.value : "0"}
            onChange={event => onChange(event.target.value)}
          >
            <option value="">--</option>
            <option value="Done">Done</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        ),
        maxWidth: 100,
        Cell: props => <div className="cell-text">{props.value}</div> // Tùy biến component Cell.
      },
      {
        Header: "Detail",
        accessor: "_id",
        Cell: props => (
          <button
            onClick={() => {
              var s_id = props.value;
              var selected_data = this.state.data.find(function(element) {
                return element._id === s_id;
              });
              this.setState({
                select_id: s_id,
                visible: true,
                selected_data: selected_data
              });
            }}
            style={{ width: "100%", borderRadius: "12px" }}
          >
            View Details
          </button>
        )
      }
    ];

    return (
      <div>
        <div className="table-container">
          <ReactTable
            data={this.state.data}
            columns={columns}
            defaultPageSize={15}
          />
          <br />
        </div>
        <Modal
          visible={this.state.visible}
          width="800"
          height="600"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal-container">
            <h1>Details </h1>
            <div className="modal-info-container">
              <div className="modal-info">
                <h4>
                  ID: <h5>{this.state.selected_data._id}</h5>
                </h4>
                <h4>
                  From: <h5>{this.state.selected_data.from}</h5>
                </h4>
                <h4>
                  To: <h5>{this.state.selected_data.to}</h5>
                </h4>
                <h4>
                  Date:{" "}
                  <h5>
                    {this.state.selected_data.date_go} ->{" "}
                    {this.state.selected_data.date_back}
                  </h5>
                </h4>
                <h4>
                  Status: <h5>{this.state.selected_data.status}</h5>
                </h4>
                <h4>
                  Total:{" "}
                  <h5>
                    {Number(this.state.selected_data.price).toLocaleString()}{" "}
                    VND
                  </h5>
                </h4>
              </div>

              <div className="modal-info">
                <img src={pic} width={400} height={400} />
              </div>
            </div>

            <div className="modal-btn-container">
              <button
                type="button"
                class="block"
                href="javascript:void(0);"
                onClick={() => this.closeModal()}
              >
                <h5>Close</h5>
              </button>
              <button type="button" class="block">
                <h5>Print PDF</h5>
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TableComponent;
