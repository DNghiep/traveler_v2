import React, { Component } from 'react';

import './Search.css';

//Import daypicker input
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class Search extends Component{
    constructor(props) {
        super(props);
        this.handleStartDayChange = this.handleStartDayChange.bind(this);
        this.handleBackDayChange = this.handleBackDayChange.bind(this);
        this.state = {
            selectedStartDay: this.props.getSearchInput().startDay,
            selectedBackDay: this.props.getSearchInput().backDay,            
        };
    }

    handleStartDayChange(day) {
        this.setState({ selectedStartDay: day });
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: day,
            backDay: this.props.getSearchInput().backDay
        })
    }
    handleBackDayChange(day) {
        this.setState({ selectedBackDay: day });
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: this.props.getSearchInput().startDay,
            backDay: day
        })
    }

    render(){
        return(
            <div>
                <br />
                <div className="container py-2 text-light">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputFrom">From</label>
                        <input type="text" className="form-control" id="From" placeholder="Ho Chi Minh" />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputTo">To</label>
                        <input type="text" className="form-control" id="inputTo" placeholder="Da Lat" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="col-3" htmlFor="startDay">Start Day</label>
                            <DatePicker className="col-9"
                                selected={this.state.selectedStartDay}
                                onChange={this.handleStartDayChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-3" htmlFor="backDay">Back Day</label>
                            <DatePicker className="col-9"
                                selected={this.state.selectedBackDay}
                                onChange={this.handleBackDayChange}
                            />
                        </div>
                    </div>
                    
                    <button className="btn btn-outline-light col-md-6 col-12 offset-md-3" 
                        onClick={this.props.search}
                        href="#Calendar">Let's Find</button>
                </div>
                <br />
            </div>
        )
    }
}