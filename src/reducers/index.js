import { combineReducers } from 'redux';
import userInfo from './userInfo';
import loggedIn from './loggedIn';

export default combineReducers({
  userInfo,
  loggedIn
});
