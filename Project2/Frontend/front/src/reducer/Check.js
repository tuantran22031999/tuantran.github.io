import* as type from '../contact/Type';

const data = {};
const reducer = (state = data, action) => {
    switch (action.type) {
        case type.CHECK:{
            state = action.val;
        }
            return state
        default:
            return state
    }
}

export default reducer;
