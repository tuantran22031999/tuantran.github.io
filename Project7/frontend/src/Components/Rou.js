import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Home from './Home';
import Page_user from './Page_user';
import User from './User';
import Home_picture from './Home_picture';
import Zoom_picture from './Zoom_picture';
import Friend from './Friend';
class Rou extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home}></Route>
                <Route path="/user.:id" exact component={Page_user}></Route>
                <Route path="/user.:id" exact component={Home_picture}></Route>
                <Route path="/home_user.:id" exact component={Page_user}></Route>
                <Route path="/home_user.:id" exact component={User}></Route>
                <Route path="/zoom/:name.:id" exact component={Page_user}></Route>
                <Route path="/zoom/:name.:id" exact component={Zoom_picture}></Route>
                <Route path="/fri.:id/:zip" exact component={Page_user}></Route>
                <Route path="/fri.:id/:zip" exact component={Friend}></Route>
            </div>
        )
    }
}

export default Rou;