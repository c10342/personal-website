import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import initHtmlFontSize from "./assets/js/htmlFontSize";
import './assets/css/style.scss';
import './assets/icon-font/iconfont.css'
import App from './App';

initHtmlFontSize();

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);