import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import History from "./Component/View_history_component/History"
import Login from "./Component/Account_manager/SignIn_SignUp"
import Account from "./Component/Account_manager/Account_manager"
import { getCookie } from "./Component/Cookies/getCookie";
import { setCookie } from "./Component/Cookies/setCookie";
import NavBar from './Component/NavBar/NavBar';

class AccountContainer extends Component {
    constructor(props) {
        super(props);
        this.updateCookie = this.updateCookie.bind(this)
        this.state = {
            isLogin: getCookie("islogin")
        };
    }

    updateCookie(){
        this.props.updateMainCookie();
        this.setState({
            isLogin: getCookie("islogin")
        })
    }
    render() {
        return (
            <div className="account-container">
                <NavBar isLogin={this.state.isLogin}/>
                {this.state.isLogin == 0 && <Login updateCookie={this.updateCookie} updateMainCookie={this.props.updateCookie}/>}
                {this.state.isLogin != 0 && <Account />}
            </div>
        );
    }
};

export default AccountContainer;