import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import * as action from '../actions/Index';
class Navbar extends Component {

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

  constructor(props) {
    super(props);
    this.state = {
      key:'',
     arr:[],
     on:false
    };
  }

  setKey = (event) =>{
    this.setState({
      key:event.target.value
    });
  }

  getSearch  = (val) =>{
    if(val === ''){
      alert('val null');
      this.setState({
        arr:[]
      });
    }
    else{
      console.log(val);
    this.props.data.forEach((value) =>{
      if(value.title.slice(0,1).toLowerCase() === val.slice(0,1).toLowerCase()){
        this.setState({
          arr:this.state.arr.push(value)
        });
      }
      else{
        this.setState({
          arr:[]
        });
      }
    })
    console.log(this.state.arr);
    this.props.search(this.state.arr);
  }
  }
   
    render() {

        return (
            <div>
                 {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link className="navbar-brand" to="/"><img src="https://static1.yan.vn/2019/theme/images/logo-dark-new.svg" alt="picture" /></Link>
        <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div id="my-nav" className="collapse navbar-collapse pt-3">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/video">VIDEO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/sao">SAO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/music">NHẠC</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/phim">PHIM</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/beauty">làm ĐẸP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/life">ĐỜI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/young">giới TRẺ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/chat">chất</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/diary">Nhật ký</Link>
            </li>
            <li className="nav-item">
              <div className="input-group mb-3">
                <input onChange = {(event) => this.setKey(event)} type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                 <Link onClick = {(event,val) => this.getSearch(this.state.key)} to = "/search" className="btn btn-danger">Search</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    data: state.mix
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (val) => {
      dispatch(action.search(val));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)
