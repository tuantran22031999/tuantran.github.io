import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const upStory = (story) =>(
    axios.post('/upStory',{story})
    .then(res => res.data)
)

class Story extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maid:this.props.match.params.id,
            title:"",
            img:"",
            text:"",
            day:"",
            month:"",
            year:"",
            but:false
        };
    }

    get = (e) =>{
        var date  = new Date;
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        this.setState({
            [e.target.name]:e.target.value,
            day:day,
            month:month,
            year:year
        });
    }

    set = (val) =>{
        if(this.state.img !== "" || this.state.text !== ""){
        upStory(val).then((res) => res);
        this.setState({
            but:true
        });
        alert('Add story success');
    }
    else{
        alert(' Img or Text not empty');
        return false;
    }
    }
     
    render() {
        if(this.state.but === true){
            return <Redirect to={`/your_profile.${this.props.match.params.id}`}></Redirect>
        }
        return (
            <div>
                <div className="container-fluid py-5" style={{background: 'black',height:'720px'}}>
                <h1 className="text-center text-white">YOUR STORY</h1>
                    <div className="row">
                      <div className="col-md-5 col-sm-12 mx-auto">
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input onChange = {(e) => this.get(e)} id="title" className="form-control" type="text" name="title" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="img">Picture</label>
                          <input  onChange = {(e) => this.get(e)} id="img" className="form-control" type="text" name="img" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="text">Text</label>
                          <textarea  onChange = {(e) => this.get(e)} style={{display:'block'}} name="text" id="text" cols={71} rows={12} style={{padding:"10px"}}></textarea>
                        </div>
                        <button onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger mt-4">Add Story</button>
                      </div>
                   </div>
                  </div>
            </div>
        )
    }
}

export default Story;
