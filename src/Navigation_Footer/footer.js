import React, { Component } from 'react';
import './navcss/navSass/footer.css';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div className="footer-cover">
                <div className="footer-contact-box">
                    <h5>Follow us!</h5>
                    <div className="contact-block">
                        <div className="contact-cover">
                            <div className="contact-button-cover"><i className="fab fa-facebook-f"></i></div>
                            <div className="contact-button-cover"><i className="fab fa-instagram"></i></div>
                            <div className="contact-button-cover"><i className="fab fa-google"></i></div>
                            <div className="contact-button-cover"><i className="fab fa-google-play"></i></div>
                        </div>
                    </div>
                </div>
                <div className="nav-footer">
                    <Link to="/" className="footer-nav"><i>Home</i></Link>
                    <Link to="/calendar" className="footer-nav"><i>Calendar</i></Link>
                    <Link to="/cart" className="footer-nav"><i>Cart</i></Link>
                    <Link to="/account" className="footer-nav"><i>Account</i></Link>
                </div>
                <div className="under-footer">
                    <h5>Go anywhere with our fucking sevices!</h5>
                    <p>Fast but not safe, for sure!</p>
                </div>
            </div>
        )
    }
}

export default Footer;