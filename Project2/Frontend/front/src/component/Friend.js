import React, { Component } from 'react'
import Footer from './Footer';
import axios from 'axios';
const profile = () =>(
  axios.get('/profile')
  .then(res => res.data)
)

const story = () =>(
  axios.get('/story')
  .then(res => res.data)
)

class Friend extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      story:[],
      maid:''
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
    if(this.state.story = []){
      story().then((res) =>{
       this.setState({
         story:res
       });
      });
     }
  }

  get_id = '';

  set_Info = () =>{
    if(this.state.data !== []){
      return this.state.data.map((value,key) => {
        if(value._id === this.props.match.params.id_friend){
          this.get_id = value.maid;
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
          <h4 style={{display: 'inline',position:'relative',top:'5px'}}>contact with me : </h4>
          <span className="mx-2"><a href={value.facebook}><img src="https://image.flaticon.com/icons/svg/1384/1384053.svg" alt="anh" height="30" width="30"></img></a></span>
          <span className="mx-2"><a href={value.instagram}><img src="https://image.flaticon.com/icons/svg/2111/2111463.svg" alt="anh" height="30" width="30"></img></a></span>
          <span className="mx-2"><a href={value.twitter}><img src="https://image.flaticon.com/icons/svg/733/733579.svg" alt="anh" height="30" width="30"></img></a></span>
            </div>
          </div>
          )
        }
      })
    }
  }

  setStory = () =>{
    if(this.state.story !== []){
      return this.state.story.map((value,key) =>{
        if(value.maid === this.get_id){
          return(
            <div className="container mt-5" key={key}>
            <div className="row story">
              <div className="col-xs-12 mx-auto">
          <h5>{value.title}</h5>
          <p>{`${value.day}/${value.month}/${value.year}`}</p>
                <img src={value.img} alt="anh" height="487" width="730" />
          <p className="mt-3">{value.text}</p>
              </div>
              <hr></hr>
            </div>
          </div>
          )
        }
      })
    }
  }
    render() {

      console.log(this.state.story);
      console.log(this.props.match.params.id_friend);
        return (
            <div>
        <div className="your-profile" style={{background: 'black'}}>
        <div className="container">
          {/* <div className="row profile">
            <div className="col-md-6 text-center pr gray" style={{borderRight: '1px solid #8080804d'}}><a href="#" className="text-white"><h4 className="pt-1">Your profile</h4></a></div>
            <div className="col-md-6 text-center pr"><a href="#" className="text-white"><h4 className="pt-1">album</h4></a></div>
          </div> */}
          {this.set_Info()}
          {this.setStory()}
        </div>
      </div>
      <Footer></Footer>
            </div>
        )
    }
}

export default Friend;
