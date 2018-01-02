import { reducer as formReducer } from 'redux-form';  
import authReducer from './authReducer';
import {
    orders,
    order,
    savingOrder,
    orderToDelete
} from './orderReducer';
import {
    users,
    user,
    savingUser,
    userToDelete
} from './userReducer';
import { combineReducers } from 'redux';
import { modal } from './modalReducer';
import { alert } from './alertReducer';
const rootReducer = combineReducers({
    modal,
    alert,
    users,
    user,
    savingUser,
    userToDelete,
    orders,
    order,
    savingOrder,
    orderToDelete,
    authReducer,
    form: formReducer,
});
export default rootReducer;
