import React, { Component } from 'react';
import axios from 'axios';
const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)

const set_male = (id) =>(
  axios.post('/set_male',{id})
  .then(res => res.data)
)

class Home extends Component {

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

  set = () =>{
    if(this.state.data !== []){
     return this.state.data.map((value,key) =>{
       if(value.maid !== this.props.match.params.id){
         if(value.picture === ""){
          set_male(value._id).then((res) => res);
         }
       return(
      <div className="col-md-4 col-sm-12 mt-5" key={key}>
      <a href={`/friend.${value._id}`}><img src={value.picture} alt="anh" className="rounded-circle ml-5" width="250px" height="250px" /></a>
       <a href={`/friend.${value._id}`}><h4 className="text-white text-center mt-3">{value.name}</h4></a>
      </div>)
     }})
    }
  }
    render() {
        return (
            <div>
                 {/* home */}
      <div className="home" style={{background: 'black'}}>
        <div className="container">
          <div className="row home">
            {this.set()}
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Home;
