import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/_config/routes';
import GlobalStyle from './global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
