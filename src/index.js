import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider sore={createStore(reducers, {})}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

