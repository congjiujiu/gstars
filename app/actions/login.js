import axios from 'axios';

export const CHECK_USER = 'CHECK_USER';
export function checkUser(user) {
  return {
    type: CHECK_USER,
    user,
  };
}

export const SET_TOKEN = 'SET_TOKEN';
export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  }
}

export function login(userToken) {
  return (dispatch) => {
    return axios.get('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${userToken}`
      }
    }).then(res => res.data)
    .then(res => {
      localStorage.setItem('token', userToken);
      dispatch(checkUser(res));
      dispatch(setToken(userToken));
    });
  }
}
