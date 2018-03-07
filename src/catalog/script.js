import "../dist/semantic/dist/semantic.min.js";
import "../dist/semantic/dist/components/sidebar";
import "../dist/semantic/dist/components/modal";

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

  $('.ui.sidebar').sidebar('attach events', '.toc.item');
});