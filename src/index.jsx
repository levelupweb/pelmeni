import "jquery";
import "../semantic/semantic/dist/semantic.min.css";
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
