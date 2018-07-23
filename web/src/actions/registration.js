import * as constants from '../constants';
import { getProductsStart } from './products';


export function createUserStart () {
  return {
    type: constants.CREATE_USER_START
  };
};

export function createUserSuccess () {
  return {
    type: constants.CREATE_USER_SUCCESS
  };
};

export function createUserError () {
  return {
    type: constants.CREATE_USER_ERROR
  };
};

export function createUser (nick, firstName, password) {
  console.log(nick, firstName, password)
  return (dispatch) => {
    dispatch(getProductsStart());
  };
}