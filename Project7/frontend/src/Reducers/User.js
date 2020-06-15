import * as type from '../Contact/Type';

const user = null;
const reducer = (state = user, action) => {
    switch (action.type) {
        case type.DATA_USER:{
            state = action.val;
        }
            return state
        default:
            return state
    }
}

export default reducer;