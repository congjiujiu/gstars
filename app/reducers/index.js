// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import login from './login';

const rootReducer = combineReducers({
  counter,
  login,
  router,
});

export default rootReducer;
