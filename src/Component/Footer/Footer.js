import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <br />
                <div className="container-fluid p-3">
                    <div className="row px-5">
                        <div className="col-md-6 col-12 px-3">
                            <h3>Traveller</h3>
                            <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa necessitatibus distinctio obcaecati commodi, natus assumenda! Rem quaerat vitae aspernatur expedita at autem voluptatibus ut? Id ab enim molestiae ex.</small>
                            <small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum quis aliquid, explicabo expedita iste a unde similique blanditiis quod, accusantium, quos error at! Cum aliquid amet voluptatibus inventore ullam?</small>
                        </div>
                        <div className="col-md-3 col-6 text-center text-sm-left mt-sm-3">
                            <h3>Nav</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#Header">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Promotion">Search</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Search">Calender</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Calendar">Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6 text-center text-sm-left mt-sm-3">
                            <h3>Contact Us</h3>
                            <div className="btn-group mb-3" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-info"><i className="fab fa-facebook-f"></i></button>
                                <button type="button" className="btn btn-info"><i className="fab fa-facebook-messenger"/></button>
                                <button type="button" className="btn btn-info"><i className="fab fa-instagram"/></button>
                                <button type="button" className="btn btn-info"><i className="fab fa-youtube"/></button>
                            </div>
                            <br />
                            <small className="text-muted ">@2019<br />Power by Traveller team</small>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}