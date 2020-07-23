const authUserRequested = () =>{
  return {
    type: 'AUTH_USER_REQUEST'
  }
};

const authUserSuccess = (user) => {
  return {
    type: 'AUTH_USER_SUCCESS',
    payload: {
      user: {
        id: user.uid
      }
    }
  }
};

const authUserFailure = (error) => {
  return {
    type: 'AUTH_USER_FAILURE',
    payload: error
  }
};

const authUser = (dispatch) => (storeService, email, password, action) => {
  dispatch(authUserRequested());

  storeService.signInOrUp(email, password, action)
    .then( (user) => dispatch(authUserSuccess(user)))
    .catch( (error) => dispatch(authUserFailure({
      code: error.code,
      message: error.message
    })));
};

export {
  authUser,
  authUserSuccess
}
