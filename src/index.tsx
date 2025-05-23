import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

import 'normalize.css';
import './assets/css/index.less';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
