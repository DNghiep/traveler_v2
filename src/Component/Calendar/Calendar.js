import React, {
    Component
} from 'react';

import './Calendar.css';

//Import Card
import CalendarCard from './CalendarCard';


export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handlePageNumber = this.handlePageNumber.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.firstPage = this.firstPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
        this.state = {
            curDay: this.props.getSearchInput().startDay,
            curPage: 0,
            data: this.props.data
        }
    }


    handlePageNumber(index, e) {
        const prevState = this.state

        this.setState({
            curDay: prevState.curDay,
            curPage: index
        })
    }

    //TODO: Force component update itself
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            await this.setState({
                curDay: this.props.getSearchInput().startDay,
                data: this.props.data
            })
            // await console.log(this.state.data);
        }
    }

    //TODO: if not use day bar, it can be deleted
    getDayOfWeek(index) {
        let dayOfWeak = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        return dayOfWeak[index];
    }

    async handleDayChange(index, e) {
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

    prevPage(){
        // eslint-disable-next-line
        if(this.state.curPage == 0) return;
        this.setState((prevState)=>({curPage: prevState.curPage-1}));
    }


    nextPage(numberOfPage, e){
        // eslint-disable-next-line
        if(this.state.curPage == numberOfPage - 1) return;
        this.setState((prevState)=>({curPage: prevState.curPage+1}));
    }


    firstPage(){
        this.setState((prevState)=>({curPage: 0}));
    }


    lastPage(numberOfPage, e){
        this.setState((prevState)=>({curPage: numberOfPage-1}));
    }

    render() {
        // eslint-disable-next-line
        let curDay = this.state.curDay ? this.state.curDay : new Date(); //!This can be deleted if no day bar added
        let data = this.state.data;
        let length = 0;
        let numberOfPage = 0;
        let curPage = 0;
        let curShow = [];
        let pageNumber = []
        let showPageNumber = [];
        if (this.state.data) {
            length = data.length;
            numberOfPage = Math.floor(length / 12) + ((length % 12 > 0) ? 1 : 0);
            curPage = this.state.curPage;
            curShow = data.slice(curPage * 12, curPage * 12 + 12);
            // eslint-disable-next-line
            for (let i = 0; i < numberOfPage; i++) {
                pageNumber.push(
                    <button type="button"
                        // eslint-disable-next-line
                        className={`btn btn-primary ${(this.state.curPage==i)?"active":""}`}
                        onClick={this.handlePageNumber.bind(this, i)}>{i + 1}</button>
                )
            }
            showPageNumber = pageNumber;
            if(numberOfPage > 9){
                if(this.state.curPage <= 4){
                    showPageNumber = pageNumber.slice(0, 8);
                }
                else if(this.state.curPage >= (numberOfPage-4)){
                    showPageNumber = pageNumber.slice(numberOfPage-9, numberOfPage);
                }
                else{
                    showPageNumber = pageNumber.slice(this.state.curPage - 4, this.state.curPage+4);
                }
            }
        }
        return (<div id="Calendar" >
            <div className="container py-3" >
            {curShow.length < 1 && this.props.didSearch && < h1 className="text-center text-light"> NOTHING FOUND! </h1>}
                <div className="row mt-3" >
                    {curShow.map(item => {
                        return <CalendarCard
                            key={item._id}
                            data={item}
                            book={this.props.book}
                        />
                    })
                    }
                </div>
                {curShow.length>0&&
                <div className="btn-toolbar justify-content-center col-12 mb-3"
                    role="toolbar"
                    aria-label="Toolbar with button groups" >
                    <div className="btn-group ml-2 mr-2"
                        role="group"
                        aria-label="First group" >
                        <button className="btn btn-primary" onClick={this.firstPage}>{`<<`}</button> 
                        <button className="btn btn-primary" onClick={this.prevPage}>{`<`}</button>
                        {showPageNumber}
                        <button className="btn btn-primary" onClick={this.nextPage.bind(this, numberOfPage)}>{`>`}</button> 
                        <button className="btn btn-primary" onClick={this.lastPage.bind(this, numberOfPage)}>{`>>`}</button>
                    </div>
                </div>}

            </div>
        </div >
        )
    }
}