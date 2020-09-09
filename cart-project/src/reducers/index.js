import {combineReducers} from 'redux';
import products from './products';
import carts from './carts';
const appReducers = combineReducers({
    products: products,
    carts: carts
})

export default appReducers;