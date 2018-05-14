import ReactDOM from "react-dom";
import React from "react";
import Menu from "../../commons/components/Menu";
import SidebarMenu from "../../commons/components/SidebarMenu";
import "../../dist/semantic/dist/semantic.min.js";
import "../../dist/semantic/dist/components/sidebar";
import "../../dist/semantic/dist/components/modal";

const nodeMenu = document.getElementById("menu");
const nodeSidebarMenu = document.getElementById("sidebarMenu");

const rendering = () => {
  ReactDOM.render(<Menu />, nodeMenu, () => {
    ReactDOM.render(<SidebarMenu />, nodeSidebarMenu);
  });
};

$(document).ready(() => {
  const modal = $('#image');
  const photos = $('.photos .photos-item img');
  
  photos.each(function (i) {
    $(this).on("click", function() {
      const url = $(this).attr("src");
      modal.find('img')[0].src = url;
      modal.modal('show');
    })
  });

  rendering();
});
