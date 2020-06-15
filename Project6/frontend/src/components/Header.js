import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:''
    };
  }
   
  get = (e) =>{
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  check = (event,val) => {
    if(val === ''){
      event.preventDefault();
      alert('not empty');
      return false;
    }
  }

    render() {
        return (
            <div>
                      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">         
          <Link className="navbar-brand" to="/"><img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/49-512.png" alt="anh" height="30px" width="30px" /> my videos</Link>
          <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/music">Music</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/movie">Movie</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/sport">Sport</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/news">News</Link>
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
                      <a onClick = {(event,val) => this.check(event,
                        this.state.search)} className="btn btn-secondary" href={`/search.${this.state.search}`}>Search</a>
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