import React from 'react';
import ReactDOM from 'react-dom';
// must wrap app with Provider from Redux, takes in store file
import { Provider } from 'react-redux';
import store from './store'

import './lux-bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
