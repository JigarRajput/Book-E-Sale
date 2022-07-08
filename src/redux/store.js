import { combineReducers, createStore } from 'redux';
import cartReducer2 from './reducers/cartReducer2';
import loginReducer from './reducers/loginReducer';
import productReducer from './reducers/productReducer';
import searchReducer from './reducers/searchReducer';
import sortReducer from './reducers/sortReducer';
const store = createStore(combineReducers({
    cart: cartReducer2,
    search: searchReducer,
    products: productReducer,
    sort: sortReducer,
    login: loginReducer
}))

export default store;