import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Signin from './Signin';
import Profile from './Profile';
import Your_profile from './Your_profile';
import Home from './Home';
import Home_1 from './Home_1';
import Footer from './Footer';
import Friend from './Friend';
import Update from './Update';
import Story from './Story';
import UpdateStory from './UpdateStory';
class Rou extends Component {
    render() {
        return (
            <div>
            <Route path="/" exact component={Header}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/profile" exact component={Profile}></Route>
            <Route path="/home.:id" exact component={Home_1}></Route>
            <Route path="/home.:id" exact component={Home}></Route>
            <Route path="/home.:id" exact component={Footer}></Route>
            <Route path="/your_profile.:id" exact component={Home_1}></Route>
            <Route path="/your_profile.:id" exact component={Your_profile}></Route>
            <Route path="/friend.:id_friend" exact component={Home_1}></Route>
            <Route path="/friend.:id_friend" exact component={Friend}></Route>
            <Route path="/update" exact component={Update}></Route>
            <Route path="/story.:id" exact component={Story}></Route>
            <Route path="/update_story" exact component={UpdateStory}></Route>
            </div>
        )
    }
}

export default Rou;
