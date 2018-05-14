import ReactDOM from "react-dom";
import React from "react";
import Menu from "../../commons/components/Menu";
import SidebarMenu from "../../commons/components/SidebarMenu";

const nodeMenu = document.getElementById("menu");
const nodeSidebarMenu = document.getElementById("sidebarMenu");

const rendering = () => {
  ReactDOM.render(<Menu />, nodeMenu, () => {
    ReactDOM.render(<SidebarMenu />, nodeSidebarMenu);
  });
};

$(document).ready(() => {
  rendering();
});