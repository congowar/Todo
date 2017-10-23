import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import ReduxThunk  from 'redux-thunk';

import { Root } from './containers';

const logger = createLogger({
  collapsed: true,
  diff: true
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk , logger)
);

// include styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../app/stylesheets/app.scss';

render(
  <Root store={store} />,
  document.getElementById('app')
);