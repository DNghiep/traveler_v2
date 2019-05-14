import React, { Component } from 'react';

import './CarlendarCard.css';
import SearchFetch from '../../backEnd/fetchSearch';

export default class CalendarCard extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data);
        super(props);
        const { _id,
            from_id,
            to_id,
            fromStationName,
            toStationName,
            base_fee,
            depart_time,
            arival_time,
            seat_count,
            seat_remain } = this.props.data;
        console.log(depart_time);
        console.log(this.props.data);
        const fromName = this.props.data.fromStationName;
        console.log(fromName);
        const toName = this.props.data.toStationName;
        const depart = new Date(depart_time);
        const date = depart.getDate()
        const month = depart.getMonth()
        const hours = depart.getHours()
        this.state = {
            fromName: fromName,
            toName: toName,
            date: date,
            month: month + 1,
            hours: hours,
            base_fee: base_fee,
            seat_remain
        }
    }
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 px-1 py-2 calendarcard">
                <div className="card">
                    <img className="card-img-top" src={require(`./2x1.png`)} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{`${this.state.fromName} - ${this.state.toName}`}</h5>
                        <p className="card-text">{`Day: ${this.state.date}/${this.state.month}`}</p>
                        <p className="card-text">{`Time: ${this.state.hours}h`}</p>
                        <p className="card-text">{`Remain seat: ${this.state.seat_remain}`}</p>
                        <p className="card-text">{`Price: ${this.state.base_fee} VND`}</p>
                        <button className="btn btn-outline-info"
                            onClick={this.props.book.bind(this, this.props.data)}>Book now!</button>
                    </div>
                </div>
            </div>

        )
    }
}