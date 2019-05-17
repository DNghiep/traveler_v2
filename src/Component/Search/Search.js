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
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.checkDayValid = this.checkDayValid.bind(this);
        this.resetDay = this.resetDay.bind(this);
        this.state = {
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            selectedStartDay: this.props.getSearchInput().startDay,
            selectedBackDay: this.props.getSearchInput().backDay,            
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props !== prevProps)
        this.setState({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            selectedStartDay: this.props.getSearchInput().startDay,
            selectedBackDay: this.props.getSearchInput().backDay,            
        });
    }

    handleChangeFrom(e){
        this.props.setSearchInput({
            from: e.target.value,
            to: this.props.getSearchInput().to,
            startDay: this.props.getSearchInput().startDay,
            backDay: this.props.getSearchInput().backDay
        })
    }

    handleChangeTo(e){
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: e.target.value,
            startDay: this.props.getSearchInput().startDay,
            backDay: this.props.getSearchInput().backDay
        })
    }

    checkDayValid(date){
        let thisDay = new Date();
        thisDay.setHours(0, 0, 0, 0);
        if(date < thisDay){
            alert("U can't find the day in the fast, idiot!!!!!!!");
            return false;
        }else return true;
    }

    handleStartDayChange(day) {
        let backDay = this.props.getSearchInput().backDay;
        if(day > backDay){
            backDay = day;
            day = this.props.getSearchInput().backDay;
        }
        if(!this.checkDayValid(day)) day = this.state.selectedStartDay;
        if(!this.checkDayValid(backDay)) backDay = this.state.selectedBackDay;
        this.setState({ selectedStartDay: day });
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: day,
            backDay: backDay
        })
    }
    handleBackDayChange(day) {
        let startDay = this.props.getSearchInput().startDay;
        if(day < startDay){
            startDay = day;
            day = this.props.getSearchInput().startDay;
        }
        if(!this.checkDayValid(day)) day = this.state.selectedBackDay;
        if(!this.checkDayValid(startDay)) startDay = this.state.selectedStartDay;
        this.setState({ selectedBackDay: day });
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: startDay,
            backDay: day
        })
    }

    resetDay(){
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: undefined,
            backDay: undefined
        })
    }

    render(){
        const from = this.state.from;
        const to = this.state.to;
        return(
            <div id="Search">
                <br />
                <div className="container py-2 text-light shadow">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputFrom">Type From</label>
                        <input type="text" className="form-control shadow border-primary" id="From" placeholder="Hồ Chí Minh" onChange={this.handleChangeFrom} value={from}/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputTo">Type To</label>
                        <input type="text" className="form-control shadow border-primary" id="inputTo" placeholder="Hà Nội" onChange={this.handleChangeTo} value={to}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="input-group col-md-6">
                            <label className="col-3" htmlFor="startDay">Start Day</label>
                            <DatePicker className="col-9 shadow border-primary"
                                selected={this.state.selectedStartDay}
                                onChange={this.handleStartDayChange}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="col-3" htmlFor="backDay">Back Day</label>
                            <DatePicker className="col-9 shadow border-primary"
                                selected={this.state.selectedBackDay}
                                onChange={this.handleBackDayChange}
                            />
                        </div>
                    </div>
                    <div className="btn-group col-md-6 offset-md-6" role="group" aria-label="Basic example">
                    <button className="btn btn-primary col-4 mt-1 border-none shadow" 
                        onClick={this.resetDay}
                        href="#Search">Reset Day</button>
                    <button className="btn btn-primary col-8 mt-1 border-none shadow" 
                        onClick={this.props.search}
                        href="#Calendar">Let's Find</button>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}