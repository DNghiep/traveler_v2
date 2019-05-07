import React, { Component } from "react";

import "./Header.css";

//import day-picker
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class Header extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = {
            from: this.props.getSearchInput().startDay,
            to: this.props.getSearchInput().backDay
        }
    }

    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: range.from,
            backDay: range.to
        })
    }
    handleResetClick() {
        this.setState(this.getInitialState());
        this.props.setSearchInput({
            from: this.props.getSearchInput().from,
            to: this.props.getSearchInput().to,
            startDay: undefined,
            backDay: undefined
        })
    }

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="jumbotron mb-0 text-light">
                <h1 className="display-3 text-center">Welcome</h1>
                <p className="lead text-center">Go anywhere with Traveller</p>
                <div className="RangeExample">
                    <p>
                        {!from && !to && 'Please select the start day.'}
                        {from && !to && 'Please select the back day.'}
                        {from &&
                            to &&
                            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
                        {from &&
                            to && (
                                <button className="btn btn-info" onClick={this.handleResetClick}>
                                    Reset
                                </button>
                            )
                        }
                        {from && (<button className="btn btn-info ml-3" href="#Calendar" onClick={this.props.search}>Go Find</button>)}
                    </p>
                    <DayPicker
                        className="Selectable"
                        numberOfMonths={this.props.numberOfMonths}
                        selectedDays={[from, { from, to }]}
                        modifiers={modifiers}
                        onDayClick={this.handleDayClick}
                    />
                </div>
            </div>
        );
    }
}