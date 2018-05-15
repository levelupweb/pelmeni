import "jquery";
import "../semantic/semantic/dist/semantic.min.css";
import React from 'react';
import { Provider } from "react-redux";
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages';
import store from "./store";

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
