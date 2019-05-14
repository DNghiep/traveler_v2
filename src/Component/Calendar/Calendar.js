import React, { Component } from 'react';

import './Calendar.css';

//Import Card
import CalendarCard from './CalendarCard';


//Import calendarData
import CalendarData from './Calendar.1';

export default class Calendar extends Component{
    constructor(props){
        super(props);
        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handlePageNumber = this.handlePageNumber.bind(this);
        this.state = {
            curDay: this.props.getSearchInput().startDay,
            curPage: 0,
            data: this.props.data
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
    async componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props !== prevProps){
            await this.setState({
                curDay: this.props.getSearchInput().startDay,
                data: this.props.data
            })
            await console.log(this.state.data);
        }
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
        let data = this.state.data;
        // const length, numberOfPage, curPage, curShow, pageNumber;
        let length = 0;
        let numberOfPage = 0;
        let curPage = 0;
        let curShow = [];
        let pageNumber = []
        if(this.state.data){
            console.log(this.state.data);
            length = data.length;
            console.log(length);
            numberOfPage = Math.floor(length/12) + ((length%12>0)?1:0);
            console.log(numberOfPage);
            curPage = this.state.curPage;
            console.log(curPage);
            curShow = data.slice(curPage*12, curPage*12+12);
            console.log(curShow);
            pageNumber = [];
            for(let i = 0; i < numberOfPage; i ++){
                pageNumber.push(
                    <button type="button" className="btn btn-info"
                        onClick={this.handlePageNumber.bind(this, i)}>{i+1}</button>
                )
            }
        }
        console.log(curShow);
        return(
            <div id="Calendar">
                <div className="container py-3">

                    <div className="row mt-3">

                        {curShow.map(item=>{
                            console.log(item);
                            return <CalendarCard 
                                key={item._id} 
                                data={item} 
                                book={this.props.book}
                                findStation={this.props.findStation}/>
                        })}

                        {curShow.length<1&&<h1>NOTHING FOUND!</h1>}

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