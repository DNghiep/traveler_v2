import React, { Component } from 'react';

import { getCookie } from "../Cookies/getCookie";

import './NavBar.css';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: this.props.isLogin
        }
    }
    componentDidUpdate(preProps, preStates, snapshots) {
        if (this.state.isLogin != getCookie("islogin")) {
            this.setState({
                isLogin: getCookie("islogin")
            });
        }
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light sticky-top" id="NavBar">
                    <a className="navbar-brand" href="/#Header">Traveller</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"><i className="far fa-square" /></button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-0 ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#Header">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#Promotion">Promotion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#Search">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#Calendar">Calendar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">{this.state.isLogin == 0 ? "Sign In" : "Account"}</a>
                            </li>
                        </ul>
                    </div>
            </nav >
        )
    }
}