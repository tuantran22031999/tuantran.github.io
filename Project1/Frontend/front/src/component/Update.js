import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/Index';
import axios from 'axios';

const up = (up) =>(
  axios.post('/up',{up})
  .then(res => res.data)
)

class Update extends Component {

  constructor(props) {
    super(props);
    this.state = {
       author: this.props.data.author,
       img: this.props.data.img,
       short_text: this.props.data.short_text,
       text: this.props.data.text,
       theme: this.props.data.theme,
       time: this.props.data.time,
       title:this.props.data.title,
       _id: this.props.data._id
    };
  }

  upChange = (event) =>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  getUpdate = (val) =>{
    this.props.update(val);
    up(val).then((res) =>{
      return null;
    });
  }
   
    render() {
        return (
            <div>
                 {/* add */}
      <div className="update mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 mx-auto" style={{width: '50%'}}>
              <form>
                <div className="form-group">
                  <label htmlFor="author" className="text-white" style={{fontSize: '18px'}}>Author :</label>
                  <input onChange={(event) => this.upChange(event)} defaultValue={this.props.data.author} id="author" className="form-control" type="text" name="author" />
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="text-white" style={{fontSize: '18px'}}>Theme :</label>
                  <select onChange={(event) => this.upChange(event)}  defaultValue={this.props.data.theme} name="theme" id="theme" style={{display: 'block', width: '100%'}}>
                  <option>--theme--</option>
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
                  <input onChange={(event) => this.upChange(event)} defaultValue={this.props.data.time} id="time" className="form-control" type="date" name="time" />
                </div>
                <div className="form-group">
                  <label htmlFor="title" className="text-white" style={{fontSize: '18px'}}>Title :</label>
                  <input onChange={(event) => this.upChange(event)}  defaultValue={this.props.data.title} id="title" className="form-control" type="text" name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="img-title" className="text-white" style={{fontSize: '18px'}}>Img-title :</label>
                  <input onChange={(event) => this.upChange(event)} defaultValue={this.props.data.img_title} id="img-title" className="form-control" type="text" name="img-title" />
                </div>
                <div className="form-group">
                  <label htmlFor="img" className="text-white" style={{fontSize: '18px'}}>Img :</label>
                  <input onChange={(event) => this.upChange(event)} defaultValue={this.props.data.img} id="img" className="form-control" type="text" name="img" />
                </div>
                <div className="form-group">
                  <label htmlFor="short-text" className="text-white" style={{fontSize: '18px'}}>Short-text :</label>
                  <input onChange={(event) => this.upChange(event)} defaultValue={this.props.data.short_text} id="short-text" className="form-control" type="text" name="short-text" />
                </div>
                <div className="form-group">
                  <label htmlFor="text" className="text-white" style={{fontSize: '18px'}}>Text :</label>
                  <textarea onChange={(event) => this.upChange(event)} defaultValue={this.props.data.text} name="text" id="text" cols={76} rows={10} style={{display: 'block'}} />
                </div>
                <button onClick = {(val) => this.getUpdate(this.state)} type="submit" className="btn btn-block btn-primary mt-4">UPDATE</button>
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
    data: state.check
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (val) => {
      dispatch(action.update(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Update)