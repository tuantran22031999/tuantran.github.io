import React, { Component } from 'react';
import {
    BrowserRouter as Router, Redirect,Link
  } from "react-router-dom";
import { connect } from 'react-redux';
import * as action from '../actions/Index';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : null,
            but:false
        };
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        if(this.state.data === null){
            this.setState({
                data:this.props.data
            });
        }
    }

    data_transmission = () =>{
        if(this.props.data !== null){
            return this.props.data.map((value,key) => {
                var num = value.num
                return(
                    <div className="col-md-6 col-xs-12 mx-auto" key={key}>
                    <img src={value.img} alt="anh" width="529" height="220" />
                    <div className="form-group">
                      <label htmlFor="res"><h6>Your answer:</h6></label>
                      <input onChange = {(e,key) => this.get(e,num)} id="res" className="form-control" type="text" name="res" style={{width: '98%'}}/>
                    </div>
                  </div>
                )
            })
        }
    }

    arr = new Array(14)
    min = 15;
    s = 0;
    time = () => {
            this.s--;
            if(this.min === 0 && this.s === -1){
                clearInterval(this.loop);
                this.set();
                alert('Time out');
            }else{
            if(this.s === -1){
                this.min--;
                this.s = 59;
            }
            if(this.s < 10 && this.s >= 0){
                this.s ='0' + this.s;
            }
            if(this.min === 0 && this.s === '05'){
                var time = document.getElementById('Time');
                time.style.color = 'red';
            }
            if(this.min === 1 && this.s === '07'){
               var on = document.getElementById('mp3');
               on.play();
            }      
            document.getElementById('Time').innerHTML = `${this.min} : ${this.s}`;}
    }
    loop = setInterval(this.time,1000);

    stop = () =>{
        clearInterval(this.loop);
    }
    
    get = (e,key) =>{
     this.arr[key-1] = e.target.value;
    }
    set = () =>{
        if(this.state.data !== null){
            var temp = this.state.data;
            temp.map((value,key) => {
                key = {key};
                if(this.arr[value.num-1] !== undefined){
                if(value.value.toLowerCase() === this.arr[value.num-1].toLowerCase()){
                    value.test = true;
                }}
            });
            this.setState({
                but:true
            });
            this.props.game(temp);
            this.stop();
        }
    }
    render() {
        if(this.state.but === true){

            return <Redirect to='/result'></Redirect>
        }
        return (
            <div>
                <div className="game"> 
                <div className="back">
        <Link onClick = {this.stop} to="/" title="Back Home"><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/128/back-icon.png" alt="anh"></img></Link>
      </div>
      <div id="Time"></div>
                <div className="container">
                    <div className="row">
                       <div className="col-md-12 col-xs-12 text-center">
                        <img src="https://assets.sbnation.com/assets/3050051/PvZ2_ZPirateCaptian_01.png" alt="anh"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-xs-12 text-center">
                            <span className="char top gam" style={{color:'red'}}>g</span>
                            <span className="char top gam" style={{color:'yellow'}}>a</span>
                            <span className="char top gam" style={{color:'orange'}}>m</span>
                            <span className="char top gam" style={{color:'blue'}}>e</span>
                          </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row game">
                      {this.data_transmission()}
                      <div className="col-md-6 mt-5 col-xs-12 text-center mx-auto">
                      <button onClick={this.set} type="button" className="btn btn-block btn-primary">End</button>
                      <audio src="../Clock.mp3" id="mp3" controls></audio>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.game1
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        game: (val) => {
            dispatch(action.game1(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
