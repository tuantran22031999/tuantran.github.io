import React, { Component } from 'react';
import axios from "axios";
const add = (add) =>(
  axios.post('/add',{add})
  .then(res => res.data)
)

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      text:'',
      num:0,
      hours:null,
      minute:null,
      date:null,
      month:null,
      year:null
    };
  }
   

  get = (e) =>{
    var time = new Date;
    var hours = time.getHours();
    var minute = time.getMinutes();
    var date = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    this.setState({
      [e.target.name]:e.target.value,
      hours:hours,
      minute:minute,
      date:date,
      month:month,
      year:year
    });
  }

  set = (event,val) =>{
    if(val.name !== '' && val.text !== ''){
    add(val)
    alert('comment success');
  }
  else{
    event.preventDefault();
    alert('not empty');
    return false;
  }
  }
    render() {
      console.log(this.state);
        return (
            <div>
                  <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <form>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input onChange={(e) => this.get(e)} id="Name" className="form-control" type="text" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="text" style={{display: 'block'}}>Comment</label>
                <textarea onChange={(e) => this.get(e)} name="text" id="text" cols={30} rows={10} />
              </div>
              <button onClick={(event,val) => this.set(event,this.state)} type="submit" className="btn btn-primary">Comment</button>
            </form>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Comment;