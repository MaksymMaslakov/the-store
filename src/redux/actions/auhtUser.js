const authUserRequested = () =>{
  return {
    type: 'AUTH_USER_REQUEST'
  }
};

const authUserSuccess = (user) => {
  return {
    type: 'AUTH_USER_SUCCESS',
    payload: user
  }
};

const authUserFailure = (error) => {
  return {
    type: 'AUTH_USER_FAILURE',
    payload: error
  }
};

const authUser = (dispatch, storeService) => async () => {
  dispatch(authUserRequested());
  // TODO:
  return await storeService.getUser()
    .then( (user) => dispatch(authUserSuccess(user)))
    .catch( (error) => dispatch(authUserFailure(error)));
};

export default authUser;
