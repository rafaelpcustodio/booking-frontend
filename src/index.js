import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/_config/routes';
import GlobalStyle from './global';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
