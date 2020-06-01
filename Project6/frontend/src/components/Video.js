import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const music = () =>(
  axios.get('/find')
  .then(res => res.data)
)

const find = () =>(
  axios.get('/find_comment')
  .then(res => res.data)
)

const find1 = () =>(
  axios.get('/find_reply')
  .then(res => res.data)
)

const up_seen = (up) => (
  axios.post('/up_seen',{up})
  .then(res => res.data)
)

const up_like = (like) => (
  axios.post('/up_like',{like})
  .then(res => res.data)
)

const up_dislike = (dislike) => (
  axios.post('/up_dislike',{dislike})
  .then(res => res.data)
)

const comment = (comment) =>(
  axios.post('/comment',{comment})
  .then(res => res.data)
)

const reply = (reply) =>(
  axios.post('/reply',{reply})
  .then(res => res.data)
)

 
class Video extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:null,
      like:true,
      dislike:true,
      cmt:null,
      reply:null,
      rep:null,
      name:'',
      name1:'',
      comment:'',
      date:'',
      month:'',
      year:'',
      id_theme:this.props.match.params.id,
      id_in:null,
      num:0,
      num1:null
    };
  }

  componentWillMount() {
    if(this.state.data === null){
      music().then((res) => {
        this.setState({
          data:res,
        });
      })
    }
    if(this.state.cmt === null){
      find().then((res) => {
        this.setState({
          cmt:res,
        });
      })
    }
    if(this.state.reply === null){
      find1().then((res) => {
        this.setState({
          reply:res,
        });
      })
    }
  }

  set = () => {
    if(this.state.data !== null){
      return this.state.data.map((value,key) =>{
        if(value._id === this.props.match.params.id && value.theme === this.props.match.params.theme){

          return(
            <div>
            <div style={{ height: '464px'}} key={key}>
              <ReactPlayer url={value.video} 
              playing
             controls
             autoPlay
             width='100%'
             height='464px'
            />
              </div>
              <div className="text">
          <h3 className="mt-3">{value.title}</h3>
                <div className="info">
                  <div className="right">
                    <span><h6 style={{display: 'inline'}}>{`${value.seen} lượt xem`}</h6></span>
                    <span className="ml-2"><h6 style={{display: 'inline'}}>{`${value.date}/${value.month}/${value.year}`}</h6></span>
                  </div>
                  <div className="left" style={{marginRight: '100px'}}>
          <span onClick = {(val) => this.like(value)} title="Like"><i className="fa fa-thumbs-o-up" aria-hidden="true" />{value.like}</span>
          <span onClick = {(val) => this.dislike(value)} title="Dislike" className="ml-2"><i className="fa fa-thumbs-o-down" aria-hidden="true">{value.dislike}</i></span>
                  </div>
                </div>
                <hr />
          <h6>{value.nd}</h6>
                <hr />
              </div>
              </div> 
          )
        } 
      })
    }
  }

  cmt = (e) => {
    var time = new Date;
    var date = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    this.setState({
      [e.target.name] : e.target.value,
      date : date,
      month : month,
      year : year
    });
  }

  reply = (e) => {
    var time = new Date;
    var date = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    this.setState({
      [e.target.name] : e.target.value,
      date : date,
      month : month,
      year : year
    });
  }

  up_cmt = (event,val) => {
    if(val.name === '' || val.comment === ''){
      event.preventDefault();
      alert('not empty');
      return false
    }
    else{
      alert('Comment success');
    comment(val);}
  }

  up_reply = (event,val) => {
    if(val.name1 === '' || val.rep === ''){
      event.preventDefault();
      alert('not empty');
      return false
    }
    else{
      alert('Comment success');
    reply(val);}
  }

  up = (val) =>{
    up_seen(val);
  }

  like = (val) =>{ 
    if(this.state.like === true){
    up_like(val)
    this.setState({
      like:false
    });
  }
  else{
    return false;
  }
  }

  dislike = (val) =>{ 
    if(this.state.dislike === true){
      up_dislike(val)
      this.setState({
        dislike:false
      });
    }
    else{
      return false;
    }
}


  set1 = () =>{
    var count = 0;
    if(this.state.data !== null){
      return this.state.data.map((value,key) => {
        count++;
        if(count < 10){
          return(
            <div className="propose mb-2" key={key}>
            <div className="top">
              <img src={value.img} alt="anh" width={280} height={155} />
              <img className="gif" src={value.gif} alt="anh" width={280} height={155} />
            </div>
            <div className="bootom">
            <Link onClick={(val) => this.up(value)} to={`/video/${value.theme}.${value._id}`}><h6 className="my-0 mt-2">{value.title}</h6></Link>
              <p className="my-0">{`${value.seen} lượt xem`}</p>
            </div>
          </div>
          )
      }
      });
    }
  }

  check = false;

  open = () =>{
    var cmt = document.getElementsByClassName('cmt');
    if(this.check === true){
    this.state.cmt.map((value,key) => {
      if(value.id_theme === this.props.match.params.id){
        cmt[key].classList.toggle('long');
      }
    })
  }
  else{
    return false;
  }
  }

  set_comment = () =>{
    if(this.state.cmt !== null){
      return this.state.cmt.map((value,key) => {  
        if(value.id_theme === this.props.match.params.id){
          this.check = true;
        } 
          return(
            <div className="cmt" key= {key}>
            <div className="inside">
              <img src="https://succonst.com/img/login.png" alt="anh" width="60px" height="60px" style={{height: '60px'}} />
              <div className="in_text ml-2">
          <h6>{value.name}</h6>
          <p className="my-0">{value.comment}</p>
                <p className="my-0">{`${value.date}/${value.month}/${value.year}`}</p>
                {this.button_reply(key,value._id,value.num)}
              </div>
            </div>
            {this.set_reply(value._id)}
            <form className="reply">
              <div className="form-group">
                <label htmlFor="name1">Your name:</label>
                <input onChange = {(e) => this.reply(e)} id="name1" className="form-control" type="text" name="name1" />
              </div> 
              <div className="form-group">
                <label htmlFor="rep">Reply:</label>
                <input onChange = {(e) => this.reply(e)} id="rep" className="form-control" type="text" name="rep" />
              </div>
              <button onClick = {(event,val) => this.up_reply(event,this.state)} type="button" className="btn btn-block btn-danger">ADD</button>    
            </form>
            <hr></hr>
          </div>
          )
      })
    }
  }

  set_reply = (id) => {
    if(this.state.reply !== null){
      return this.state.reply.map((value,key) => {
        if(value.id_in === id){
          return(
            <div className="outside" style={{marginLeft: value.num*50}} key={key}>
              <img src="https://succonst.com/img/login.png" alt="anh" width="60px" height="60px" style={{height: '60px'}} />
              <div className="out_text ml-2">
          <h6>{value.name}</h6>
          <p className="my-0">{value.reply}</p>
                <p className="my-0">{`${value.date}/${value.month}/${value.year}`}</p>
              </div>
            </div>
          )
        }
      })
    }
  }

  show = (key,id,num) =>{
    this.setState({
      num1:num + 1,
      id_in:id
    })
    console.log(this.state);
    var reply = document.getElementsByClassName('reply');
    reply[key].classList.toggle('show');
  }

  button_reply = (key1,id1,num1) =>{
    return (<a onClick = {(key,id,num) => this.show(key1,id1,num1)} style={{cursor: 'pointer'}}><h6>REPLY</h6></a>)
  }

    render() {
      console.log(this.state);
        return (
            <div>
                 {/* video */}
      <div className="video" style={{marginTop:'100px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              {this.set()}
                <div className="comment">
                  <h3>COMMENT:</h3>
                  <div className="father">
                    <form>
                      <div className="form-group">
                        <label htmlFor="name">Your name:</label>
                        <input onChange = {(e) => this.cmt(e)} id="name" className="form-control" type="text" name="name" />
                      </div> 
                      <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <input onChange = {(e) => this.cmt(e)} id="comment" className="form-control" type="comment" name="comment" />
                      </div>
                      <button onClick = {(event,val) => this.up_cmt(event,this.state)} type="submit" className="btn btn-block btn-danger">ADD</button>    
                    </form>
                    {this.set_comment()}
                  </div>
                  <button onClick = {this.open} type="button" className="btn btn-block btn-secondary mt-2 other">OTHER COMMENT</button>
                </div>
              </div>
            <div className="col-md-3">
              {this.set1()}
            </div>
            </div>
          </div>
        </div>
      </div>
           
        )
    }
}

export default Video;
