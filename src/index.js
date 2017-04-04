import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

import App from './App';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const persistedState = loadState();

const store = createStoreWithMiddleware(reducers, persistedState)

store.subscribe(() => {
  saveState({
    streamers: store.getState().streamers
  });
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
