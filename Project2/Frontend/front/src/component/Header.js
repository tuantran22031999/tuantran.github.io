import React, { Component } from 'react'

class Header extends Component {

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(localStorage.getItem('get_id') !== null){
      localStorage.removeItem('get_id');
    }
  }
    render() {
        return (
            <div>
                {/* header */}
      <header style={{background: 'black', height: '625px'}}>
        <div className="container-fluid pt-5">
          <div className="row pt-5">
            <div className="col-xs-12 mx-auto"><img src="img/Hayden's_Shuriken.png" alt="anh" height="150px" width="150px" /></div>
          </div>
          <div className="row head">
            <div className="col-xs-12 mx-auto pt-5 text-center">
              <h1 className="text-white mt-5 text-center" style={{fontSize: '60px', textTransform: 'uppercase'}}>ninja's profile</h1>
              <form id="log-sign">
                <a type="button" href="/signin" className="btn  btn-outline-primary mt-2 mr-2">Sign in</a>
                <a type="button" href="login" className="btn  btn-outline-primary mt-2 ml-2">Log in</a>
              </form>
            </div>
          </div>
        </div>
      </header>
            </div>
        )
    }
}

export default Header
