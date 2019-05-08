import React, { Component } from 'react';

import './BookingInfo.css';


export default class BookingInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data,
            isDisable: this.props.isDisable
        }
    }

    //force update component
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props !== prevProps){
            this.setState({
                data: this.props.data,
                isDisable: this.props.isDisable
            })
        }
    }

    render() {
        const {_id, imgUrl, from, to, day, price} = this.state.data;
        const date = day.getDate(), month = day.getMonth(), hours = day.getHours();
        return (
            <div id="BookingInfo">
            <div className={`container ${this.state.isDisable}` }>
            <div className="card ">
                <img className="card-img-top" src={require(`${imgUrl}`)} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{`${from} - ${to}`}</h5>
                    <p className="card-text">{`Day: ${date}/${month}`}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{`Time: ${hours}h - ${hours + 3}h`}</li>
                    <li className="list-group-item">{`Price: ${price} VND`}</li>
                </ul>
                <div className="card-body">
                    <button  className="btn btn-info" onClick={this.props.cancel}>Cancel</button>
                    <button  className="btn btn-info" onClick={this.props.book.bind(this, this.props.data)}>Book now!</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}