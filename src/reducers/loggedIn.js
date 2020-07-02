const loggedIn = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN':
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};

export default loggedIn;
