import React, { Component } from 'react';
import axios from 'axios';

const add = (add) =>{
  axios.post('/add.22031999',{add})
  .then(res => res.data);
}

class Insert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme:"",
      value:"",
      picture:"",
      pronounce:"",
      translate:""
    };
  }

  get = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });
  }
   
  set = (event,val) =>{
    if(val.theme !== "" && val.value !== ""  && val.picture !== "" && val.pronounce !== "" && val.translate !== ""){
      add(val);
      alert('Insert success');
    }
    else{
      alert('Not empty');
      event.preventDefault();
      return false;
    }
  }


    render() {
      console.log(this.state);
        return (
            <div>
                  {/* insert */}
      <div className="insert_form">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 mx-auto">
              <form>
                <div className=" form-group my-0">
                  <label htmlFor="theme" className="my-0"><h5>Theme</h5></label>
                  <select  onChange = {(e) => this.get(e)} className="form-control" name="theme" id="theme">
                    <option>-- Choose --</option>
                    <option value="abc">ABC</option>
                    <option value="animal">Animals</option>
                  </select>
                </div>
                <div className=" form-group my-0">
                  <label htmlFor="value" className="my-0"><h5>Value</h5></label>
                  <input  onChange = {(e) => this.get(e)} id="value" type="text" name="value" className="form-control" />
                </div>
                <div className=" form-group my-0">
                  <label htmlFor="picture" className="my-0"><h5>Picture</h5></label>
                  <input  onChange = {(e) => this.get(e)} id="picture" type="text" name="picture" className="form-control" />
                </div>
                <div className=" form-group my-0">
                  <label htmlFor="pronounce" className="my-0"><h5>Pronounce</h5></label>
                  <input  onChange = {(e) => this.get(e)} id="pronounce" type="text" name="pronounce" className="form-control" />
                </div>
                <div className=" form-group my-0">
                  <label htmlFor="translate" className="my-0"><h5>Translate</h5></label>
                  <input  onChange = {(e) => this.get(e)} id="translate" type="text" name="translate" className="form-control" />
                </div>
                <button onClick = {(event,val) => this.set(event,this.state)} type="submit" className="btn btn-block btn-danger mt-3">Insert</button>
              </form>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Insert;
