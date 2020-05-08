import * as type from '../contact/Type'

const search = [];
const reducer = (state = search, action) => {
    switch (action.type) {
        case type.SEARCH:{
            state = action.val;
            console.log(state);
        }
            return state
        default:
            return state
    }
}

export default reducer;