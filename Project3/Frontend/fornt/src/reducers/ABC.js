import * as type from '../contact/Type';

var data = null;
const reducer = (state = data, action) => {
    switch (action.type) {
        case type.GET_ABC:
            return state;
        default:
            return state
    }
}
export default reducer;