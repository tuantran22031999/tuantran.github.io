import { combineReducers } from 'redux' ;
import mix from './Mix';
import search from './Search';
import check from './Check';

const Reducer  = combineReducers({
    mix,
    search,
    check
});

export default Reducer;