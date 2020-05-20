import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,Link
  } from "react-router-dom";

class Result extends Component {

    data_transmission = () =>{
        if(this.props.data !== null){
            return this.props.data.map((value,key) => {
                return(
                    <div className="col-md-8 mt-5 col-xs-12 text-center mx-auto" key={key}>
                    <img className="ml-5 mr-2" src={value.img} alt="anh" width="529" height="220"/>
                    {this.check(value.test)}
                    <h6 className="mt-3">Key : {value.value}</h6>
                  </div>
                )
            })
        }
    }

    check = (val) =>{
        if(val === true){
            return(<img src="https://www.freepngimg.com/download/ok/9-2-ok-png-images.png" alt="anh" width="50px" height="50px"></img>)
        }
        else{
            return(<img src="https://i.ya-webdesign.com/images/yes-no-button-png-8.png" alt="anh" width="50px" height="50px"></img>)  
        }
    }

    on = 0;
    off = 0;
    count = () =>{
        if(this.props.data !== null){
            this.props.data.map((value,key) =>{
                key={key};
                if(value.test === true){
                    this.on++;
                }
                else{
                    this.off++;
                }
            });
            return(
            <div>
               <div id="True" className="text-success">{`True : ${this.on}/${this.props.data.length}`}</div>  
               <div id="false" className="text-danger">{`False : ${this.off}/${this.props.data.length}`}</div> 
            </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="table">
                   <div id="total" className="text-white">{`Total : ${this.props.data.length}/${this.props.data.length}`}</div> 
                   { this.count()}
                </div>
                <div className="container">
                    <div className="row game">
                      {this.data_transmission()}
                      <div className="col-md-6 mt-5 col-xs-12 text-center mx-auto">
                      <Link to="/" className="btn btn-block btn-primary">Back</Link>
                  </div>
                    </div>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.game1
    }
}

export default connect(mapStateToProps)(Result)
