import ReactDOM from "react-dom";
import React from "react";
import Form from "./Form";
import Menu from "../../commons/components/Menu";
import SidebarMenu from "../../commons/components/SidebarMenu";

const nodeContact = document.getElementById("contact");
const nodeMenu = document.getElementById("menu");
const nodeSidebarMenu = document.getElementById("sidebarMenu");

export default () => {
  ReactDOM.render(<Form />, nodeContact);
  ReactDOM.render(<Menu />, nodeMenu, () => {
    ReactDOM.render(<SidebarMenu />, nodeSidebarMenu);
  });
};