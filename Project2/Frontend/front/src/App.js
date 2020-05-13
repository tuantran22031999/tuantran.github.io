import './App.css';
import React, { Component } from 'react';
import Rou from './component/Rou';
import {
  BrowserRouter as Router
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Rou></Rou>
      </div>
      </Router>
    )
  }
}

export default App;

