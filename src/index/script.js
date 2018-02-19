import ScrollReveal from "scrollreveal";
import Parallax from "parallax-js";
import imagesLoaded from "imagesloaded";
import "../dist/semantic/dist/components/visibility";
import renderForm from "./components/index";

$(document).ready(() => {
    window.sr = ScrollReveal();

    imagesLoaded('.section-1', () => {
      $('#main').fadeIn(500);
      $('#preview').fadeOut(500);

      const sceneOptions = { relativeInput: true };

      const scene = document.getElementById('scene');
      const parallaxInstance1 = new Parallax(scene, sceneOptions);
  
      sr.reveal('#scene .layer img', { duration: 500, delay: 100 }, 250);
      sr.reveal('#scene .layer .chapter-2', { duration: 500, delay: 2500, origin: "bottom" });
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
      sr.reveal('.section-6 img', { duration: 500, delay: 300, origin: "bottom" });
      sr.reveal('.section-6 .description > *', { duration: 500, delay: 700, origin: "bottom" }, 200);
  
      $('.section-1').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-1 .visuals-head .layer .chapter-9').css('transform', 'scale('+ (calculations.percentagePassed+0.8) +')');
          $('.section-2 .visuals-head .visual-default img').css('margin-top', offset);
          $('.section-2 .visuals-head .visual-rotation .geometry').css('transform', 'rotate(' + offset/4 + 'deg) scale('+ offset/400 +')');
          $('.section-2 .visuals-head .visual-custom-1 img').css({'top': 400-offset, 'opacity': calculations.percentagePassed});
          $('.section-2 .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')',  'opacity': calculations.percentagePassed});
          $('.section-1 .section-content, .section-1 .visuals-head').css('bottom', offset);
        }
      });
  
      $('.section-2').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-2 .images .image-2').css('margin-top', offset*1.5);
          $('.section-2 .images .image-2 img').css({'margin-right': offset*0.6, 'opacity': 1-calculations.percentagePassed});
          $('.section-3 .visuals-head .visual-custom-1 img, .section-3 .visuals-head .visual-custom-2 img').css('left', calculations.percentagePassed*40 + "%");
          $('.section-3 .visuals-head .visual-custom-5 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')'});
          $('.section-2 .visuals-head .visual-custom-6 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')'});
          $('.section-2 .section-content').css('bottom', offset);
        }
      })
  
      var scene2 = document.getElementById('scene-2');
      var parallaxInstance2 = new Parallax(scene2, sceneOptions);
  
      $('.section-3').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-4 .visuals-head .visual-default img').css('left', calculations.percentagePassed*40 + "%");
          $('.section-4 .visuals-head .visual-custom-4 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')'});
          $('.section-4 .images .image-2').css('margin-top', offset*0.3);
          $('.section-3 .section-content').css('bottom', offset);
        },
        onBottomVisible: function() {
          $('.section-3 .visuals-head .visual-custom-1 img').addClass('hidden');
          $('.section-3 .visuals-head .visual-custom-2 img').removeClass('hidden');
        },
        onTopVisible: function() {
          $('.section-3 .visuals-head .visual-custom-1 img').removeClass('hidden');
          $('.section-3 .visuals-head .visual-custom-2 img').addClass('hidden');
        }
      })
  
      var scene3 = document.getElementById('scene-3');
      var parallaxInstance3 = new Parallax(scene3, sceneOptions);
  
      $('.section-4').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-5 .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')'});
          $('.section-4 .images .image-1').css('margin-top', offset*0.5);
          $('.section-4 .section-content').css('bottom', offset);
        },
        onBottomVisible: function() {
          $('.section-4 .images .image-1-1').addClass('hidden');
          $('.section-4 .images .image-1-2').removeClass('hidden');
        },
        onTopVisible: function() {
          $('.section-4 .images .image-1-1').removeClass('hidden');
          $('.section-4 .images .image-1-2').addClass('hidden');
        }
      })
  
      var scene4 = document.getElementById('scene-4');
      var parallaxInstance4 = new Parallax(scene4, sceneOptions);
  
      $('.section-5').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-5 .section-content, .section-5 .visuals-head').css('bottom', offset);
        },
        onBottomVisible: function() {
          $('.section-5 .images .image-1 > *').removeClass('visible');
          $('.section-5 .images .image-1 .image-1-3').addClass('visible');
        },
        onTopVisible: function() {
          $('.section-5 .images .image-1 > *').removeClass('visible');
          $('.section-5 .images .image-1 .image-1-2').addClass('visible');
        }
      })

      $('.section-6').visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          const offset = calculations.percentagePassed * 400;
          $('.section-contact .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ (calculations.percentagePassed+0.5) +')'});
        },
      })
  
      var scene5 = document.getElementById('scene-5');
      var parallaxInstance5 = new Parallax(scene5, sceneOptions);

      var scene6 = document.getElementById('scene-6');
      var parallaxInstance6 = new Parallax(scene6, sceneOptions);
  
      renderForm();
    })

  })
;