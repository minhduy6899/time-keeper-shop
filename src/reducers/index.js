import { combineReducers } from 'redux';

import getAllProductsReducer from './getAllProductsReducer';
import pagiantionReducers from './pagiantionReducers';
import cartReducer from './cartReducer'
import favouriteReducer from './favouriteReducer'
import userReducer from './userReducer'
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
} from "./userReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer
} from "./orderReducer";

const rootReducer = combineReducers({
  getAllProductsReducer,
  pagiantionReducers,
  cartReducer,
  favouriteReducer,
  userReducer,
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  orderReducer,
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
});

export default rootReducer;