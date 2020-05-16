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

const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)

const add = (maid,name,sex,birthday,age,hometown,favorite,maxim,picture,facebook,instagram,
twitter,key) =>(
  axios.post('/add',{maid,name,sex,birthday,age,hometown,favorite,maxim,picture,facebook,instagram,
    twitter,key})
  .then(res => res.data)
)

const fix = (id) =>(
  axios.post('/fix',{id})
  .then(res => res.data)
)

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        maid:"",
        user:"",
        name:"",
        sex:"",
        birthday:"",
        age:"",
        hometown:"",
        favorite:"",
        maxim:"",
        picture:"",
        facebook:"",
        instagram:"",
        twitter:"",
        key:"",
        arr:[],
        arr1:[],
        butt:false
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.arr = []){
      user().then((res) =>{
        this.setState({
          arr:res
        });
      });
    }
    if(this.state.arr1 = []){
      profile().then((res) =>{
        this.setState({
          arr1:res
        });
      });
    }
  }

  get = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  set = (val) =>{
    if(this.state.arr !== [] && this.state.arr1 !== []){
    var data = this.state.arr;
    var data1 = this.state.arr1;
    var check = false;
    var test = false;
    for(var i = 0;i < data1.length;i++){
      if(data1[i].key === val.key){
        test = false;
        break;
      }
      else{
        test = true;
      }
    }
    for(var i = 0;i < data.length;i++){
      if(data[i].user === val.user && test === true){
        val.maid = data[i]._id;
        fix(val.maid).then((res) => res);
        add(val.maid,val.name,val.sex,val.birthday,val.age,val.hometown,val.favorite,val.maxim,val.picture,val.facebook,val.instagram,val.twitter,val.key).then((res) => res);
        this.setState({
          maid:data[i]._id,
          butt:true
        });
        alert('add success');
        check = true;
        break;
      }
      else{
        check = false;
        this.setState({
          butt:false
        });
      }
    }
    if(check === false){
      alert('user false or key exist');
    }
  }
  }

  keycode = (e) =>{
    if(e.key === 'Enter'){
      this.set(this.state);
    }
  }
   
    render() {
      if(this.state.butt === true){
        return <Redirect to={`/home.${this.state.maid}`}></Redirect>
      }
        return (
            <div>
                 {/* profile */}
      <div className="profile" style={{background: 'black'}}>
        <div className="container py-5">
          <h1 className="text-white text-center" style={{textTransform: 'uppercase'}}>create your profile</h1>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="form-group">
                <label htmlFor="user">Your user</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="user" className="form-control" type="text" name="user" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="name" className="form-control" type="text" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="sex">Your Sex</label>
                <select onKeyPress = {(e) => this/this.keycode(e)} className="form-control" onChange = {(e) => this.get(e)} name="sex" id="sex">
                  <option>--choose--</option>
                  <option value="0">Male</option>
                  <option value="1">Female</option>
                  <option value="2">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Your birthday</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="birthday" className="form-control" type="date" name="birthday" />
              </div>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="age" className="form-control" type="text" name="age" />
              </div>
              <div className="form-group">
                <label htmlFor="hometown">Your hometown</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="hometown" className="form-control" type="text" name="hometown" />
              </div>
              <div className="form-group">
                <label htmlFor="favorite">Your favorite</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="favorite" className="form-control" type="text" name="favorite" />
              </div>
              <div className="form-group">
                <label htmlFor="maxim">Your favorite maxim</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="maxim" className="form-control" type="text" name="maxim" />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Your picture profile</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="picture" className="form-control" type="text" name="picture" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="key">Key (use create new password when you forgot password)</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="key" className="form-control" type="password" name="key" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="facebook">Your facebook</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="facebook" className="form-control" type="text" name="facebook" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Your instagram</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="instagram" className="form-control" type="text" name="instagram" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Your twitter</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="twitter" className="form-control" type="text" name="twitter" style={{display: 'block'}} />
              </div>
              <button onKeyPress = {(e) => this/this.keycode(e)} onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger mt-4">Add Profile</button>
              <div className="text-center mt-3"><a href="/">Back home</a></div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Profile;
