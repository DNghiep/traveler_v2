/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';

//Import component for content page
import NavBar from './Component/NavBar/NavBar';
import Header from './Component/Header/Header';
import Promotion from './Component/Promotion/Promotion';
import Search from './Component/Search/Search';
import Calendar from './Component/Calendar/Calendar';
import Footer from './Component/Footer/Footer';
import BookingInfo from './Component/BookingInfo/BookingInfo';

//Import promotionData
import Data from './DataFiles/PromotionJson/PromotData';
import AccountContainer from './Account';

import { getCookie } from "./Component/Cookies/getCookie";

//Import fetch
const fetch = require('node-fetch');

const HOSTAPISEARCHING = 'http://localhost:3001/api/search/';
const HOSTAPIBOOKING = 'http://localhost:3001/api/booking/';


class App extends Component {

    // ComponentDidMount(){
    //   this.search();
    // }

    constructor(props) {
        super(props);
        this.getSearchInput = this.getSearchInput.bind(this);
        this.setSearchInput = this.setSearchInput.bind(this);
        this.search = this.search.bind(this);
        this.book = this.book.bind(this);
        this.searchGetData = this.searchGetData.bind(this);
        this.searchToDirect = this.searchToDirect.bind(this);
        this.bookingGetData = this.bookingGetData.bind(this);
        this.confirmBooking = this.confirmBooking.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChangeNumberOfTicket = this.handleChangeNumberOfTicket.bind(this);
        this.updateCookie = this.updateCookie.bind(this);
        this.state = {
            isLogin: getCookie("islogin"),
            userId: getCookie("u_id"),
            searchInput: {
                from: undefined,
                to: undefined,
                // startDay: new Date(new Date().setHours(0, 0, 0)),
                startDay: undefined,
                backDay: undefined
            },
            SearchData: undefined,
            didSearch: false,
            bookingData: {
                _id: undefined,
                from_name: undefined,
                to_name: undefined,
                depart_time: new Date(),
                arrival_time: new Date(),
                base_fee: undefined,
                seat_remain: undefined
            },
            checkingBook: false,
            bookQuality: 0
        }
    }

    async updateCookie() {
        await this.setState({
            isLogin: getCookie("islogin"),
            userId: getCookie("u_id")
        })
    }

    //TODO: this scope use as back-end to catch and post to local api at post 3001
    //TODO: get ID of the station (maybe won't use after update Schema)


