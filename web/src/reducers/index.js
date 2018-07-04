import { combineReducers } from 'redux';
import productsReducer from './ProductsReducer';

const rootReducer = combineReducers({
    products: productsReducer
});

export default rootReducer;