import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";

const set = (data) =>(
  axios.post('/insert_user',{data})
  .then(res => res.data)
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:'',
      password:'',
      nickname:'',
      confirm:'',
      user1:'',
      password1:'',
      id:'',
      pipe:false
    };
  }

  componentWillMount() {
    if(localStorage.getItem('user4') !== null){
      localStorage.removeItem('user4');
    }
  }

  get_sign = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  set_user = (event,val) => {
    if(this.props.user !== null){
      if(val.password === '' ||val.user === '' ||val.confirm === ''||val.nickname === ''||val.password === '' ||val.user.length < 8 ||val.password.length < 8||val.nickname.length < 8){
        alert('Not empty or char >= 8');
        event.preventDefault();
        return false;
      }
      else{
      if(val.password !== val.confirm){
        alert('confirm not true');
        event.preventDefault();
        return false;
      }
      else{
      var check = false;
        for(var i = 0;i < this.props.user.length; i++){
        if(this.props.user[i].user === val.user || this.props.user[i].password === val.password || this.props.user[i].nickname === val.nickname){
          check = false;
          break;
        }
        else{
          check = true;
        }
      };
      if(check){
        alert('Sign in success');
         set(val);
      }
      else{
        alert('user or password or nickname existed');
        event.preventDefault();
        return false;
      }
    }
    }
  }
}

get_log = (e) =>{
  this.setState({
    [e.target.name]:e.target.value
  });
}
  check_log = (event,val) =>{
    if(this.props.user !== null){
      if(val.user1 === '' || val.password1 === ''){
        alert('not empty');
        event.preventDefault();
        return false;
      }
      else{
        var check = false;
        for(var i = 0;i < this.props.user.length; i++){
          if(this.props.user[i].user === val.user1 && this.props.user[i].password === val.password1){
            this.setState({
              id:this.props.user[i]._id,
              pipe:true
            });
            check = true;
            break;
          }
          else{
            check = false;
          }
        }
        if(check === false){
          alert('Not true');
          event.preventDefault();
          return false;
        }
      }
    }
  }
   
    render() {
      if(this.state.pipe === true){
        return <Redirect to={`user.${this.state.id}`}></Redirect>
      }
        return (
            <div>
                 {/* home */}
      <div className="home mt-5">
        <div className="container pt-5">
          <div className="row home">
            <div className="col-md-6 col-xs-12">
              <div className="slide mx-auto">
                <div className="view">
                  <ul className="sl">
                    <li className="active"><img src="images/anhnen1.jpg" alt="anh" width="100%" height="316px" /></li>
                    <li><img src="images/anhnen2.jpg" alt="anh" width="100%" height="316px" /></li>
                    <li><img src="images/anhnen3.jpg" alt="anh" width="100%" height="316px" /></li>
                  </ul>
                </div>
                <div className="btn_home" />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <h1>im<img src="images/logo.png" alt="anh" width={100} height={100} />ges</h1>
              <div className="sign_in">
                <form>
                  <div className="form-group">
                    <label htmlFor="user"><h6 className="my-0">User:</h6></label>
                    <input onChange = {(e) => this.get_sign(e)} id="user" className="form-control" type="text" name="user" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nickname"><h6 className="my-0">Nickname:</h6></label>
                    <input onChange = {(e) => this.get_sign(e)} id="nickname" className="form-control" type="text" name="nickname" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password"><h6 className="my-0">Password:</h6></label>
                    <input onChange = {(e) => this.get_sign(e)} id="password" className="form-control" type="password" name="password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm"><h6 className="my-0">Confirm:</h6></label>
                    <input onChange = {(e) => this.get_sign(e)} id="confirm" className="form-control" type="password" name="confirm" />
                  </div>
                  <button onClick={(event,val) => this.set_user(event,this.state)} type="submit" className="btn btn-success btn_pink" style={{width: '65%'}}>Sign in</button>
                </form>
                <p>You had an account? <a id="lgn" href="#">Log in</a></p>
              </div>
              <div className="log_in">
                <form>
                  <div className="form-group">
                    <label htmlFor="user1"><h6 className="my-0">User:</h6></label>
                    <input onChange = {(e) => this.get_log(e)} id="user1" className="form-control" type="text" name="user1" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password1"><h6 className="my-0">Password:</h6></label>
                    <input onChange = {(e) => this.get_log(e)} id="password1" className="form-control" type="password" name="password1" />
                  </div>
                  <button onClick={(event,val) => this.check_log(event,this.state)} type="submit" className="btn btn-success btn_pink" style={{width: '65%'}}>Log in</button>
                </form>
                <p>You don't have account? <a id="sgn" href="#">Sign in</a></p>
              </div>
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
    user: state.user
  }
}

export default connect(mapStateToProps)(Home);