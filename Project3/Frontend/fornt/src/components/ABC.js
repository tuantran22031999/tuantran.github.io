import React, { Component } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const get_abc = () =>(
  axios.get('/get_abc')
  .then(res => res.data)
)


class ABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null
    }
  }
   
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.data === null){
      get_abc().then((res) =>{
        this.setState({
          data:res
        });
      })
    }
  }


  speak = (val) => {
    if ('speechSynthesis' in window) {
      function say (){
        var text = val;
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices['Microsoft David Desktop - English (United States) (default)'];
        msg.text = text;
  
        msg.onend = function(event) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
  
        speechSynthesis.speak(msg);
      }
      say();}
  };

  get = () =>{
    if(this.state.data !== null){
      return this.state.data.map((value,key) => {
        return(

          <div className="col-md-2 col-sm-4 col-xs-6 text-center mt-2" key={key}>
          <div onClick = {(val) => this.speak(value.value)} className="speak">
            <img src = {value.picture} width="140" height="180"/>
            <a className="ml-4"><img src="https://cdn2.iconfinder.com/data/icons/perfect-pixel-game-ui-set/256/sound_on-512.png" alt="anh" width={30} height={30} /></a>
            <div className="translate">
           <div className="text"><h5>{ value.translate }</h5></div>
          </div>
          </div>
        <h5 className="text-center mt-1 mb-0 mr-2">{ value.value }</h5>
        <div className="mx-auto pronounce">{ value.pronounce }</div>
        </div>
        )
      })
    }
  }

    render() {
      console.log(this.state.data);
        return (
            <div>
                 {/* abc */}
      <div className="abc mt-5">
      <div className="back">
        <Link to="/" title="Back Home"><img src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/128/back-icon.png" alt="anh"></img></Link>
      </div>
        <div className="container">
          <div className="row title">
            <div className="col-xs-12 mx-auto">
              <img src="https://www.freepngimg.com/thumb/machine/56930-1-back-to-school-kids-free-png-hq.png" width={450} height={350} alt="anh" />
            </div>
            <div className="col-md-12 col-xs-12 text-center">
              <span className="char top" style={{color:'red'}}>l</span>
              <span className="char top" style={{color:'yellow'}}>e</span>
              <span className="char top" style={{color:'orange'}}>s</span>
              <span className="char top" style={{color:'blue'}}>s</span>
              <span className="char top" style={{color:'green'}}>o</span>
              <span className="char top" style={{color:'hotpink'}}>n</span>
            </div>
          </div>
          <div className="row abc">
            { this.get() }
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default ABC;