    async searchGetData(fromStationName, toStationName, depart_time) {
        const fetchAddr = `${HOSTAPISEARCHING}`;
        const body = {};
        let result = [];

        if (fromStationName) body.from_name = fromStationName;
        if (toStationName) body.to_name = toStationName;
        if (depart_time) body.depart_time = depart_time;
        console.log(body);
        await fetch(fetchAddr, {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => {
                result = json;
            })

        return result; //*! Return a list of trip (single Object if only 1 found!)
    }


    async searchToDirect(fromStationName, toStationName, depart_time, re_depart_time) {
        console.log("Run search");
        const go = await this.searchGetData(fromStationName, toStationName, depart_time);

        let back = [];
        if (re_depart_time) back = await this.searchGetData(toStationName, fromStationName, re_depart_time);

        //TODO: This scope get the list of station include id and name to map to current result (maybe won't use after update Schema!)
        // const result = await go.concat(back);
        let result = [];
        if (back.length > 0) {
            let minLength = Math.min(back.length, go.length);
            let i = 0;
            for (i; i < minLength; i++) {
                result.push(go[i]);
                result.push(back[i]);
            }
            if (back.length > go.length) {
                for (i; i < back.length; i++) {
                    result.push(back[i]);
                }
            } else {
                for (i; i < go.length; i++) {
                    result.push(go[i]);
                }
            }
        } else result = go;

        return result;
    }

    //TODO: get a hash map of station with the index is station._id (exp: stationMap[station._id] = station.name!)


    //TODO: book a ticket, create new ticket and update chosen trips (will be updated more)!
    bookingGetData(userId, tripId, quality) {
        const fetchAddr = `${HOSTAPIBOOKING}${userId}-${tripId}-${quality}`;
        if (quality == 0) {
            alert("Quality should not be 0!");
            return false;
        } else {
            fetch(fetchAddr)
                .then(res => {
                    // eslint-disable-next-line
                    if (res.status == 503) {
                        console.log({ status: 503 });
                        return false
                    }
                    // eslint-disable-next-line
                    if (res.status == 400) {
                        console.log({ status: 400 });
                        return false
                    } else return res.json();
                })
                .then(json => console.log(json));
            return true;
        }
    }
    //TODO: update function to update seat_remain of trip

    //TODO: main book function (pass as props for child components!)
    async book(data, e) {
        this.updateCookie();
        await this.setState({
            bookingData: data
        })

        await this.setState({
            checkingBook: true
        })

        //!need to update latter
    }

    confirmBooking(data, e) {
        if (this.state.isLogin == 0 || !this.state.isLogin) {
            alert("You need to sign in.");
            return false;
        }
        let isOk = this.bookingGetData(this.state.userId, this.state.bookingData._id, this.state.bookQuality);
        if (isOk === false) {
            alert("Something wrong when booking ticket! please contact us to know your problem.")
            return false;
        }
        else {
            this.state.SearchData.forEach(element => {
                if(element._id == this.state.bookingData._id){
                    element.seat_remain -= this.state.bookQuality;
                }
            })
            alert('Your Ticket Was Booked!');
            this.handleCloseModal();
        }
    }

    //TODO: handle searchInput and pass to child components
    getSearchInput() {
        return this.state.searchInput;
    }

    setSearchInput(searchInput) {
        this.setState((state) => ({
            searchInput: searchInput
        }))
    }
    //TODO://

    //TODO: update latter (maybe deleted!)

    //TODO: main search function (pass to child components)
    async search() {
        console.log(`Search For: ${this.state.searchInput.from}`);
        console.log(this.state.searchInput.to);
        console.log(this.state.searchInput.startDay);
        console.log(this.state.searchInput.backDay);

        const searchOutput = await this.searchToDirect(this.state.searchInput.from,
            this.state.searchInput.to,
            this.state.searchInput.startDay,
            this.state.searchInput.backDay);

        await this.setState({
            SearchData: searchOutput,
            didSearch: true
        })
        // await console.log(this.state.SearchData);
        window.location.href = "#Calendar";
    }

    handleCloseModal() {
        this.setState({
            checkingBook: false
        })
    }


    handleChangeNumberOfTicket(e) {
        if (e.target.value < 1) e.target.value = 1;
        if (e.target.value > this.state.bookingData.seat_remain) e.target.value = this.state.bookingData.seat_remain;
        this.setState({ bookQuality: e.target.value })
    }


    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={ props =>
                    <div className="container-fluid px-0" id="Content">
                    <NavBar isLogin={this.state.isLogin}/>
                    <Header getSearchInput={this.getSearchInput}
                        setSearchInput={this.setSearchInput}
                        search={this.search}
                    />
                    <Promotion promotionData={Data.promotData}
                        setSearchInput={this.setSearchInput}
                        getSearchInput={this.getSearchInput}
                        search={this.search}
                    />
                    <Search setSearchInput={this.setSearchInput}
                        getSearchInput={this.getSearchInput}
                        search={this.search}
                    />
                    <Calendar setSearchInput={this.setSearchInput}
                        getSearchInput={this.getSearchInput}
                        search={this.search}
                        book={this.book}
                        data={this.state.SearchData}
                        didSearch={this.state.didSearch}
                    />
                    <Modal show={this.state.checkingBook} onHide={this.handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Your Ticket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <BookingInfo data={this.state.bookingData} />
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Number of ticket(s)</span>
                                </div>
                                <input type="number"
                                    class="form-control"
                                    placeholder="1"
                                    aria-label="number of ticket"
                                    aria-describedby="basic-addon1"
                                    onChange={this.handleChangeNumberOfTicket} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleCloseModal}>
                                Cancel
                        </Button>
                            <Button variant="primary" onClick={this.confirmBooking}>
                                Confirm
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Footer />
                </div>
                }/>
                <Route path="/login" component={() => <AccountContainer updateCookie={this.updateCookie}/>}/>
            </BrowserRouter>
        )
    }
}

export default App;
