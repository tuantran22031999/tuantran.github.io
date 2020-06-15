import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import axios from 'axios';
const remove = (_id) => (
  axios.post('/delete',{_id})
  .then(res => res.data)
)

class Home_picture extends Component {


  delete = (val) => {
    remove(val);
  }
    set_dataupload = () =>{
        if(this.props.upload !== null && this.props.filter === null){
          var i = this.props.upload.length;
          return this.props.upload.map((value,key) =>{
              if(i > 0){
              i--;
            return(
              <div className="img_card" key={key}>
                <Link title={this.props.upload[i].theme} to={`/zoom/${this.props.upload[i].name}.${JSON.parse(localStorage.getItem('user4'))}`}><img src={`data:image/jpeg;base64,${this.props.upload[i].img}`} alt="anh" /></Link>
                <button onClick = {(val) => this.delete(this.props.upload[i]._id)} type="button" class="btn btn-danger">Delete</button>
              </div>
            )}
          })
        }
        else if(this.props.upload === null && this.props.filter === 'all'){
          return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="anh"></img>
        }
        else if(this.props.upload !== null && this.props.filter !== null && this.props.filter !== 'all'){     
          var i = this.props.upload.length;
          return this.props.upload.map((value,key) =>{
            i--;
            if(i > 0 && this.props.upload[i].theme === this.props.filter){
          return(
            <div className="img_card" key={key}>
              <Link title={this.props.upload[i].theme} to={`/zoom/${this.props.upload[i].name}.${JSON.parse(localStorage.getItem('user4'))}`}><img src={`data:image/jpeg;base64,${this.props.upload[i].img}`} alt="anh" /></Link>
            </div>
          )}
        })
        }
        else if(this.props.upload !== null && this.props.filter !== null && this.props.filter === 'all'){     
          var i = this.props.upload.length;
          return this.props.upload.map((value,key) =>{
              if(i > 0){
              i--;
            return(
              <div className="img_card" key={key}>
                <Link title={this.props.upload[i].theme} to={`/zoom/${this.props.upload[i].name}.${JSON.parse(localStorage.getItem('user4'))}`}><img src={`data:image/jpeg;base64,${this.props.upload[i].img}`} alt="anh" /></Link>
              </div>
            )}
          })
        }
      }


    render() {
        return (
            <div>
                {/* home_picture */}
      <div className="home_picture">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="father">
               { this.set_dataupload() }
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      upload: state.upload,
      filter:state.filter
    }
  }
  
  export default connect(mapStateToProps)(Home_picture);
  
