import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Music from './Music';
import Music1 from './Music1';
import Change from './Change';
import Insert from './Insert';
import Video from './Video';
import Search from './Search';

export default class Rou extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Change}></Route>
                <Route path="/" exact component={Music}></Route>
                <Route path="/music" exact component={Music1}></Route>
                <Route path="/search.:value" exact component={Search}></Route>
                <Route path="/insert.22072000" exact component={Insert}></Route>
                <Route path="/video/:theme.:id" exact component={Video}></Route>
            </div>
        )
    }
}
