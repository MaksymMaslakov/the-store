import React from "react";
import {connect} from "react-redux";
import {Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(isLoggedIn) {
          return <Component {...props}/>
        }else{
          return <Redirect to='/auth'/>
        }
      }}
    />
  )
}
const mapStateToProps = ({user}) => {
  return {
    isLoggedIn: user.isLoggedIn
  }
}
export default connect(mapStateToProps)(PrivateRoute)
