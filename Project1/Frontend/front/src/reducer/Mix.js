import * as type from '../contact/Type'

var data = null;
const reducer = (state = data, action) => {
    switch (action.type) {
        case type.FIND:
            {
                state = action.val;
            }
            return state;
        case type.ADD:
            {
                var the  = [...state];
                the.push(action.val);
                state = the;
                alert('Add success');
            }
            return state; 
        case type.DELETE:
            {
                console.log(action.val);
                var the = [...state];
                the = the.filter(value => value._id !== action.val);
                state = the;
                alert('Delete success');
            }
                return state;
        case type.UPDATE:{
            
            var the  = [...state];
            the.forEach((value) =>{
                if(value._id === action.val._id){
                    value.author = action.val.author;
                    value.img = action.val.img;
                    value.short_text = action.val.short_text;
                    value.text = action.val.text;
                    value.theme = action.val.theme;
                    value.time = action.val.time;
                    value.title = action.val.title;
                    value._id = action.val._id;
                }
            });
            state = the;
            alert('Update success');
        }   
        return state;                           
        default:
            return state
    }
}

export default reducer;