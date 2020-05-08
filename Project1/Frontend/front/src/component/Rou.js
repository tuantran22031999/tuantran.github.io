import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Video from './Video';
import Sao from './Sao';
import Music from './Music';
import Phim from './Phim';
import Beauty from './Beauty';
import Life from './Life';
import Chat from './Chat';
import Diary from './Diary';
import Young from './Young';
import Page from './Page';
import Add from './Add';
import Notfound from './Notfound';
import Search from './Search';
import Update from './Update';


class Rou extends Component {
    render() {
        return (
            <div>
                {/* <switch> */}
                <Route path="/" exact component={Video}></Route>
                <Route path="/" exact component={Sao}></Route>
                <Route path="/" exact component={Music}></Route>
                <Route path="/" exact component={Phim}></Route>
                <Route path="/" exact component={Beauty}></Route>
                <Route path="/" exact component={Life}></Route>
                <Route path="/" exact component={Young}></Route>
                <Route path="/" exact component={Chat}></Route>
                <Route path="/" exact component={Diary}></Route>
                <Route path="/video" exact component={Video}></Route>
                <Route path="/sao" exact component={Sao}></Route>
                <Route path="/music" exact component={Music}></Route>
                <Route path="/phim" exact component={Phim}></Route>
                <Route path="/beauty" exact component={Beauty}></Route>
                <Route path="/life" exact component={Life}></Route>
                <Route path="/young" exact component={Young}></Route>
                <Route path="/chat" exact component={Chat}></Route>
                <Route path="/diary" exact component={Diary}></Route>
                <Route path="/add" exact component={Add}></Route>
                <Route path="/search" exact component={Search}></Route>
                <Route path="/update" exact component={Update}></Route>
                <Route path="/:theme/:title.:id" exact component={Page}></Route>
                <Route path="/notfound" exact component={Notfound}></Route>
                {/* </switch> */}
            </div>
        )
    }
}

export default Rou;
