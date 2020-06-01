import React, { Component } from 'react'

class Change extends Component {
    night = () =>{
        var night = document.getElementsByClassName('night');
        var body = document.getElementsByTagName('body');
           body[0].classList.add('black');
           body[0].classList.remove('white');
    }
    light = () =>{
        var light = document.getElementsByClassName('light');
        var body = document.getElementsByTagName('body');
        body[0].classList.add('white');
        body[0].classList.remove('black');
    }
    render() {
        return (
            <div>
            <div className="change_background" style={{width: '100%'}}>
              <div onClick = {this.light} className="light" title="light background" />
              <div onClick = {this.night} className="night" title="night background" />
            </div> 
            </div>
        )
    }
}
export default Change;
