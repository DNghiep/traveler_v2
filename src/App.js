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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: {
        from: undefined,
        to: undefined,
        startDay: new Date(),
        backDay: undefined
      }
    }
    this.getSearchInput = this.getSearchInput.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.book = this.book.bind(this);
  }


  book(data, e) {
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

  search() {
    console.log(`Search For: ${this.state.searchInput.from}`);
    console.log(this.state.searchInput.to);
    console.log(this.state.searchInput.startDay);
    console.log(this.state.searchInput.backDay);
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
            book={this.book} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
