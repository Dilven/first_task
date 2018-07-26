import * as constants from '../constants'


export function addFlashMessage(type, text) {
  return {
    type: constants.ADD_FLASH_MESSAGE,
    payload: {
      type,
      text
    }
  };
}

export function deleteFlashMessage() {
  return {
    type: constants.DELETE_FLASH_MESSAGE
  }
}

export function displayFlashMessage(type, text) {
  return (dispatch) => {
    dispatch(addFlashMessage(type, text));
    setTimeout(() => dispatch(deleteFlashMessage()), 2000)
  }
};