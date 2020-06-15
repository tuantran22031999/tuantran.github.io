import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import * as action from './Actions/Index';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Rou from './Components/Rou';

const user = () =>(
  axios.get('/user')
  .then(res => res.data)
)
const up = () =>(
  axios.get('/data_upload')
  .then(res => res.data)
)
const sub = () =>(
  axios.get('/data_sub')
  .then(res => res.data)
)

class App extends Component {
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.props.user === null){
      user().then((res) =>{
        this.props.get_user(res);
      })
    }
    if(localStorage.getItem('data_upload') === null){
      up().then((res) =>{
        this.props.get_upload(res);
      })
    }
    if(this.props.sub === null){
      sub().then((res) =>{
        this.props.set_sub(res);
      })
    }
  }
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    upload: state.upload,
    sub:state.sub
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_user: (val) => {
      dispatch(action.get_user(val))
    },
    get_upload: (val) => {
      dispatch(action.get_upload(val))
    },
    set_sub: (val) => {
      dispatch(action.set_sub(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);