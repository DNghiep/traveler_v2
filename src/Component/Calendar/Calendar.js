import React, { Component } from 'react';

import './Calendar.css';

//Import Card
import CalendarCard from './CalendarCard';


//Import calendarData
import CalendarData from '/home/wei/Documents/Code/ttcnpm/traveler_v2/src/DataFiles/CalendarJson/Calendar';

export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handlePageNumber = this.handlePageNumber.bind(this);
        this.state = {
            curDay: this.props.getSearchInput().startDay,
            curPage: 0
        }
    }

    handlePageNumber(index, e){
        const prevState = this.state
        this.setState({
            curDay: prevState.curDay,
            curPage: index
        })
    }

    //force update component
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
        const data = CalendarData.data;
        const length = data.length;
        const numberOfPage = Math.floor(length/12) + ((length%12>0)?1:0);
        const curPage = this.state.curPage;
        const curShow = data.slice(curPage*12, curPage*12+12);
        const pageNumber = [];
        for(let i = 0; i < numberOfPage; i ++){
            pageNumber.push(
                <button type="button" className="btn btn-info"
                    onClick={this.handlePageNumber.bind(this, i)}>{i+1}</button>
            )
        }

        return(
            <div id="Calendar">
                <div className="container py-3">
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

                    <div className="row mt-3">

                        {curShow.map(item=>{
                            return <CalendarCard 
                                key={item._id} 
                                data={item} 
                                book={this.props.book}/>
                        })}

                    </div>
                    

                    <div className="btn-toolbar justify-content-center col-12 mb-3" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group ml-2 mr-2" role="group" aria-label="First group">
                            {pageNumber}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}