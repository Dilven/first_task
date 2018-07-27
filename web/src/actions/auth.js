import axios from 'axios';
import jwt from 'jsonwebtoken'
import * as constants from '../constants';
import setAuthorizationToken from '../utils/setAuthorizationToken'


export function setCurrentUser(user) {
  return {
    type: constants.SET_CURRENT_USER,
    payload: {
      user
    }
  }
}
export function login(data) {
  return dispatch => {
    return axios.post("http://localhost:7000/auth", data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        return res.data
      })
  }
}
