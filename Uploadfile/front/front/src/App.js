import './App.css';
import React, { Component } from 'react';
import axios from "axios";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }


onChangeHandler=event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
    id:'3abn6'
  })
}

onClickHandler = (val) => {
  const data = new FormData();
  data.append('file', this.state.selectedFile);
  axios.post("/upload",data,val,{ 
     // receive two    parameter endpoint url ,form data
 })
.then(res => { // then print response status
   console.log(res.statusText)
})
}

  render() {
    return (
      <div>
         <form>
        <div className="form-group">
          <label htmlFor="picture">Text</label>
          <input onChange={this.onChangeHandler} id="picture" className="form-control" type="file" name="picture" />
          <button onClick={(val) => this.onClickHandler(this.state.id)} type="button" class="btn btn-primary">Upload</button>
        </div>
      </form>
      </div>
    )
  }
}

export default App;