import './App.css';
import React, { Component } from 'react'
import Footer from './components/Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Rou from './components/Rou';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Rou></Rou>
        <Footer></Footer>
        </Router>
      </div>
    )
  }
}

export default App;
