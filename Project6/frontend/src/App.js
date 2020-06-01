import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Rou from './components/Rou'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header></Header>
        <Rou></Rou>
        <Footer></Footer>
      </div>
      </Router>
    )
  }
}

export default App;
