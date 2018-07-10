import * as constants from '../constants';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  totalProducts: 0,
  took: 0,
  numberProductsToDisplay: 0
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.PRODUCTS_GET_START:
      return { ...state, isLoading: true }
    case constants.PRODUCTS_GET_SUCCESS:
      return { ...state, isLoading: false, products: action.payload.data, totalProducts: action.payload.total, took: action.payload.took, numberProductsToDisplay: action.payload.numberProductsToDisplay }
    case constants.PRODUCTS_GET_ERROR:
      return { ...state, isLoading: false, isError: true }
    default:
      return state;
  }
};