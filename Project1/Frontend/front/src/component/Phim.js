import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/Index';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const del = (del) =>(

  axios.post('/del',{del})
  .then(res => res.data)
)

class Phim extends Component {

  slug = (str) =>
  {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
  }


  delData = (val) =>{
    this.props.del(val);
    del(val).then((res) =>{
      return null;
    }); 
  }

  getCheck = (val) =>{
    this.props.check(val);
  }
  
  setData = () =>{
    if(this.props.data !== null){
      return this.props.data.map((value,key) =>{
        if(value.theme === "3"){
          return (
            <div className="row pl-3 py-3" key = {key}>
            <div className="col-xs-4">
              <div className="card" style={{border: '1px solid black'}}>
              <a href={`/${value.theme}/${this.slug(value.title)}.${value._id}`} title={value.title}><img className="card-img-top" src={value.img_title} alt="anh" /></a>
              </div>
            </div>
            <div className="col-xs-4" style={{width: '68%'}}>
              <div className="card" style={{border: '1px solid black', width: '60%'}}>
                <div className="card-body pt-0" style={{background: 'black'}}>
          <a href={`/${value.theme}/${this.slug(value.title)}.${value._id}`} style={{color: 'white', textDecoration: 'none'}}><h5 style={{width: '80%'}} className="card-title">{value.title}</h5></a>
          <p className="card-text text-white" style={{width: '84%'}}>{value.short_text}</p>
                </div>
              </div>
              <Link onClick = {(val) => this.getCheck(value)} to='/update' className="btn btn-warning mr-2 ml-3 text-white">Update</Link>
              <span onClick = {(val) => this.delData(value._id)} className="btn btn-danger mr-2">Delete</span>
              <a href="/add" className="btn btn-primary">Add</a>
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
             {/* video */}
      <div className="phim">
      <h2 className="ml-5 mt-5">phim</h2>
      <div className="container-fluid px-5">
        { this.setData() }
      </div>
    </div>
    </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    data: state.mix
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     del: (val) => {
      dispatch(action.del(val));
    },
    check: (val) => {
      dispatch(action.check(val));
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Phim);