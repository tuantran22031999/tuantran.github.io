import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect
} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
      check:false
    };
  }
   
  get = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  set = () =>{
    this.setState({
      check:true
    });
  }
    render() {
      console.log(this.state.search);
      if(this.state.check === true){
        return <Redirect to={`/search.${this.state.search}`}></Redirect>
      }
        return (
            <div>
                      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">         
          <Link className="navbar-brand" to="/"><img src="https://lh3.googleusercontent.com/proxy/idsxMW4jPFyjXJCFlVopbvrcC20MDI-u2WiE5_uWlTJXeQMKwI2Rkpn5XYUK6uPpcBOBB_80v7HC-trjJeaEa3ERQmFhYbM" alt="anh" height="30px" width="30px" /> my videos</Link>
          <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/music">Music</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Movie</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">sport</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Children</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Life</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Food</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">science &amp; technology</a>
              </li>
              <li className="nav-item">
                <form>
                  <div className="input-group">
                    <input onChange = {(e) => this.get(e)} type="text" className="form-control" placeholder="Search..." name="search" />
                    <div className="input-group-prepend">
                      <span onClick = {() => this.set()} className="input-group-text" id="search" style={{cursor: 'pointer'}}>Search</span>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </header>
            </div>
        )
    }
}

export default Header;