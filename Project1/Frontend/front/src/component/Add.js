import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as action from '../actions/Index';
import axios from 'axios';

const add = (add) =>(

  axios.post('/add',{add})
  .then(response => response.data)
)

class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {

      author:'',
      theme:'',
      time:'',
      title:'',
      img_title:'',
      img:'',
      short_text:'',
      text:''
    };
  }

  getChange = (event) =>{

    this.setState({
      [event.target.name]:event.target.value,
    });
  }

  addData = (val) =>{

    this.props.add(val);
    add(val).then((response) =>{
      return null;
    })
  }
   
    render() {
        return (
            <div>
                 {/* add */}
      <div className="add mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 mx-auto" style={{width: '50%'}}>
              <form>
                <div className="form-group">
                  <label htmlFor="author" className="text-white" style={{fontSize: '18px'}}>Author :</label>
                  <input onChange = {(event) => this.getChange(event)} id="author" className="form-control" type="text" name="author" />
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="text-white" style={{fontSize: '18px'}}>Theme :</label>
                  <select  onChange = {(event) => this.getChange(event)} name="theme" id="theme" style={{display: 'block', width: '100%'}}>
                  <option>--Theme--</option>
                    <option value={0}>Video</option>
                    <option value={1}>Sao</option>
                    <option value={2}>Nhạc</option>
                    <option value={3}>Phim</option>
                    <option value={4}>Làm Đẹp</option>
                    <option value={5}>Giới Trẻ</option>
                    <option value={6}>Đời</option>
                    <option value={7}>Chất</option>
                    <option value={8}>Nhật Ký</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="time" className="text-white" style={{fontSize: '18px'}}>Date :</label>
                  <input  onChange = {(event) => this.getChange(event)} id="time" className="form-control" type="date" name="time" />
                </div>
                <div className="form-group">
                  <label htmlFor="title" className="text-white" style={{fontSize: '18px'}}>Title :</label>
                  <input  onChange = {(event) => this.getChange(event)} id="title" className="form-control" type="text" name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="img_title" className="text-white" style={{fontSize: '18px'}}>Img-title :</label>
                  <input  onChange = {(event) => this.getChange(event)} id="img_title" className="form-control" type="text" name="img_title" />
                </div>
                <div className="form-group">
                  <label htmlFor="img" className="text-white" style={{fontSize: '18px'}}>Img :</label>
                  <input  onChange = {(event) => this.getChange(event)} id="img" className="form-control" type="text" name="img" />
                </div>
                <div className="form-group">
                  <label htmlFor="short_text" className="text-white" style={{fontSize: '18px'}}>Short-text :</label>
                  <input  onChange = {(event) => this.getChange(event)} id="short_text" className="form-control" type="text" name="short_text" />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="text-white" style={{fontSize: '18px'}}>Text :</label>
                  <textarea  onChange = {(event) => this.getChange(event)} name="text" id="text" cols={76} rows={10} style={{display: 'block'}} defaultValue={""} />
                </div>
                <button onClick = {(val) => this.addData(this.state)} type="submit" className="btn btn-block btn-primary mt-4">ADD</button>
              </form>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val) => {
      dispatch(action.add(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);