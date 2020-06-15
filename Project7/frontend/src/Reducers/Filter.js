import * as type from '../Contact/Type';

const filter = 'all';
const reducer = (state = filter, action) => {
    switch (action.type) {
        case type.FILTER:{
            state = action.val;
        }
            return state
        default:
            return state
    }
}

export default reducer;