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

class Your_profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
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
  }

  check = (val) =>{
    this.props.check(val);
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    check: (val) => {
      dispatch(action.check(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Your_profile);
