import React, { Component } from 'react';

import './Calendar.css';

export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            curDay: this.props.getSearchInput().startDay
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props !== prevProps)
            this.setState({
                curDay: this.props.getSearchInput().startDay
            })
    }


    getDayOfWeek(index){
        let dayOfWeak = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        return dayOfWeak[index];
    }

    async handleDayChange(index, e){
        var curDay = this.state.curDay;
        curDay.setDate(curDay.getDate() - index);
        await this.setState({
            curDay: curDay
        })
        await this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: curDay,
            backDay: this.props.getSearchInput().backDay
        })
        await this.props.search();
    }
    render(){
        let curDay = this.state.curDay?this.state.curDay:new Date();
        return(
            <div id="Calendar">
                <div className="container">
                    <div className="row">
                        <div className="btn-group col-12" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-info border-white col-1"
                                onClick={this.handleDayChange.bind(this, 3)}>{this.getDayOfWeek((curDay.getDay() + 6 - 3)%7)}</button>
                            <button type="button" className="btn btn-info border-white col-1"
                                onClick={this.handleDayChange.bind(this, 2)}>{this.getDayOfWeek((curDay.getDay() + 6 - 2)%7)}</button>
                            <button type="button" className="btn btn-info border-white col-2"
                                onClick={this.handleDayChange.bind(this, 1)}>{this.getDayOfWeek((curDay.getDay() + 6 - 1)%7)}</button>
                            <button type="button" className="btn btn-info border-white col-4"
                                onClick={this.handleDayChange.bind(this, 0)}>{`${this.getDayOfWeek((curDay.getDay() + 6)%7)} ${curDay.getDate()}/${curDay.getMonth() + 1}`}</button>
                            <button type="button" className="btn btn-info border-white col-2"
                                onClick={this.handleDayChange.bind(this, -1)}>{this.getDayOfWeek((curDay.getDay() + 6 + 1)%7)}</button>
                            <button type="button" className="btn btn-info border-white col-1"
                                onClick={this.handleDayChange.bind(this, -2)}>{this.getDayOfWeek((curDay.getDay() + 6 + 2)%7)}</button>
                            <button type="button" className="btn btn-info border-white col-1"
                                onClick={this.handleDayChange.bind(this, -3)}>{this.getDayOfWeek((curDay.getDay() + 6 + 3)%7)}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}