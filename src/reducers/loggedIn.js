const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return action.payload;
    default:
      return state;
  }
};

export default loggedIn;
