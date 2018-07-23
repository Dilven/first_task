import * as constants from '../constants';

const initialState = {
  isLoading: false,
  isError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case constants.CREATE_USER_START:
    return { ...state, isLoading: true };
  case constants.CREATE_USER_ERROR:
    return { ...state, isError: true, isLoading: false };
  case constants.CREATE_USER_SUCCESS:
    return { ...state, isError: false, isLoading: false };
  default:
    return state
  }
}
