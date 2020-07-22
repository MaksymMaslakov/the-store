import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import TheStoreContext from "./components/the-store-context";
import { StoreService } from './services';
import store from './store'

import App from './components/app';
import ErrorBoundary from "./components/error-boundary";

import 'bootstrap/dist/css/bootstrap.min.css';

const storeService = new StoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <TheStoreContext.Provider value={storeService}>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Router>
      </TheStoreContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
