const defaultState = {
  name: '',
  id: '',
  avatar: '',
  permissions: []
};

const userInfo = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default userInfo;
