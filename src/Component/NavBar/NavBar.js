import React, { Component } from 'react';

import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top" style = {{ backgroundColor: '#e3f2fd' }}>
                    <a className="navbar-brand" href="#Header">Traveller</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="far fa-square" /></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-0 ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#Header">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Promotion">Promotion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Search">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Calendar">Calendar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Header">Sign In</a>
                            </li>
                        </ul>
                    </div>
            </nav >
        )
    }
}