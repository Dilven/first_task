import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import registrationReducer from './registrationReducer';


const rootReducer = combineReducers({
    products: productsReducer,
    register: registrationReducer
});

export default rootReducer;