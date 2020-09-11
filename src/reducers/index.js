import { combineReducers } from 'redux';
import users from './users';
import timer from './timer';
import interval from './interval';

export default combineReducers({
    users,
    timer,
    interval
});
