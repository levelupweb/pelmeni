import Parallax from "parallax-js";
import renderApp from "./components/index";

const options = { relativeInput: true };

$(document).ready(() => {
  const scene = document.getElementById('scene');
  const parallaxInstance = new Parallax(scene, options);
  renderApp();
});