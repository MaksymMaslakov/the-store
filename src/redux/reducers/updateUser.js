const updateUser = (state, action) => {
  if(state === undefined){
    return {
      isLoggedIn: false,
      name: '',
      picture: '',
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_USER_REQUEST') {
    return {
      isLoggedIn: false,
      name: '',
      picture: '',
      isFetching: true,
      error: null
    };
  }

  if(action.type === 'FETCH_USER_SUCCESS') {
    return {
      isLoggedIn: true,
      name: action.payload.name,
      picture: action.payload.picture,
      isFetching: false,
      error: null
    };
  }

  if(action.type === 'FETCH_USER_FAILURE') {
    return {
      isLoggedIn: false,
      name: '',
      picture: '',
      isFetching: false,
      error: action.payload
    };
  }

  return state.user;
};

export default updateUser;
