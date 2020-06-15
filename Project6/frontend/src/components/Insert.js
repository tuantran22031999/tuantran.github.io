import React, { Component } from 'react';
import axios from 'axios';

const add = (add) =>(
  axios.post('/add',{add})
  .then(res => res.data)
)

class Insert extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      theme:'',
      img:'',
      gif:'',
      video:'',
      nd:'',
      like:0,
      dislike:0,
      seen:0,
      date:'',
      month:'',
      year:''
    };
  }
   

  get = (e) =>{
    var time = new Date;
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    this.setState({
      [e.target.name] : e.target.value,
      date : date,
      month : month+1,
      year : year
    });
  }

  set = (event,val) =>{
    if(val.title === '' || val.theme === '' || val.img === '' || val.gif === '' || val.video === '' || val.nd === ''){
      event.preventDefault();
      alert('not empty')
      return false;
    }
    else{
      if(val.theme == 0){
        val.theme = 'music';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 1){
        val.theme = 'movie';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 2){
        val.theme = 'sport';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 3){
        val.theme = 'news';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 4){
        val.theme = 'children';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 5){
        val.theme = 'life';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 6){
        val.theme = 'food';
        alert('insert success');
        add(val);
      }
      else if(val.theme == 7){
        val.theme = 'science & technology';
        alert('insert success');
        add(val);
      }
    }
  }
    render() {
      console.log(this.state);
        return (
            <div>
                {/* insert */}
      <div className="insert" style={{marginTop:'80px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h3 className="text-center">INSERT</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input onChange = {(e) => this.get(e)} id="title" className="form-control" type="text" name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="theme">Theme</label>
                  <select onChange = {(e) => this.get(e)} name="theme" id="theme" className="form-control">
                    <option>--choose--</option>
                    <option value={0}>music</option>
                    <option value={1}>movie</option>
                    <option value={2}>sport</option>
                    <option value={3}>news</option>
                    <option value={4}>children</option>
                    <option value={5}>life</option>
                    <option value={6}>food</option>
                    <option value={7}>science &amp; technology</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="img">Images</label>
                  <input onChange = {(e) => this.get(e)} id="img" className="form-control" type="text" name="img" />
                </div>
                <div className="form-group">
                  <label htmlFor="gif">Gif</label>
                  <input onChange = {(e) => this.get(e)} id="gif" className="form-control" type="text" name="gif" />
                </div>
                <div className="form-group">
                  <label htmlFor="video">Video</label>
                  <input onChange = {(e) => this.get(e)} id="video" className="form-control" type="text" name="video" />
                </div>
                <div className="form-group">
                  <label htmlFor="nd" style={{display: 'block'}}>Text</label>
                  <textarea onChange = {(e) => this.get(e)} className="form-control" name="nd" id="nd" cols={30} rows={10} defaultValue={""} />
                </div>
                <button onClick={(event,val) => this.set(event,this.state)} type="submit" className="btn btn-block btn-danger">Insert</button>
              </form>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Insert;
