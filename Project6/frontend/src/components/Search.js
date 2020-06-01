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


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
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
  }

  set = () =>{
    var count = 0;
    if(this.state.data !== null){
      return this.state.data.map((value,key) =>{
        count ++;
        if(count < 9 && value.theme === 'music'){
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
        )}
      })
    }
  }

  up = (val) =>{
    up_seen(val);
  }
   
    render() {
      console.log(this.state);
        return (
            <div>
                      {/* music */}
      <div className="music">
        <div className="container-fluid">
          <h3 className="ml-4">Music</h3>
          <div className="row music">
            {this.set()}
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Search;
