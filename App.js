import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import component for navigation and footer
import Nav from './Navigation_Footer/navigation';
import Footer from './Navigation_Footer/footer';

//Import component for content page
import Home from './content_component/home';
import Calendar from './content_component/calendar';
import Account from './content_component/account';
import Cart from './content_component/cart';
import SignIn_SignUp from './content_component/SignIn_SignUp'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: undefined
    }
  }
  render() {
    return (
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/account" component={SignIn_SignUp} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
