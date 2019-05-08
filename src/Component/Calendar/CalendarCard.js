import React, { Component } from 'react';


import './CarlendarCard.css';

export default class CalendarCard extends Component {
    render() {
        const {_id, imgUrl, from, to, day, price} = this.props.data;
        const date = day.getDate(), month = day.getMonth(), hours = day.getHours();
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 px-1 py-2 calendarcard">
                <div className="card">
                    <img className="card-img-top" src={require(`${imgUrl}`)} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">{`${from} - ${to}`}</h5>
                        <p className="card-text">{`Day: ${date}/${month}`}</p>
                        <p className="card-text">{`Time: ${hours}h - ${hours + 3}h`}</p>
                        <p className="card-text">{`Price: ${price} VND`}</p>
                        <button className="btn btn-outline-info"
                            onClick={this.props.book.bind(this, this.props.data)}>Book now!</button>
                    </div>
                </div>
            </div>

        )
    }
}