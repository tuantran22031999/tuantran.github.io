import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
import axios from 'axios';

const up = (maid,name,sex,birthday,age,hometown,favorite,maxim,picture,facebook,instagram,
  twitter,key) =>(
    axios.post('/up',{maid,name,sex,birthday,age,hometown,favorite,maxim,picture,facebook,instagram,
      twitter,key})
    .then(res => res.data)
  )

  const profile = () =>(
    axios.get('/profile')
    .then(res => res.data)
  )

class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maid:this.props.data.maid,
            name:this.props.data.name,
            sex:this.props.data.sex,
            birthday:this.props.data.birthday,
            age:this.props.data.age,
            hometown:this.props.data.hometown,
            favorite:this.props.data.favorite,
            maxim:this.props.data.maxim,
            picture:this.props.data.picture,
            facebook:this.props.data.facebook,
            instagram:this.props.data.instagram,
            twitter:this.props.data.twitter,
            key:this.props.data.key,
            arr:[],
            butt:false,
            on:false
        };
    }

    componentWillMount() {
      if(this.state.arr = []){
        profile().then((res) =>{
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
      var test = false;
      if(this.state.arr !== []){
        var data = this.state.arr;
        for(var i = 0;i < data.length;i++){
          if(data[i].key === val.key && data[i].maid !== val.maid){
            test = false;
            break;
          }
          else{
            test = true;
          }
        }
      }
      if(test === true){
        this.setState({
          butt:true
      });
      up(val.maid,val.name,val.sex,val.birthday,val.age,val.hometown,val.favorite,val.maxim,val.picture,val.facebook,val.instagram,val.twitter,val.key).then((res) => res);}
      else{
        alert('key exist');
        return false;
      }
  }

  keycode = (e) =>{
    if(e.key === 'Enter'){
      this.set(this.state);
    }
  }

    upload = () =>{
        if(this.state.butt === true){
          alert('Update success');
            return <Redirect to={`/your_profile.${this.state.maid}`}></Redirect>
        }
        if(this.props.data !== {}){
            return(
                <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="form-group">
                    <label onKeyPress = {(e) => this/this.keycode(e)} htmlFor="name">Your name</label>
                    <input defaultValue = {this.props.data.name}  onChange = {(e) => this.get(e)} id="name" className="form-control" type="text" name="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sex">Your Sex</label>
                    <select onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.sex}  className="form-control" onChange = {(e) => this.get(e)} name="sex" id="sex">
                      <option>--choose--</option>
                      <option value="0">Male</option>
                      <option value="1">Female</option>
                      <option value="2">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthday">Your birthday</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.birthday}  onChange = {(e) => this.get(e)} id="birthday" className="form-control" type="date" name="birthday" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Your age</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.age}  onChange = {(e) => this.get(e)} id="age" className="form-control" type="text" name="age" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="hometown">Your hometown</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.hometown}  onChange = {(e) => this.get(e)} id="hometown" className="form-control" type="text" name="hometown" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="favorite">Your favorite</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.favorite}  onChange = {(e) => this.get(e)} id="favorite" className="form-control" type="text" name="favorite" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="maxim">Your favorite maxim</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.maxim}  onChange = {(e) => this.get(e)} id="maxim" className="form-control" type="text" name="maxim" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="picture">Your picture profile</label>
                    <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.picture}  onChange = {(e) => this.get(e)} id="picture" className="form-control" type="text" name="picture" style={{display: 'block'}} />
                  </div>
                  <div className="form-group">
                <label htmlFor="key">Key (use create new password when you forgot password)</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.key} onChange = {(e) => this.get(e)} id="key" className="form-control" type="password" name="key" style={{display: 'block'}} />
              </div>
                  <div className="form-group">
                <label htmlFor="facebook">Your facebook</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.facebook}  onChange = {(e) => this.get(e)} id="facebook" className="form-control" type="text" name="facebook" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Your instagram</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.instagram}  onChange = {(e) => this.get(e)} id="instagram" className="form-control" type="text" name="instagram" style={{display: 'block'}} />
              </div>
              <div className="form-group">
                <label htmlFor="twitter">Your twitter</label>
                <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue = {this.props.data.twitter}  onChange = {(e) => this.get(e)} id="twitter" className="form-control" type="text" name="twitter" style={{display: 'block'}} />
              </div>
                  <button onKeyPress = {(e) => this/this.keycode(e)} onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger mt-4">Update Profile</button>
                  <div className="text-center mt-3"><a href="/">Back home</a></div>
                </div>
              </div>
            )
        }
    }
     
  render() {
    console.log(this.state);
    return (
      <div>
          {/* profile */}
      <div className="profile" style={{background: 'black'}}>
        <div className="container py-5">
          <h1 className="text-white text-center" style={{textTransform: 'uppercase'}}>update your profile</h1>
         {this.upload()}
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.check
    }
}

export default connect(mapStateToProps)(Update);
