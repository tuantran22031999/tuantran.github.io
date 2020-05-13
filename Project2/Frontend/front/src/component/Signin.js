import React, { Component } from 'react';
import * as action from '../action/Index';
import { connect } from 'react-redux';
import Profile from './Profile';
class Signin extends Component {


  constructor(props) {
    super(props);
    this.state = {
      user:'',
      password:'',
      confirm:'',
      on:false
    };
  }

  getSign = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  setSign = (val) =>{

    if(val.user === null || val.password === null){
      alert('Not empty');
      return false;
    }
    else if(val.password !== val.confirm){
      alert('confirm false');
      return false;
    }
    else{
      if(val.user.length >= 8 && val.password.length >= 8){
        this.props.user(val);
      }
      else{
        alert('character >= 8');
        return false;
      }
    }
  }

  keycode = (e) =>{
    if(e.key === 'Enter'){
      this.setSign(this.state);
    }
  }
   
    render() {
      console.log(this.props.on);
        return (
            <div>      
      {/* signin */}
      <div className="sign-in pt-5" style={{background: 'black', height: '625px'}}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h2>sign in</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="user">User</label>
                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.getSign(e)} id="user" className="form-control" type="text" name="user" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.getSign(e)} id="password" className="form-control" type="password" name="password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm">Confirm</label>
                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.getSign(e)} id="confirm" className="form-control" type="password" name="confirm" />
                </div>
                <button onKeyPress = {(e) => this/this.keycode(e)} onClick = { (val) => this.setSign(this.state) } type="button" className="btn btn-block btn-danger mt-4">Sign in</button>
              </form>
              <div className="text-center mt-3"><a href="/">Back home</a></div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    user: (val) => {
      dispatch(action.user(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
