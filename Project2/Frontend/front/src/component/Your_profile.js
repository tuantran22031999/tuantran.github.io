import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Footer from './Footer';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../action/Index'; 
const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)

const set_male = (id) =>(
  axios.post('/set_male',{id})
  .then(res => res.data)
)

const story = () =>(
  axios.get('/story')
  .then(res => res.data)
)

const delStory = (id) =>{
  axios.post('/delStory',{id})
  .then(res => res.data)
}
class Your_profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      story:[]
    };
  }
   
  componentWillMount() {
    if(this.state.data = []){
     profile().then((res) =>{
      this.setState({
        data:res
      });
     });
    }
    if(this.state.story = []){
      story().then((res) =>{
       this.setState({
         story:res
       });
      });
     }
  }

  check = (val) =>{
    this.props.check(val);
  }

  check1 = (val) =>{
    this.props.check1(val);
  }

  set_Info = () =>{
    if(this.state.data !== []){
      return this.state.data.map((value,key) => {
        if(value.maid === this.props.match.params.id){
          if(value.picture === ""){
            set_male(value._id).then((res) => res);
           }
          return(
            <div className="row info" key={key}>
            <div className="col-xs-12 mt-5 text-center mx-auto">
              <img src={value.picture} alt="anh" height="350px" width="350px" className="rounded-circle" />
          <h3 className="mt-4">{value.name}</h3>
          <h4>Sex : {value.sex}</h4>
          <h4>Birthday : {value.birthday}</h4>
          <h4>Age : {value.age}</h4>
          <h4>Home town : {value.hometown}</h4>
          <h4>favorite : {value.favorite}</h4>
          <h4>maxim : {value.maxim}</h4>
          <h4 style={{display: 'inline',position:'relative',top:'5px'}}>contact with me : </h4>
          <span className="mx-2"><a href={value.facebook}><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="anh" height="30" width="30"></img></a></span>
          <span className="mx-2"><a href={value.instagram}><img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" alt="anh" height="30" width="30"></img></a></span>
          <span className="mx-2"><a href={value.twitter}><img src="https://image.flaticon.com/icons/svg/733/733579.svg" alt="anh" height="30" width="30"></img></a></span>
              <form className="mt-3">
                <Link to="/update" onClick = {(val) => this.check(value)} type="button" className="btn btn-warning text-white">Update</Link>
              </form>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 mx-auto my-3 text-white"><a href={`/story.${this.props.match.params.id}`} class="btn btn-primary">Add Story</a></div>
                </div>
            </div>
          </div>
          )
        }
      })
    }
  }

  del = (val) =>{
    alert('Delete success');
    delStory(val).then((res) => res);
  }

  setStory = () =>{
    if(this.state.story !== []){
      return this.state.story.map((value,key) =>{
        if(value.maid === this.props.match.params.id){
          return(
            <div className="container mt-5" key={key}>
            <div className="row story">
              <div className="col-xs-12 mx-auto">
          <h5>{value.title}</h5>
          <p>{`${value.day}/${value.month}/${value.year}`}</p>
                <img src={value.img} alt="anh" height="487" width="730" />
          <p className="mt-3">{value.text}</p>
              </div>
              <form>
              <button onClick = {(val) => this.del(value._id)} type="submit" class="btn btn-danger mr-3 mb-5">Delete</button>
              <Link to="/update_story" onClick = {(val) => this.check1(value)} class="btn btn-warning mb-5 text-white">Update</Link>
              </form>
              <hr></hr>
            </div>
          </div>
          )
        }
      })
    }
  }
    render() {
        return (
            <div>
        <div className="your-profile" style={{background: 'black'}}>
        <div className="container">
          {/* <div className="row profile">
            <div className="col-md-6 text-center pr gray" style={{borderRight: '1px solid #8080804d'}}><a href="#" className="text-white"><h4 className="pt-1">Your profile</h4></a></div>
            <div className="col-md-6 text-center pr"><a href="#" className="text-white"><h4 className="pt-1">album</h4></a></div>
          </div> */}
          {this.set_Info()}
          {this.setStory()}
        </div>
      </div>
      <Footer></Footer>
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
    check: (val) => {
      dispatch(action.check(val))
    },
    check1: (val) => {
      dispatch(action.check1(val))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Your_profile);
