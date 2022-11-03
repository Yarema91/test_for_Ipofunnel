import { combineReducers } from 'redux';
import users from './users';
import shop from './shop';
import orders from './orders';


export default combineReducers({
    users,
    shop,
    orders
})