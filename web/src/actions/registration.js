import fetch from 'isomorphic-fetch';

export function createUser (nick, firstName, password, passwordConfirmation) {
  const body = {
    firstName,
    password,
    nick,
    passwordConfirmation
  }
  return dispatch => {
    return fetch("http://localhost:7000/users", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' },
      body: JSON.stringify(body)
    })
  }
}