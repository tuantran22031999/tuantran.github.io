import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
class Home extends Component {

  change_pink = () =>{
    var body = document.getElementsByTagName('body');
    body[0].style.background = '#fa9bc3';
  }
  change_blue = () =>{
    var body = document.getElementsByTagName('body');
    body[0].style.background = '#83eff8';
  }
    render() {
        return (
            <div>
                <div className="home">
        <div className="color">
          <div className="blue" onClick = {this.change_blue} />
          <div className="pink" onClick = {this.change_pink} />
        </div>
        <div className="container">
          <div className="row title">
            <div className="col-xs-12 mx-auto">
              <img className="mx-auto" src="https://freepngimg.com/download/kids/27703-9-cute-kids-transparent-image.png" alt="anh" style={{width: '500px', height: '300px'}} />
            </div>
            <div className="col-xs-12 mx-auto">
              <h1>english for kids</h1>
            </div>
          </div>
          <div className="row home">
            <div className="col-md-7 col-sm-12 mx-auto">
              <Link to="/abc" className="btn btn-primary text-white but" style={{background:'red', border: '0px'}}>ABC Course</Link>
              <a href="#" className="btn btn-primary text-white but" style={{background:'orange ', border: '0px '}}>numbers</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: 'violet', border: '0px '}}>family</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: 'green', border: '0px '}}>house</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: 'blue ', border: '0px '}}>garden</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: 'yellow', border: '0px '}}>Travels</a>
              <Link to="/animal" className="btn btn-primary text-white but" style={{background:'greenyellow', border: '0px'}}>Animals</Link>
              <a href="#" className="btn btn-primary text-white but" style={{background: 'gray ', border: '0px '}}>Countries</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: '#ff0078 ', border: '0px '}}>Foods</a>
              <a href="#" className="btn btn-primary text-white but" style={{background: '#8300ff ', border: '0px '}}>Healths</a>
              <Link to="/game" className="btn btn-primary text-white but1" style={{background: '#0c7f89', border: '0px '}}>Games</Link>
            </div>
          </div>
        </div>
      </div> 
            </div>
        )
    }
}

export default Home;
