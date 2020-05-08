import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import Rou from './component/Rou';
import { connect } from 'react-redux';
import axios from 'axios';
import * as action from './actions/Index';

const find = () =>(

    axios.get('/find')
    .then(response => response.data)
)

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:null
        };
    }
     
    
    
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {

        if(this.state.data === null){
            find().then((response) =>{
                this.setState({
                    data:response
                });
            })
        }
    }


    render() {

        this.props.find(this.state.data);
        return (
            <Router>
            <div>
                <Navbar></Navbar>
                <Rou></Rou>
                <Footer></Footer>
            </div>
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        find: (val) => {
            dispatch(action.find(val));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);