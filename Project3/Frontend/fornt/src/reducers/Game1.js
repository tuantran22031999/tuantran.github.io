import * as type from '../contact/Type';
import game1 from '../game1.json'
var data = game1;
const reducer = (state = data, action) => {
    switch (action.type) {
        case type.GAME1:{
            console.log(action.val);
        }
            return state;
        default:
            return state
    }
}
export default reducer;