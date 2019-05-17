import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import History from "./Component/View_history_component/History"
import Login from "./Component/Account_manager/SignIn_SignUp"
import Account from "./Component/Account_manager/Account_manager"
import { getCookie } from "./Component/Cookies/getCookie";
import { setCookie } from "./Component/Cookies/setCookie";

if (getCookie("islogin") == 0) {
  ReactDOM.render(<Login />, document.getElementById('root'));
} else {
  ReactDOM.render(<Account />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
