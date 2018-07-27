import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    flashMessages: flashMessagesReducer,
    auth: authReducer
});

export default rootReducer;