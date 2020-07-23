const updateUser = (state, action) => {
  if(state === undefined){
    return {
      user: null,
      isLoggedIn: false,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'LOGOUT_USER') {
    return {
      user: null,
      isLoggedIn: false,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'AUTH_USER_REQUEST') {
    return {
      user: null,
      isLoggedIn: false,
      isFetching: true,
      error: null
    };
  }

  if(action.type === 'AUTH_USER_SUCCESS') {
    return {
      user: action.payload.user,
      isLoggedIn: true,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'AUTH_USER_FAILURE') {
    return {
      user: null,
      isLoggedIn: false,
      isFetching: false,
      error: action.payload
    };
  }

  return state.user;
};

export default updateUser;
