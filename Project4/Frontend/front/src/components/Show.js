import React, { Component } from 'react';
import axios from "axios";
const find = () =>(
  axios.get('/find')
  .then(res => res.data)
)
const find1 = () =>(
  axios.get('/find1')
  .then(res => res.data)
)
const add1 = (add1) =>(
  axios.post('/add1',{add1})
  .then(res => res.data)
)

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      data1:null,
      maid:null,
      num:null,
      hours:null,
      minute:null,
      date:null,
      month:null,
      year:null,
      name:'',
      text:'',
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.data === null){
      find().then((res) =>{
        this.setState({
          data:res
        });
      })
    }
    if(this.state.data1 === null){
      find1().then((res) =>{
        this.setState({
          data1:res
        });
      })
    }
  }

change = (value,key) =>{
return <a onClick={(val) => this.show(value._id,value.num,key)} className="rep">Reply</a>
}

  get = () =>{
    if(this.state.data !== null){
      return this.state.data.map((value,key) => {
        return(
          <div className="col-md-12" key={key}>
          <div className="comment">
            <img src="https://secure.gravatar.com/avatar/32ee4095bee983056328dec0df475263?s=140&d=mm&r=g 2x" alt="anh" />
        <span><h6>{value.name}</h6></span>
        <p className="my-0">{value.text}</p>
        <p className="my-0">{`${value.date}/${value.month}/${value.year},${value.hours}:${value.minute}`}</p>
            {this.change(value,key)}
          </div>
          {this.get1(value._id,key)}
          <form className="repl">
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input onChange={(e) => this.set(e)} id="Name" className="form-control" type="text" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="text" style={{display: 'block'}}>Reply</label>
              <textarea onChange={(e) => this.set(e)} name="text" id="text" cols={30} rows={10} />
            </div>
            <button onClick={(event,val) => this.set1(event,this.state)} type="submit" className="btn btn-primary">Reply</button>
          </form>
          <hr></hr>
        </div>
        )
      })
    }
  }

  get1 = (val,kiy) =>{
    if(this.state.data1 !== null){
      return this.state.data1.map((value,key) =>{
        if(value.maid === val){
          return(
            <div className="reply" style={{marginLeft: `${value.num*50}px`}} key={key}>
            <img src="https://secure.gravatar.com/avatar/32ee4095bee983056328dec0df475263?s=140&d=mm&r=g 2x" alt="anh" />
          <span><h6>{value.name}</h6></span>
          <p className="my-0">{value.text}</p>
            <p className="my-0">{`${value.date}/${value.month}/${value.year},${value.hours}:${value.minute}`}</p>
            <a onClick={(maid,num,key) => this.show(value.maid,value.num,kiy)} className="rep">Reply</a>
          </div>
          )
        }
      })
    }
  }

  set = (e) =>{
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

  set1 = (event,val) =>{
    if(val.name !== '' && val.text !== ''){
    add1(val)
    alert('comment success');
  }
  else{
    event.preventDefault();
    alert('not empty');
    return false;
  }
  }

  show = (maid,num,key) =>{
    this.setState({
      maid:maid,
      num:num+1
    });
    console.log(key);
    var rep = document.getElementsByClassName('repl');
    rep[key].classList.toggle('show');
  }
   
    render() {
      console.log(this.state);
        return (
            <div>
                 <div className="container">
        <div className="row">
          {this.get()}
        </div>
      </div>
            </div>
        )
    }
}

export default  Show;
