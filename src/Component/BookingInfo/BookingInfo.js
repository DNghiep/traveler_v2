import React, { Component } from 'react';

// import './CarlendarCard.css';

export default class BookingInfo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.data);
        this.state = {
            fromName: this.props.data.from_name,
            toName: this.props.data.to_name,
            date: new Date(this.props.data.depart_time).getDate(),
            month: new Date(this.props.data.depart_time).getMonth() + 1,
            hours: new Date(this.props.data.depart_time).getHours(),
            hoursback: new Date(this.props.data.arrival_time).getHours(),
            base_fee: this.props.data.base_fee,
            seat_remain: this.props.data.seat_remain,
        }
    }

    //TODO: Force component update
    componentDidUpdate(prevProps, prevState, snapshot) {
        // eslint-disable-next-line
        if (this.props != prevProps) {
            this.setState({
                fromName: this.props.data.from_name,
                toName: this.props.data.to_name,
                date: new Date(this.props.data.depart_time).getDate(),
                month: new Date(this.props.data.depart_time).getMonth() + 1,
                hours: new Date(this.props.data.depart_time).getHours(),
                hoursback: new Date(this.props.data.arrival_time).getHours(),
                base_fee: this.props.data.base_fee,
                seat_remain: this.props.data.seat_remain,
            })
        }
    }


    render() {
        return (
            <div className=" BookingInfo">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{`${this.state.fromName} - ${this.state.toName}`}</h5>
                        <p className="card-text">{`Day: ${this.state.date}/${this.state.month}`}</p>
                        <p className="card-text">{`Time: ${this.state.hours}h - ${this.state.hoursback}h`}</p>
                        <p className="card-text">{`Remain seat: ${this.state.seat_remain}`}</p>
                        <p className="card-text">{`Price: ${this.state.base_fee} VND`}</p>
                        </div>
                    </div>
                </div>
                )
            }
}