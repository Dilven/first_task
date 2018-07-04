import * as constants from '../constants';

const initialState = {
    products: ['123123', '22'],
};

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.PRODUCTS_GET_START: 
            return {...state}
        default:
            return state;
    }
};

export default ProductsReducer;