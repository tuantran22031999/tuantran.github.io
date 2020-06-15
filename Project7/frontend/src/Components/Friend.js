import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../Actions/Index';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const sub = (sub) => (
  axios.post('/insert_sub',{sub})
  .then(res => res.data)
)

const un_sub = (id_sub) => (
  axios.post('/remove_sub',{id_sub})
  .then(res => res.data)
)

    class Friend extends Component {

      constructor(props) {
        super(props);
        // this.state = {
        //   check:false
        // };
      }
       

        set_dataupload = () =>{
            if(this.props.upload !== null){
              return this.props.upload.map((value,key) =>{
                if(value.id === this.props.match.params.id){
                return(
                  <div className="img_card" key={key}>
                   <Link to={`/zoom/${value.name}.${JSON.parse(localStorage.getItem('user4'))}`}><img src={`data:image/jpeg;base64,${value.img}`} alt="anh" /></Link>
                  </div>
                )}
              })
            }
            else{
              return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="anh"></img>
            }
          }

        set_user = () =>{
            if(this.props.user !== null){
              return this.props.user.map((value,key) => {
                if(value._id === this.props.match.params.id){
                  return(
                    <div className="col-xs-12 mx-auto text-center" key={key}>
                        <div className="avatar">
                  <h1>{ value.nickname.slice(0,1) }</h1>
                        </div>
                  <h3 style={{textTransform: 'uppercase'}}>{ value.nickname }</h3>
                      </div>
                  )
                }
              });
            }
          }

          set_subscribe = (val) =>{
            alert('Subscribe success');
            this.props.add_sub(val);
            sub(val);
          }

          un_subscribe = (val) =>{
            alert('Unsubscribe success');
            this.props.un_sub(val);
            un_sub(val)
          }

          check = false;

          set_check = () =>{
            if(this.props.sub !== null){
              var temp = 'sub'+this.props.match.params.id.slice(0,5)+JSON.parse(localStorage.getItem('user4')).slice(0,5);
              for(var i = 0;i < this.props.sub.length;i++){
                if(this.props.sub[i].sub_id === temp){
                  this.check = true;
                  break;
                }
              }
            }
          }


         set_sub = () =>{
           if(this.check === true){
             return(
              <li title="unsubscribe" onClick={(val) => this.un_subscribe('sub'+this.props.match.params.id.slice(0,5)+JSON.parse(localStorage.getItem('user4')).slice(0,5))} className="list_gray"><form><button type="submit"><h6>unsubscribe</h6></button></form></li>
             )
           }
           else{
            return(
              <li title="subscribe" onClick={(val) => this.set_subscribe('sub'+this.props.match.params.id.slice(0,5)+JSON.parse(localStorage.getItem('user4')).slice(0,5))} className="list_pink1"><form><button type="submit"><h6>subscribe</h6></button></form></li>
             )
           }
         } 
        render() {
          {this.set_check()}
            return (
                <div>
                      <div className="user">
        <div className="container-fluid">
          <div className="row user">
            { this.set_user() }
          </div>
          <div className="row user">
            <div className="col-xs-12 mx-auto my-3">
              <ul className="list1">
               {this.set_sub()}
              </ul>
            </div>
          </div>
           {/*  */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="father">
                 {this.set_dataupload()}
              </div>
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
          user:state.user,
          sub:state.sub
        }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add_sub: (val) => {
      dispatch(action.add_sub(val))
    },
    un_sub: (val) => {
      dispatch(action.un_sub(val))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friend);