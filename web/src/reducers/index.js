import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    flashMessages: flashMessagesReducer
});

export default rootReducer;