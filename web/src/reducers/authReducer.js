import isEmpty from 'lodash/isEmpty'
import * as constants from '../constants';
const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

  case constants.SET_CURRENT_USER:
    return {
      isAuthenticated: !isEmpty(action.payload.user),
      user: action.payload.user
    }

  default:
    return state
  }
}
