import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import {authUserSuccess} from '../../redux/actions'
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

import Header from "../header";
import ProductsListingPage from "../../pages/products-listing";
import ProductCreatePage from "../../pages/product-create";
import ProductEditPage from "../../pages/product-edit";
import AuthorizationPage from "../../pages/authorization";
import NotFound from "../not-found"
import PrivateRoute from "../private-route";

import './App.css';

function App(props) {
  const { isLoggedIn } = props;
  useEffect( () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDzXG9UZMWdSIs9C0tOAqRaEZHSEqXqFDU",
      authDomain: "the-store-8740e.firebaseapp.com",
      databaseURL: "https://the-store-8740e.firebaseio.com",
      projectId: "the-store-8740e",
      storageBucket: "the-store-8740e.appspot.com",
      messagingSenderId: "942386028647",
      appId: "1:942386028647:web:61ddbc65f12a6ee19274c2",
      measurementId: "G-29MGJ98GJ8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
      props.onAuthState( user)
    })
  }, [])


  return (
    <div className="app">
      <Header isLoggedIn={ isLoggedIn }/>
      <Switch>
        <Route
          exact
          path="/auth"
          render={() => {
            if(isLoggedIn) {
              return <Redirect to='/products'/>
            }else{
              return <AuthorizationPage/>}}}
        />
        <Route
          exact
          path="/"
          render={() => {
            if(isLoggedIn) {
              return <Redirect to='/products'/>
            }else{
              return <Redirect to='/auth'/>}}}
        />
        <PrivateRoute exact path="/products" component={ProductsListingPage}/>
        <PrivateRoute exact path='/products/create' component={ProductCreatePage}/>
        <PrivateRoute exact path='/products/edit/:id' component={ProductEditPage}/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    isLoggedIn: user.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthState: ( user) => dispatch(authUserSuccess( user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
