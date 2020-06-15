import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import Music from './Music';
import Music1 from './Music1';
import Change from './Change';
import Insert from './Insert';
import Video from './Video';
import Video1 from './Video1';
import Search from './Search';
import Movie from './Movie';
import Movie1 from './Movie1';
import Sport from './Sport';
import Sport1 from './Sport1';
import News from './News';
import News1 from './News1';

export default class Rou extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Change}></Route>
                <Route path="/" exact component={Music}></Route>
                <Route path="/" exact component={Movie}></Route>
                <Route path="/" exact component={Sport}></Route>
                <Route path="/" exact component={News}></Route>
                <Route path="/music" exact component={Music1}></Route>
                <Route path="/movie" exact component={Movie1}></Route>
                <Route path="/sport" exact component={Sport1}></Route>
                <Route path="/news" exact component={News1}></Route>
                <Route path="/search.:value" exact component={Search}></Route>
                <Route path="/insert.22072000" exact component={Insert}></Route>
                <Route path="/video/:theme.:id" exact component={Video}></Route>
                <Route path="/video/:theme.:id.next" exact component={Video1}></Route>
                <Route path="/video/:theme.:id.next1" exact component={Video}></Route>
            </div>
        )
    }
}
