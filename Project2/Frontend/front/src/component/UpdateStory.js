import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

const up = (fix) =>{
    axios.post('/update_story',{fix})
    .then(res => res.data)
}

class UpdateStory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:this.props.data._id,
            maid:this.props.data.maid,
            title:this.props.data.title,
            img:this.props.data.img,
            text:this.props.data.text,
            but:false
        };
    }

    get = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    set = (val) =>{
        up(val);
        this.setState({
            but:true
        });
    } 

    keycode = (e) =>{
        if(e.key === 'Enter'){
          this.set(this.state);
        }
      }
     
    render() {

        if(this.state.but === true){
            alert('Update success');
            return <Redirect to={`/your_profile.${this.state.maid}`}></Redirect>
        }
        return (
            <div>
                <div className="container-fluid py-5" style={{background: 'black',height:'720px'}}>
                <h1 className="text-center text-white">UPDATE YOUR STORY</h1>
                    <div className="row">
                      <div className="col-md-5 col-sm-12 mx-auto">
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue={this.props.data.title} onChange = {(e) => this.get(e)} id="title" className="form-control" type="text" name="title" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Picture</label>
                          <input onKeyPress = {(e) => this/this.keycode(e)} defaultValue={this.props.data.img} onChange = {(e) => this.get(e)} id="img" className="form-control" type="text" name="img" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="text">Text</label>
                          <textarea onKeyPress = {(e) => this/this.keycode(e)} defaultValue={this.props.data.text} onChange = {(e) => this.get(e)} style={{display:'block'}} name="text" id="text" cols={71} rows={12} style={{padding:"10px"}}></textarea>
                        </div>
                        <button onKeyPress = {(e) => this/this.keycode(e)} onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger mt-4">Update Story</button>
                      </div>
                   </div>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.check1
    }
}

export default connect(mapStateToProps)(UpdateStory)
