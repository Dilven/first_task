import * as constants from '../constants';
import fetch from 'isomorphic-fetch';

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
  const body = {
    firstName,
    password,
    nick
  }
  console.log(body)
  return (dispatch) => {
    dispatch(createUserStart());
    fetch("http://localhost:7000/users", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(body)
    })
  }
}