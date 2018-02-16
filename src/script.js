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

    sr.reveal('#scene .layer img', { duration: 500, delay: 100 }, 250);
    sr.reveal('.section-1 .menu', { duration: 500, delay: 2000, origin: "top" });

    sr.reveal('.jumbotron h1', { duration: 500, delay: 0 });
    sr.reveal('.jumbotron h2', { duration: 500, delay: 500 });
    sr.reveal('.jumbotron .button', { duration: 500, delay: 1000 });

    sr.reveal('.section-2 h1', { duration: 500, delay: 200, origin: "left" }, 200);
    sr.reveal('.section-2 p', { duration: 500, delay: 300, origin: "left" });
    sr.reveal('.section-2 .image-1', { duration: 500, delay: 1000, origin: "right" });
    sr.reveal('.section-2 .image-2', { duration: 500, delay: 1200, origin: "bottom" });
    sr.reveal('.section-2 .description', { duration: 500, delay: 1300, origin: "bottom" });
    sr.reveal('.section-2 .button', { duration: 500, delay: 1300, origin: "bottom" });

    sr.reveal('.section-3 h1', { duration: 500, delay: 500, origin: "top" }, 200);
    sr.reveal('.section-3 p', { duration: 500, delay: 500, origin: "top" });
    sr.reveal('.section-3 .image', { duration: 500, delay: 200, origin: "top" });

    sr.reveal('.section-4 h1', { duration: 500, delay: 200, origin: "right" }, 200);
    sr.reveal('.section-4 p', { duration: 500, delay: 500, origin: "bottom" }, 200);
    sr.reveal('.section-4 .image-1', { duration: 500, delay: 800, origin: "left" });
    sr.reveal('.section-4 .image-2', { duration: 500, delay: 1000, origin: "bottom" });

    sr.reveal('.section-5 img', { duration: 500, delay: 300, origin: "bottom" }, 100);

    $('.section-1').visibility({
      once       : false,
      continuous : true,
      onPassing  : function(calculations) {
        const offset = calculations.percentagePassed * 400;
        $('.section-2 .visuals-head .visual-default').css('margin-top', offset);
        $('.section-2 .visuals-head .visual-rotation').css('transform', 'rotate(' + offset/4 + 'deg) scale('+ offset/200 +')');
        $('.section-2 .visuals-head .visual-custom-1').css({'margin-left': offset, 'opacity': calculations.percentagePassed, 'transform': 'rotate(' + offset/4 + 'deg) scale('+ offset/380 +')'});
      }
    });

    $('.section-2').visibility({
      once       : false,
      continuous : true,
      onPassing  : function(calculations) {
        const offset = calculations.percentagePassed * 400;
        $('.section-2 .images .image-2').css('margin-top', offset*1.5);
        $('.section-2 .images .image-2').css('margin-right', offset*0.6);
        $('.section-3 .visuals-head .visual-custom-1').css('margin-left', calculations.percentagePassed*50 + "%");
      }
    })

      $('.section-3').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          //const offset = calculations.percentagePassed * 400;
          $('.section-3 .visuals-head .visual-custom-1').css('left', calculations.percentagePassed*100 + "%");
          // $('.section-2 .images .image-2').css('margin-right', offset*0.6);
        }
    })
  })
;