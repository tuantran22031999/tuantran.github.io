import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const music = () =>(
  axios.get('/find')
  .then(res => res.data)
)

const up_seen = (up) => (
  axios.post('/up_seen',{up})
  .then(res => res.data)
)

const color = () =>(
  axios.get('/color')
  .then(res => res.data)
)


class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      color:null
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.data === null){
      music().then((res) => {
        this.setState({
          data:res
        });
      })
    }
    if(this.state.color === null){
      color().then((res) => {
          this.setState({
              color:res
          });
      })
  }
  }

  set = () =>{
    var count = 0;
    if(this.state.data !== null){
      return this.state.data.map((value,key) =>{
        if(value.theme === "movie"){
        count ++;
        if(count < 9){
        return(
          <div>
          <div className="col-lg-3 col-md-4 col-sm-6 mt-2" key={key}>
              <div className="top">
                <img src={value.img} alt="anh" width={280} height={155} />
                <img className="gif" src={value.gif} alt="anh" width={280} height={155} />
              </div>
              <div className="bootom">
        <Link onClick={(val) => this.up(value)} to={`/video/${value.theme}.${value._id}`}><h6 className="my-0 mt-2">{value.title}</h6></Link>
        <p className="my-0">{`${value.seen} lượt xem`}</p>
        <p className="my-0">{`${value.date}/${value.month}/${value.year}`}</p>
              </div>
            </div>
            </div>
        )}}
      })
    }
  }

  change = () =>{
    if(this.state.color !== null){
        if(this.state.color[0].col === 'white'){
            var body = document.getElementsByTagName('body');
            body[0].classList.add('white');
            body[0].classList.remove('black');
            console.log('white');
        }
        else if(this.state.color[0].col === 'black'){
            var body = document.getElementsByTagName('body');
            body[0].classList.add('black');
            body[0].classList.remove('white');
            console.log('black');
        }
    }
}

  up = (val) =>{
    up_seen(val);
  }
   
    render() {
      {
        this.change()
    }
        return (
            <div>
                      {/* music */}
      <div className="movie">
        <div className="container-fluid">
          <h3 className="ml-4">Movie</h3>
          <div className="row movie">
            {this.set()}
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Movie;
