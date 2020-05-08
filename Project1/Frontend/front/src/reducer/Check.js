import * as type from '../contact/Type';

const check = {};
const reducer = (state = check, action) => {
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