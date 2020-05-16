import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const user = () =>(
    axios.get('/user')
    .then(res => res.data)
)

const profile = () =>(
    axios.get('/profile')
    .then(res => res.data)
)

const res = (reset) =>(
    axios.post('/reset',{reset})
    .then(res => res.data)
)
  

class Reset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maid:"",
            key:"",
            new:"",
            new_confirm:"",
            arr:[],
            arr1:[],
            but:false
        };
    }

    componentWillMount() {
        if(this.state.arr = []){
          user().then((res) =>{
            this.setState({
              arr:res
            });
          });
        }
        if(this.state.arr1 = []){
          profile().then((res) =>{
            this.setState({
              arr1:res
            });
          });
        }
      }
     

    get = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    set = (val) =>{
        if(this.state.arr !== [] && this.state.arr1 !== []){

            var data = this.state.arr;
            var data1 = this.state.arr1;
            var test = false;
            var check1 = false;
            var check = false;
            for(var i = 0;i < data1.length;i++){
                if(data1[i].key === val.key){
                    test = true;
                    val.maid = data1[i].maid;
                    this.setState({
                        maid:data1[i].maid
                    });
                    break;
                }
                else{
                    test = false;
                }
            }
            if(test === true){
                for(var i = 0;i < data.length;i++){
                    if(val.new === val.new_confirm && data[i]._id === val.maid && val.new.length >= 8 && val.new !== ""){                     
                        check1 = true;
                        break;
                    }
                    else{
                        check1 = false;
                    }
                }
            }
            else{
                alert('key false');
                return false;
            }


            if(check1 === true){
                for(var i = 0;i < data.length ; i++){
                    if(data[i].password === val.new){
                        check = false;
                        break;
                    }
                    else{
                        check = true;
                    }
                }
            }
            else{
                alert('confirm false or password < 8 or password empty');
                return false;
            }

            if(check === true){
                res(val);
                this.setState({
                    but:true
                });
            }
            else{
                alert('password exist');
                return false;
            }
        }
    }

    keycode = (e) =>{
        if(e.key === 'Enter'){
          this.set(this.state);
        }
      }

    render() {
        if(this.state.but === true){
            alert('Reset success');
            return <Redirect to="/login"></Redirect>
        }

        return (
            <div>
                <div className="container pt-5">
                <h1 className="text-white text-center pt-5" style={{textTransform:"uppercase"}}>Reset</h1>
                    <div className="row pt-3">
                        <div className="col-md-4 col-sm-12 mx-auto">
                            <form>
                                <div className="form-group">
                                  <label htmlFor="key">Key</label>
                                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="key" className="form-control" type="password" name="key" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="new">New password</label>
                                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="new" className="form-control" type="password" name="new" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="new_confirm">Confirm</label>
                                  <input onKeyPress = {(e) => this/this.keycode(e)} onChange = {(e) => this.get(e)} id="new_confirm" className="form-control" type="password" name="new_confirm" />
                                </div>
                                <button onKeyPress = {(e) => this/this.keycode(e)} onClick = {(val) => this.set(this.state)} type="button" className="btn btn-block btn-danger">Reset</button>       
                            </form>
                            <div className="text-center mt-3"><a href="/">Back home</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset;
