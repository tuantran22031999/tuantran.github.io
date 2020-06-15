import { combineReducers } from 'redux';
import user from './User';
import upload from './Upload';
import filter from './Filter';
import sub from './Sub';

const Reducer = combineReducers({
    user,
    upload,
    filter,
    sub
});

export default Reducer;