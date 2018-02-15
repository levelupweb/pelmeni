$(document).ready(function() {
    window.sr = ScrollReveal();

    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      })
    ;

    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });

    $('#buy-modal').modal();

    $(".buy-button").each(function() {
      $(this).on("click", function() {
        $('#buy-modal').modal('show');
      })
    })

    sr.reveal('.jumbotron h1', { duration: 500, delay: 0 });
    sr.reveal('.jumbotron h2', { duration: 500, delay: 500 });
    sr.reveal('.jumbotron .button', { duration: 500, delay: 1000 });

    sr.reveal('.section-2 h3', { duration: 500, delay: 200, origin: "left" });
    sr.reveal('.section-2 p', { duration: 500, delay: 300, origin: "left" });
    sr.reveal('.section-2 .image', { duration: 500, delay: 1000, origin: "right" });
    sr.reveal('.section-2 .button', { duration: 500, delay: 1300, origin: "bottom" });

    sr.reveal('.section-3 h3', { duration: 500, delay: 500, origin: "top" });
    sr.reveal('.section-3 p', { duration: 500, delay: 500, origin: "top" });
    sr.reveal('.section-3 .image', { duration: 500, delay: 200, origin: "top" });

    sr.reveal('.section-4 h3', { duration: 500, delay: 200, origin: "right" });
    sr.reveal('.section-4 p', { duration: 500, delay: 500, origin: "bottom" });
    sr.reveal('.section-4 .image', { duration: 500, delay: 1000, origin: "left" });
  })
;