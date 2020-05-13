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

const add = (maid,name,birthday,age,hometown,favorite,maxim,picture) =>(
  axios.post('/add',{maid,name,birthday,age,hometown,favorite,maxim,picture})
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
        birthday:"",
        age:"",
        hometown:"",
        favorite:"",
        maxim:"",
        picture:"",
        arr:[],
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
  }

  get = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  set = (val) =>{
    if(this.state.arr !== []){
    var data = this.state.arr;
    var check = false;
    for(var i = 0;i < data.length;i++){
      if(data[i].user == val.user){
        val.maid = data[i]._id;
        fix(val.maid).then((res) => res);
        add(val.maid,val.name,val.birthday,val.age,val.hometown,val.favorite,val.maxim,val.picture).then((res) => res);
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
      alert('user false');
    }
  }
  }
   
    render() {
      console.log(this.state);
      if(this.state.butt === true){
        return <Redirect to={`/home.${this.state.maid}`}></Redirect>
      }
        return (
            <div>
                 {/* profile */}
      <div className="profile" style={{background: 'black'}}>
        <div className="container py-5">
          <h1>create your profile</h1>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="form-group">
                <label htmlFor="user">Your user</label>
                <input onChange = {(e) => this.get(e)} id="user" className="form-control" type="text" name="user" />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input onChange = {(e) => this.get(e)} id="name" className="form-control" type="text" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="birthday">Your birthday</label>
                <input onChange = {(e) => this.get(e)} id="birthday" className="form-control" type="date" name="birthday" />
              </div>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input onChange = {(e) => this.get(e)} id="age" className="form-control" type="text" name="age" />
              </div>
              <div className="form-group">
                <label htmlFor="hometown">Your hometown</label>
                <input onChange = {(e) => this.get(e)} id="hometown" className="form-control" type="text" name="hometown" />
              </div>
              <div className="form-group">
                <label htmlFor="favorite">Your favorite</label>
                <input onChange = {(e) => this.get(e)} id="favorite" className="form-control" type="text" name="favorite" />
              </div>
              <div className="form-group">
                <label htmlFor="maxim">Your favorite maxim</label>
                <input onChange = {(e) => this.get(e)} id="maxim" className="form-control" type="text" name="maxim" />
              </div>
              <div className="form-group">
                <label htmlFor="picture">Your picture profile</label>
                <input onChange = {(e) => this.get(e)} id="picture" className="form-control" type="text" name="picture" style={{display: 'block'}} />
              </div>
              <button onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger mt-4">Add Profile</button>
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
