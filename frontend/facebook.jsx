import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: { id: window.currentUser }
    };
  }
  const store = configureStore(preloadedState);

  //testing only
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //delete these later ^

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});