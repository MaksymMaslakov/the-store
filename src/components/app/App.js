import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from "../header";
import ProductsListingPage from "../../pages/products-listing";
import ProductCreatePage from "../../pages/product-create";
import ProductEditPage from "../../pages/product-edit";
import AuthorizationPage from "../../pages/authorization";

import './App.css';

function App() {
  const isLoggedIn = true;

  return (
    <div className="app">
      <Header isLoggedIn={ true }/>
      <Switch>
        <Route path='/auth'
               component={ AuthorizationPage }
               exact/>
        <Route path='/products'
               render={() => {
                 if(isLoggedIn) {
                   return <ProductsListingPage/>
                 }else{
                   return <Redirect to='/auth'/>
                 }
               }}
               exact/>
        <Route path='/products/create'
               render={() => {
                 if(isLoggedIn) {
                   return <ProductCreatePage/>
                 }else{
                   return <Redirect to='/auth'/>
                 }
               }}
               exact/>
        <Route path='/products/edit/:id'
               render={() => {
                 if(isLoggedIn) {
                   return <ProductEditPage/>
                 }else{
                   return <Redirect to='/auth'/>
                 }
               }}
               exact/>
        <Route component={ ErrorIndicator }  />
      </Switch>
    </div>
  );
}

export default App;
