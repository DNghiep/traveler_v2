import React, { Component } from 'react';

import './CarlendarCard.css';

export default class CalendarCard extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.data);
        this.state = {
            fromName: this.props.data.from_name,
            toName: this.props.data.to_name,
            date: new Date(this.props.data.depart_time).getDate(),
            month: new Date(this.props.data.depart_time).getMonth() + 1,
            hours: new Date(this.props.data.depart_time).getHours(),
            hoursback: new Date(this.props.data.arrival_time).getHours(),
            base_fee: this.props.data.base_fee,
            seat_remain: this.props.data.seat_remain
        }
    }

    //TODO: Force component update
    componentDidUpdate(prevProps, prevState, snapshot){
        // eslint-disable-next-line
        if(this.props != prevProps){
            this.setState({
                fromName: this.props.data.from_name,
                toName: this.props.data.to_name,
                date: new Date(this.props.data.depart_time).getDate(),
                month: new Date(this.props.data.depart_time).getMonth() + 1,
                hours: new Date(this.props.data.depart_time).getHours(),
                hoursback: new Date(this.props.data.arrival_time).getHours(),
                base_fee: this.props.data.base_fee,
                seat_remain: this.props.data.seat_remain
            })
        }
    }
    
    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 px-1 py-2 calendarcard">
                <div className="card">
                    <img className="card-img-top shadow" src={require(`./2x1.png`)} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{`${this.state.fromName} - ${this.state.toName}`}</h5>
                        <p className="card-text">{`Day: ${this.state.date}/${this.state.month}`}</p>
                        <p className="card-text">{`Time: ${this.state.hours}h - ${this.state.hoursback}h`}</p>
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