import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as action from '../Actions/Index';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const up = (name,data) => (
    axios.post('/up',{name,data})
    .then(res => res.data)
)

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file:'',
            content:'',
            id:this.props.match.params.id,
            date:'',
            month:'',
            year:'',
            hour:'',
            name:'',
            theme:'',
            base64:''
        };
    }

    get_up = (e) =>{
        var time = new Date;
        var date = time.getDate();
        var month = time.getMonth()+1;
        var year = time.getFullYear();
        var hour = time.getHours();
        var file = e.target.files[0];
        var hour = time.getHours().toString();
        var minute = time.getMinutes().toString();
        var second = time.getSeconds().toString();
        var str = '';
        this.setState({
          name:('img'+hour+(file.lastModified)+minute+second)
          });
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if(file.type === 'image/jpeg'){
            this.setState({
              base64:reader.result.slice(23,reader.result.length)
            });
          }
          else if(file.type === 'image/png' || file.type === 'image/gif'){
            this.setState({
              base64:reader.result.slice(22,reader.result.length)
            });
          }
        }
        this.setState({
            file:e.target.files[0],
            date:date,
            month:month,
            year:year,
            hour:hour
        });
    }

    get_up1 = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    set_up = (event) =>{
        if(this.state.theme !== '' && this.state.file !== '' && this.state.file.size < 200000){
       var check = false;     
       const data = new FormData();
       data.append('file', this.state.file);
       if(this.state.file.type === 'image/jpeg' || this.state.file.type === 'image/png' || this.state.file.type === 'image/gif' || this.state.file.type === 'image/jfif'){    
            alert('Upload success');
            this.props.new_upload(this.state);
            setTimeout(() => {
              this.setState({
                base64:''
              });
              up(this.state.file.name,this.state);   
              axios.post("/upload",data,{ 
              })
             .then(res => {
            console.log(res.statusText)
             })
            },2000);
       }
   else{
       alert('File not true');
       event.preventDefault();
       return false;
   }}
   else{
       alert('Not empty or too large');
       event.preventDefault();
       return false;
   }
}

set_dataupload = () =>{
  if(this.props.upload !== null){
    return this.props.upload.map((value,key) =>{
      if(value.id === this.props.match.params.id){
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

set_user = () =>{
  if(this.props.user !== null){
    return this.props.user.map((value,key) => {
      if(value._id === this.props.match.params.id){
        return(
          <div className="col-xs-12 mx-auto text-center" key={key}>
              <div className="avatar">
        <h1>{ value.nickname.slice(0,1) }</h1>
              </div>
        <h3 style={{textTransform: 'uppercase'}}>{ value.nickname }</h3>
            </div>
        )
      }
    });
  }
}
     
    render() {
        console.log(this.state);
        console.log(this.state.file.size);
        return (
            <div>
                 {/* user */}
      <div className="user">
        <div className="container-fluid">
          <div className="row user">
            { this.set_user() }
          </div>
          <div className="row user">
            <div className="col-xs-12 mx-auto my-3">
              <ul className="list">
                <li className="list_pink"><h6>Your picture</h6></li>
                <li><h6>Save</h6></li>
                <li><h6>Upload</h6></li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="father">
                 {this.set_dataupload()}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 mx-auto">
              <form>
                <div className="form-group" style={{width: '100%'}}>
                  <label htmlFor="upload"><h6 className="my-0">Choose your file:</h6></label>
                  <input onChange = {(e) => this.get_up(e)} id="upload" className="form-control" type="file" name="upload" />
                </div>
                <div className="form-group" style={{width: '100%'}}>
                  <label htmlFor="content"><h6 className="my-0">Content:</h6></label>
                  <textarea onChange = {(e) => this.get_up1(e)} id="content" className="form-control" name="content" defaultValue={""} />
                </div>
                <div className="form-group" style={{width: '100%'}}>
                  <label htmlFor="theme"><h6 className="my-0">Theme:</h6></label>
                  <select onChange = {(e) => this.get_up1(e)} className="form-control" name="theme" id="theme">
                    <option>--Choose--</option>
                    <option value="anime">Anime</option>
                    <option value="marvel">Marvel</option>
                    <option value="k_pop">K-pop</option>
                    <option value="universe">Universe</option>
                    <option value="cartoon">Cartoon</option>
                  </select>
                </div>
                <button onClick = {(event) => this.set_up(event)} type="button" className="btn btn-success btn_pink" style={{width: '100%'}}>Upload</button>
              </form>
              <p className="mt-2">If file too large : <a href="https://shortpixel.com/online-image-compression" target="blank">https://shortpixel.com/online-image-compression</a></p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    new_upload: (val) => {
      dispatch(action.new_upload(val))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
