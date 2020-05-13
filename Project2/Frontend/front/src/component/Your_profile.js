import React, { Component } from 'react'
import Img from './Img';
import Footer from './Footer';
import axios from 'axios';
const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)

class Your_profile extends Component {

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
  }

  set_Info = () =>{
    if(this.state.data !== []){
      return this.state.data.map((value,key) => {
        if(value.maid === this.props.match.params.id){
          return(
            <div className="row info" key={key}>
            <div className="col-xs-12 mt-5 text-center mx-auto">
              <img src={value.picture} alt="anh" height="350px" width="350px" className="rounded-circle" />
          <h3 className="mt-4">{value.name}</h3>
          <h4>Birthday : {value.birthday}</h4>
          <h4>Age : {value.age}</h4>
          <h4>Home town : {value.hometown}</h4>
          <h4>favorite : {value.favorite}</h4>
          <h4>maxim : {value.maxim}</h4>
              <form>
                <button type="button" className="btn btn-warning text-white">Update</button>
              </form>
            </div>
          </div>
          )
        }
      })
    }
  }
    render() {

      console.log(this.props.match.params);
        return (
            <div>
        <div className="your-profile" style={{background: 'black'}}>
        <div className="container">
          {/* <div className="row profile">
            <div className="col-md-6 text-center pr gray" style={{borderRight: '1px solid #8080804d'}}><a href="#" className="text-white"><h4 className="pt-1">Your profile</h4></a></div>
            <div className="col-md-6 text-center pr"><a href="#" className="text-white"><h4 className="pt-1">album</h4></a></div>
          </div> */}
          {this.set_Info()}
        </div>
      </div>
      <Footer></Footer>
            </div>
        )
    }
}

export default Your_profile;
