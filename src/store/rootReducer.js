import { combineReducers } from 'redux';

import { userReducer } from "./user/userReducer";
import { categoryReducer } from './categories/categoryReducer';
import { cartItemsReducer } from './cart/cartReducer';
export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    cart: cartItemsReducer,
    
});