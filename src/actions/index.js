import loggedIn from '../reducers/loggedIn';

export const setUserInfo = info => ({
  type: 'SET_USER_INFO',
  payload: info
});

export const setLoggedIn = loggedIn => ({
  type: 'SET_LOGGED_IN',
  payload: loggedIn
});
