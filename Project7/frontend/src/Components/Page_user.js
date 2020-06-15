import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../Actions/Index';

import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

class Page_user extends Component {

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(localStorage.getItem('user4') === null){
      localStorage.setItem('user4',JSON.stringify(this.props.match.params.id));
    }
  }

  removeLocal = () =>{
    localStorage.removeItem('data_upload');
  }

  set_filter = (e) => {
    this.props.get_filter(e.target.value);
  }

  show_alert = () => {
    var alert = document.getElementsByClassName('alert');
    alert[0].classList.toggle('show_alr');
  }
   
    render() {
        return (
            <div>
                  {/* page_user */}
      <div className="page_user">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src="https://www.freepngimg.com/thumb/logo/63624-icons-linux-computer-others-distribution-debian-thumb.png" height="30px" width="30px" alt="anh" /></a>
          <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={`/user.${JSON.parse(localStorage.getItem('user4'))}`}><h5 className="my-0">Home</h5></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><h5 className="my-0">subscribe</h5></a>
              </li>
              <li className="nav-item" style={{width: '60%'}}>
              <div className="form-group" style={{width: '100%'}}>
                  <select defaultValue={this.props.filter} onChange = {(e) => this.set_filter(e)} className="form-control" name="theme" id="theme">
                    <option value="all">All</option>
                    <option value="anime">Anime</option>
                    <option value="marvel">Marvel</option>
                    <option value="k_pop">K-pop</option>
                    <option value="universe">Universe</option>
                    <option value="cartoon">Cartoon</option>
                  </select>
                </div>
              </li>
              <li className="nav-item">
                <Link to={`/home_user.${JSON.parse(localStorage.getItem('user4'))}`}><img src="https://cdn1.iconfinder.com/data/icons/user-interface-1-glyph/32/ui_avatar_profil_user_circle-512.png" alt="anh" width="40px" height="40px" /></Link>
              </li>
              <li className="nav-item">
                <a onClick = {this.show_alert} id="alr"><img src="https://1001freedownloads.s3.amazonaws.com/vector/thumb/66735/1388313637.png" alt="anh" width="50px" height="50px" /></a>
                <div className="count_alr" />   
                <ul className="alert">
                  <li><a href="#">Friend posted a new picture</a></li>
                  <li><a href="#">Friend posted a new picture</a></li>
                  <li><a href="#">Friend posted a new picture</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a onClick = {this.removeLocal} className="nav-link" href="/"><img src="https://image.flaticon.com/icons/png/512/1246/1246273.png" alt="anh" width="30px" height="30px" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    filter:state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_filter: (val) => {
      dispatch(action.get_filter(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page_user)