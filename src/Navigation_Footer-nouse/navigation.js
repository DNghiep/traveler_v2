import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './navcss/navSass/nav.css';

class Nav extends Component{
    render(){
        return(
            <div className="navigation-box">
                <div className="icon-box">
                    <h3>Traveler</h3>
                </div>
                <div className="option-box">
                    <ul>
                        <Link to="/" className="nav-link"><i className="fas fa-home"></i></Link>
                        <Link to="/calendar" className="nav-link"><i className="fas fa-calendar-times"></i></Link>
                        <Link to="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></Link>
                        <Link to="/account" className="nav-link"><i className="fas fa-user"></i></Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;