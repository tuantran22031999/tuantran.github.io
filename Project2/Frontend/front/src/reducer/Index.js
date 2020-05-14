import { combineReducers } from 'redux';
import user from './User';
import check from './Check';
import check1 from './Check1'
var Reducer = combineReducers({
    user,
    check,
    check1
});

export default Reducer;