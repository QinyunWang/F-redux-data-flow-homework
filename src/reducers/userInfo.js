const defaultState = {
  loggedIn: false,
  userInfo: {
    name: '',
    id: '',
    avatar: '',
    permissions: []
  }
};

const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USER_INFO':
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default userInfo;
