import ReactDOM from "react-dom";
import React from "react";
import Shop from "./Shop";
import SidebarMenu from "../../commons/components/SidebarMenu";

const nodeShop = document.getElementById('shop');
const nodeSidebarMenu = document.getElementById('sidebarMenu');

export default () => {
  ReactDOM.render(<Shop />, nodeShop, () => {
    ReactDOM.render(<SidebarMenu />, nodeSidebarMenu)
  })
  
}