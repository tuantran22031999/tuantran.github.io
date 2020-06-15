import * as type from '../Contact/Type';

const sub = null;
const reducer = (state = sub, action) => {
    switch (action.type) {
        case type.SUB:{
            state = action.val;
            console.log(state);
        }
            return state
        case type.ADD_SUB:{
            state.push(action.val);
        }
            return state
        case type.UN_SUB:{
            state.filter(value => value !== action.val);
            console.log(state);
        }
            return state        
        default:
            return state
    }
}

export default reducer;