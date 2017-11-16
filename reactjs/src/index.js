import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import App from './App';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer) // this is store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();