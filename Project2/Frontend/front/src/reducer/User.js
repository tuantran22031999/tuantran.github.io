import * as type from '../contact/Type';
import axios from 'axios';

const user = () =>(
    axios.get('/user')
    .then(res => res.data)
)

const insert = (user,password,on) =>(
    axios.post('/insert',{user,password,on})
    .then(res => res.data)
)


var data = false;


const reducer = (state = data, action) => {
    switch (action.type) {
        case type.USER:{
            user().then((res) =>{
                var the = [...res];
                var check = false;
                for(var i = 0; i < the.length; i++){
                    if(the[i].user === action.val.user || the[i].password === action.val.password){
                        alert('user or password exist');
                        check = false;
                        break;
                    }
                    else if(the[i].user === action.val.user && the[i].password === action.val.password){
                        alert('user or password exist');
                        check = false;
                        break;
                    }
                    else{
                        check = true;
                    }
                }
                if(check === true){
                    insert(action.val.user,action.val.password,action.val.on).then((res) =>{return res});
                    alert('Sign in success');
                }
            })
        }
            return state;
        default:
            return state
    }
}

export default reducer;