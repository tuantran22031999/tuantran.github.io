import { combineReducers } from 'redux';
import user from './User';
import check from './Check'
var Reducer = combineReducers({
    user,
    check
});

export default Reducer;