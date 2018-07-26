import * as constants from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case constants.ADD_FLASH_MESSAGE:
      return [
        {
          type: action.payload.type,
          text: action.payload.text
        }
      ]
    case constants.DELETE_FLASH_MESSAGE:
      const message = state.splice(0,-1);
      return [...message]
    default:
      return state;
  }
}