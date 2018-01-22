import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import App from './components/app/app';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>), document.getElementById('root'));
