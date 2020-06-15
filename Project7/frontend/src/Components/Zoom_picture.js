import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

class Zoom_picture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id:''
    };
  }
  

  id = '';
    set_zoom = () =>{
        if(this.props.upload !== null){
            return this.props.upload.map((value,key) => {
                if(value.name == this.props.match.params.name){
                return(
                    <div className="col-md-6 col-xs-12" key={key}>
                     { this.get_id(value.id) }
                    <img src={`data:image/jpeg;base64,${value.img}`} alt="anh" width="100%" height="550px" />
                    </div>
                )
            }
            })
        }
    }

    set_dataupload = () =>{
      if(this.props.upload !== null){
        return this.props.upload.map((value,key) =>{
            if(value.name != this.props.match.params.name){
          return(
            <div className="img_card" key={key}>
              <Link to={`/zoom/${value.name}.${JSON.parse(localStorage.getItem('user4'))}`}><img src={`data:image/jpeg;base64,${value.img}`} alt="anh" /></Link>
            </div>
          )}
        })
      }
      else{
        return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="anh"></img>
      }
    }

    get_id = (val) => {
      this.id = val;
    }

    set_user = (val) =>{
      var time = new Date;
      var hour = time.getHours().toString();
      var minute = time.getMinutes().toString();
      var second = time.getSeconds().toString();
      if(this.props.user !== null){
        return this.props.user.map((value,key) => {
          if(value._id === val && value._id !== JSON.parse(localStorage.getItem('user4'))){
            return(
              <div key={key}>
              <Link to={`/fri.${value._id}/${hour+value._id.slice(10,20)+second+minute}`}><h4 className="rounded-circle" style={{display: 'inline-block'}}>{ value.nickname.slice(0,1) }</h4></Link>
              <Link to={`/fri.${value._id}/${hour+value._id.slice(10,20)+second+minute}`}><h6 className="ml-1" style={{display: 'inline'}}>{ value.nickname }</h6></Link>
              </div>
            )
          }
          else if(value._id === val && value._id === JSON.parse(localStorage.getItem('user4'))){
            return(
              <div key={key}>
              <Link to={`/home_user.${JSON.parse(localStorage.getItem('user4'))}`}><h4 className="rounded-circle" style={{display: 'inline-block'}}>{ value.nickname.slice(0,1) }</h4></Link>
              <Link to={`/home_user.${JSON.parse(localStorage.getItem('user4'))}`}><h6 className="ml-1" style={{display: 'inline'}}>{ value.nickname }</h6></Link>
              </div>
            )
          }
        })
      }
    }

    render() {
        return (
            <div>
                 {/* zoom_picture */}
      <div className="zoom_picture">
        <div className="container mt-3">
          <div className="row zoom">
           { this.set_zoom() }
           <div className="col-md-6 col-xs-12">
                   { this.set_user(this.id) }
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, similique. In a necessitatibus earum? Est veniam quae neque sunt ipsa quasi ad dolores. Modi cumque cupiditate excepturi nostrum? Veniam, impedit.</p>
                    <button type="button" className="btn btn-danger"><h6 className="my-0">SAVE</h6></button>
           </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="father">
               { this.set_dataupload() }
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
      upload: state.upload,
      user:state.user
    }
  }
  
  export default connect(mapStateToProps)(Zoom_picture);