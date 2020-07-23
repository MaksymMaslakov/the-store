const logoutUser = (service) => {
  service.logout()
  return { type: 'LOGOUT_USER' }
}

export default logoutUser
