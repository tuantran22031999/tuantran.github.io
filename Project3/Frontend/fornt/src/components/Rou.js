import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Home from './Home';
import Insert from './Insert';
import ABC from './ABC';
import Animal from './Animal';

class Rou extends Component {
    render() {
        return (
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/insert.22031999" component={Insert}></Route> 
              <Route path="/abc"  component={ABC}></Route>
              <Route path="/animal" component={Animal}></Route>  
            </div>
        )
    }
}

export default Rou;
