import { CHECK_USER, SET_TOKEN } from '../actions/login';

export default function login(state = {}, action) {
  switch(action.type) {
    case CHECK_USER:
      return Object.assign({}, state, {
        user: action.user
      });
    case SET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      });
    default:
      return state;
  }
}
