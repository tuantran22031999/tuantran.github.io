import './App.css';
import React, { Component } from 'react';
import axios from "axios";

const add = (file) =>(
  axios.post('/',{file})
  .then(res => res.data)
)

const find = () =>(
  axios.get('/find')
  .then(res => res.data)
)


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      data:null
    };
  }

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    if(this.state.data === null){
      find().then((res) =>{
        this.setState({
          data:res
        });
      })
    }
  }

  get = () =>{
    if(this.state.data !== null){
      return this.state.data.map((value,key) => {
        return(
          <img src={`data:video/mp4;base64,${value.img}`} alt="anh" key={key} width="500px" height="300px"/>
        )
      })
    }
    else{
      return ( <img src="https://img.idesign.vn/2018/10/23/id-loading-1.gif" alt="anh" width="500px" height="300px"/>)
    }
  }


onChangeHandler = event =>{
  this.setState({
    selectedFile: event.target.files[0],
  })
}

onClickHandler = () => {
 
  const data = new FormData();
  data.append('file', this.state.selectedFile);
  console.log(this.state.selectedFile);
  add(this.state.selectedFile.name)
  axios.post("/upload",data,{ 
     // receive two    parameter endpoint url ,form data
 })
.then(res => { // then print response status
   console.log(res.statusText)
})
}

  render() {
    console.log(this.state.data);
    return (
      <div>
         <form>
        <div className="form-group">
          <label htmlFor="picture">Text</label>
          <input onChange={this.onChangeHandler} id="picture" className="form-control" type="file" name="picture" />
          <button onClick={() => this.onClickHandler()} type="button" class="btn btn-primary">Upload</button>
        </div>
      </form>
      {this.get()}
      </div>
    )
  }
}

export default App;