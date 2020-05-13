import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

const user = () =>(
  axios.get('/user')
  .then(res => res.data)
)

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      user:'',
      password:'',
      open:null,
      id:''
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.data = []){
     user().then((res) =>{
      this.setState({
        data:res
      });
     });
    }
  }

  get = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  checkLog = (val) =>{
    if(this.state.data !== []){
      var check = false;
      var x = 0;
      var arr = this.state.data;
      for(var i = 0; i < arr.length;i++){
        if(arr[i].password === val.password && arr[i].user === val.user){
          if(arr[i].on === false){
            check = true;
            x = 0;
          }
          else{
            check = true;
            x = 1;
            this.setState({
              id:arr[i]._id
            });
          }
          break;
        }
        else{
          check = false;
          x = 0;
        }
      }
      if(check === true){

        if(x === 0){
       this.setState({
        open:0
       });}
       else{
        this.setState({
          open:1
         });
       }
      }
      else{

        alert('false');
      }
    }
  }  

  keycode = (e) =>{
    if(e.key === 'Enter'){
      this.checkLog(this.state);
    }
  }
   
    render() {

      if(this.state.open === 0){
        return <Redirect to="/profile"></Redirect>
      }
      else if(this.state.open === 1){

        return <Redirect to={`/home.${this.state.id}`}></Redirect>
      }
        return (
            <div>
                {/* login */}
      <div className="log-in pt-5" style={{background: 'black', height: '625px'}}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <h2>log in</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="user">User</label>
                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="user" className="form-control" type="text" name="user" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="password" className="form-control" type="password" name="password" />
                </div>
                <button onKeyPress = {(e) => this/this.keycode(e)} onClick = {(val) => this.checkLog(this.state)} type="button" className="btn btn-block btn-danger mt-4">Log in</button>
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


export default Login;
