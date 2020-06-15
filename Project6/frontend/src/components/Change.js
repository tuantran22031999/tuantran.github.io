import React, { Component } from 'react';
import axios from 'axios';

const color = () =>(
    axios.get('/color')
    .then(res => res.data)
)

  const change_color = (col) =>(
    axios.post('/change_color',{col})
    .then(res => res.data)
  )  

class Change extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color:null
        };
    }
     

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {

        if(this.state.color === null){
            color().then((res) => {
                this.setState({
                    color:res
                });
            })
        }
    }

    night = () =>{
        var body = document.getElementsByTagName('body');
           body[0].classList.add('black');
           body[0].classList.remove('white');
           change_color('black');
    }
    light = () =>{
        var body = document.getElementsByTagName('body');
        body[0].classList.add('white');
        body[0].classList.remove('black');
        change_color('white');
    }
    change = () =>{
        if(this.state.color !== null){
            if(this.state.color[0].col === 'white'){
                var body = document.getElementsByTagName('body');
                body[0].classList.add('white');
                body[0].classList.remove('black');
                console.log('white');
            }
            else if(this.state.color[0].col === 'black'){
                var body = document.getElementsByTagName('body');
                body[0].classList.add('black');
                body[0].classList.remove('white');
                console.log('black');
            }
        }
    }
    render() {
        return (
            <div>
                {
                    this.change()
                }
            <div className="change_background" style={{width: '100%'}}>
              <div onClick = {this.light} className="light" title="light background" />
              <div onClick = {this.night} className="night" title="night background" />
            </div> 
            </div>
        )
    }
}
export default Change;
