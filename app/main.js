import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import unicornApp from './reducers';

const store = createStore(unicornApp, applyMiddleware(thunk))

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>), document.getElementById('root'));
