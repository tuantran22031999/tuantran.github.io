import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import axios from 'axios';

const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)


class Home_1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
   
  componentWillMount() {
    if(this.state.data = []){
     profile().then((res) =>{
      this.setState({
        data:res
      });
     });
    }
    if(localStorage.getItem('get_id') === null){
      localStorage.setItem('get_id',JSON.stringify(this.props.match.params.id));
    }
  }

  set_host = () =>{
    var id_host = JSON.parse(localStorage.getItem('get_id'));
    if(this.state.data !== []){
      return this.state.data.map((value,key) => {
        if(value.maid === this.props.match.params.id){
         return(
           <div>
        <ul className="navbar-nav mr-auto pt-3" key={key}>
          <li className="nav-item on">
          <Link className="nav-link on" to={`/home.${value.maid}`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/your_profile.${value.maid}`}>Your Profile</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={`/`}>Back</a>
         </li>
        </ul>
        </div>
         )
        }
        else if(value._id === this.props.match.params.id_friend){
          return(
            <div>
         <ul className="navbar-nav mr-auto pt-3">
           <li className="nav-item on">
           <Link className="nav-link on" to={`/home.${id_host}`}>Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to={`/your_profile.${id_host}`}>Your Profile</Link>
         </li>
         <li className="nav-item">
           <a className="nav-link" href={`/`}>Back</a>
         </li>
         </ul>
         </div>
          )
         }
      })
    }
  }


    render() {
        return (
            <div>
                 {/* home_1 */}
      <div className="home_1">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background: 'black'}}>
          <a className="navbar-brand"><img src="img/source.gif" alt="anh" height="70px" width="70px" /></a>
          <button className="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
             {this.set_host()}
          </div>
        </nav>
      </div>
            </div>
        )
    }
}

export default Home_1;
