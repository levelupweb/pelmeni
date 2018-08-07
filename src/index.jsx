import "jquery";
import "../semantic/semantic/dist/semantic.min.css";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";
import App from "./pages";

const root = document.getElementById("root");

render((
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
), root);
