import {combineReducers} from 'redux';
import { cartReducer } from './cart/reducer';
import { productListReducer } from './products/reducer';


const reducer = combineReducers({
    prouducts: productListReducer,
    cart:cartReducer
});

export default reducer;