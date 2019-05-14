/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

//Import component for content page
import NavBar from './Component/NavBar/NavBar';
import Header from './Component/Header/Header';
import Promotion from './Component/Promotion/Promotion';
import Search from './Component/Search/Search';
import Calendar from './Component/Calendar/Calendar';
import Footer from './Component/Footer/Footer';

//Import promotData
import Data from './DataFiles/PromotionJson/PromotData';

//Import fetch
import BookingFetch from './backEnd/fetchBooking';
const fetch = require('node-fetch');

const HOSTAPISEARCHING = 'http://localhost:3001/api/search/';
const HOSTAPIBOOKING = 'http://localhost:3001/api/booking/';


class App extends Component {

  // ComponentDidMount(){
  //   this.search();
  // }

  constructor(props) {
    super(props);
    this.state = {
      userId: "5cda63ab39995314a3fbdd6d",
      searchInput: {
        from: undefined,
        to: undefined,
        startDay: new Date().setHours(0, 0, 0, 0),
        backDay: undefined
      },
      SearchData: undefined
    }
    this.getSearchInput = this.getSearchInput.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.book = this.book.bind(this);
    this.getStationId = this.getStationId.bind(this);
    this.searchGetData = this.searchGetData.bind(this);
    this.searchToDirect = this.searchToDirect.bind(this);
    this.findStation = this.findStation.bind(this);
    this.bookingGetData = this.bookingGetData.bind(this);
    this.findStationName = this.findStationName.bind(this);
  }
  ///////////////////////////////////////////
    async getStationId(stationName){
      const fetchAddr = `${HOSTAPISEARCHING}getstation`;
      let _id = '';
      await fetch(fetchAddr, {
          method: 'post',
          body:    JSON.stringify({stationName: stationName}),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => _id = json._id);
      return _id;
  }

  async searchGetData(fromStationName, toStationName, depart_time){
      const fetchAddr = `${HOSTAPISEARCHING}`;
      console.log(`station name: ${fromStationName}`);
      console.log(`station name: ${toStationName}`);
      const body = new Object();
      let result = [];
      if(fromStationName) body.from_id = await this.getStationId(fromStationName);
      if(toStationName) body.to_id = await this.getStationId(toStationName);
      if(depart_time) body.depart_time = depart_time;
      console.log(body);
      await fetch(fetchAddr, {
          method: 'post',
          body:    JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => {
          // console.log(json);
          result = json;
      })
      // console.log(result);
      return result;
  }

  async searchToDirect(fromStationName, toStationName, depart_time, re_depart_time){
      console.log("Run search");
      const go = await this.searchGetData(fromStationName, toStationName, depart_time);
      const back = [];
      if(re_depart_time) back = await this.searchGetData(toStationName, fromStationName, re_depart_time);
      const result = await go.concat(back);
      console.log(result);
      return result;
  }

  async findStation(stationId){
      let name = "";
      const fetchAddr = `${HOSTAPISEARCHING}${stationId}`;
      await fetch(fetchAddr)
      .then(res => res.json())
      .then(json => name = json.name);
      console.log(name);
      return name;
  }
  /////////////////////////////////////////////////////////////
  async bookingGetData(userId, tripId){
    const fetchAddr = `${HOSTAPIBOOKING}${userId}-${tripId}`;
    await fetch(fetchAddr)
    .then(res => {
        if(res.status == 503){
            console.log({status: 503});
            return {status: 503}
        }
        if(res.status == 400){
            console.log({status: 400});
            return {status: 400}
        }
        else return res.json();
    })
    .then(json => console.log(json));
}
  ///////////////////////////////////////////////////////////////



  book(data, e) {
    this.bookingGetData(this.state.userId, data._id);
    alert('booked!');
  }

  getSearchInput() {
    return this.state.searchInput;
  }

  setSearchInput(searchInput) {
    this.setState((state) => ({
      searchInput: searchInput
    }))
  }

  async findStationName(element){
    element.fromStationName = await this.findStation(element.from_id);
    element.toStationName = await this.findStation(element.to_id);
  }

  async search() {
    console.log(`Search For: ${this.state.searchInput.from}`);
    console.log(this.state.searchInput.to);
    console.log(this.state.searchInput.startDay);
    console.log(this.state.searchInput.backDay);
    const searchOutput = await this.searchToDirect(this.state.searchInput.from, 
      this.state.searchInput.to,
      this.state.searchInput.startDay,
      this.state.searchInput.backDay);
    // await searchOutput.forEach(element => {
    //   this.findStationName(element);
    // })
    for( let i = 0; i < searchOutput.length; i ++){
      await this.findStationName(searchOutput[i]);
    }
    await this.setState({
      SearchData: searchOutput
    })
    await console.log(this.state.SearchData);
    window.location.href = "#Calendar";
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid px-0">
          <NavBar />
          <Header
            getSearchInput={this.getSearchInput}
            setSearchInput={this.setSearchInput}
            search={this.search} />
          <Promotion
            promotData={Data.promotData}
            setSearchInput={this.setSearchInput}
            getSearchInput={this.getSearchInput}
            search={this.search} />
          <Search
            setSearchInput={this.setSearchInput}
            getSearchInput={this.getSearchInput}
            search={this.search} />
          <Calendar
            setSearchInput={this.setSearchInput}
            getSearchInput={this.getSearchInput}
            search={this.search}
            book={this.book}
            data={this.state.SearchData}
            findStation={this.findStation} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
