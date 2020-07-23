import { createStore } from 'redux';
// import persistState from 'redux-localstorage'

import reducer from './redux/reducers';

// const enhancer = persistState();
const store = createStore(reducer/*, undefined, enhancer*/);

export default store;
