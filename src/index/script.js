import ScrollReveal from "scrollreveal";
import Parallax from "parallax-js";
import imagesLoaded from "imagesloaded";
import "../dist/semantic/dist/components/visibility";
import "../dist/semantic/dist/components/sidebar";
import renderForm from "./components/index";

$(document).ready(() => {
    window.sr = ScrollReveal();

    imagesLoaded('.section-1', () => {
      $('#main').fadeIn(500);
      $('#preview').fadeOut(500);

      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

      const sceneOptions = { relativeInput: true };

      if (window.innerWidth > 700) {

        const scene1 = document.getElementById('scene-1');
        const parallaxInstance1 = new Parallax(scene1, sceneOptions);
    
        sr.reveal('#scene .layer img', { duration: 500, delay: 100 }, 250);
        sr.reveal('#scene .layer .chapter-2', { duration: 500, delay: 2500, origin: "bottom" });
        sr.reveal('.visuals-head .visual > img', { duration: 500, delay: 100 }, 250);
        sr.reveal('.jumbotron > *', { duration: 500, delay: 0 }, 300);
        sr.reveal('.section-2 h1', { duration: 500, delay: 200, origin: "left" }, 200);
        sr.reveal('.section-2 p', { duration: 500, delay: 300, origin: "left" });
        sr.reveal('.section-2 .image-1', { duration: 500, delay: 1000, origin: "right" });
        sr.reveal('.section-2 .image-2', { duration: 500, delay: 1200, origin: "bottom" });
        sr.reveal('.section-3 h1', { duration: 500, delay: 500, origin: "top" }, 200);
        sr.reveal('.section-3 p', { duration: 500, delay: 500, origin: "top" });
        sr.reveal('.section-4 h1', { duration: 500, delay: 200, origin: "right" }, 200);
        sr.reveal('.section-4 p', { duration: 500, delay: 500, origin: "bottom" }, 200);
        sr.reveal('.section-4 .image-1', { duration: 500, delay: 800, origin: "left" });
        sr.reveal('.section-4 .image-2', { duration: 500, delay: 500, origin: "bottom" });
        sr.reveal('.section-5 img', { duration: 500, delay: 300, origin: "bottom" }, 100);
        sr.reveal('.section-6 img', { duration: 500, delay: 300, origin: "bottom" });
        sr.reveal('.section-6 .description > *', { duration: 500, delay: 700, origin: "bottom" }, 200);
    
        $('.section-1').visibility({
          once       : false,
          continuous : true,
          onPassing  : function(calculations) {
            const offset = calculations.percentagePassed * 400;
            $('.section-2 .images .image-2').css('margin-top', offset*0.4);
            $('.section-1 .visuals-head .layer .chapter-9').css('transform', 'scale('+ ((calculations.percentagePassed/3)+1.0)  +')');
            $('.section-1 .visuals-head .layer .chapter-10').css('transform', 'scale('+ ((calculations.percentagePassed/5)+1.0)  +')');
            $('.section-1 .visuals-head .layer .chapter-11').css('transform', 'scale('+ ((calculations.percentagePassed/3)+1.0)  +')');
            $('.section-1 .visuals-head .layer .chapter-8').css('transform', 'scale('+ ((calculations.percentagePassed/1)+1.0)  +')');
            $('.section-2 .visuals-head .visual-default img').css('margin-top', offset);
            $('.section-2 .visuals-head .visual-rotation img').css('transform', 'rotate(' + offset/2 + 'deg) scale('+ offset/400 +')');
            $('.section-2 .visuals-head .visual-custom-1 img').css({'top': 400-offset});
            $('.section-2 .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-1 .section-content').css('top', -offset);
            $('.section-1 .visuals-head').css('top', -offset*1.5);
          }
        });

        let isVisible = false;
        $('.section-3 .visuals-head .visual-custom-2').css('opacity', 0);
        
        $('.section-2').visibility({
          once       : false,
          continuous : true,
          onPassing  : function(calculations) {
            const offset = calculations.percentagePassed * 400;
            $('.section-2 .images .image-2 img').css({'margin-right': offset*0.6});
            $('.section-3 .visuals-head .visual-custom-1 img').css('left', calculations.percentagePassed*40 + "%");
            $('.section-3 .visuals-head .visual-custom-5 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-2 .visuals-head .visual-custom-6 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-1 .visuals-head .visual-custom-4 img').css('transform', 'scale('+ ((calculations.percentagePassed/1)+1.0)  +')');
            $('.section-2 .section-content').css('top', -offset);
            $('.section-2 .visuals-head').css('top', -offset*1.5);
            
            if (calculations.percentagePassed > 0.7 && !isVisible) {
              $('.section-3 .visuals-head .visual-custom-1').fadeOut(500);
              $('.section-3 .visuals-head .visual-custom-2').fadeIn(500).css({opacity: 1});
              isVisible = true;
            } else if (calculations.percentagePassed < 0.7 && isVisible) {
              $('.section-3 .visuals-head .visual-custom-1').fadeIn(500);
              $('.section-3 .visuals-head .visual-custom-2').fadeOut(500);
              isVisible = false;
            }
          }
        })
    
        const scene2 = document.getElementById('scene-2');
        const parallaxInstance2 = new Parallax(scene2, sceneOptions);
    
        $('.section-3').visibility({
          once       : false,
          continuous : true,
          onPassing  : function(calculations) {
            const offset = calculations.percentagePassed * 400;
            $('.section-4 .visuals-head .visual-default img').css('left', calculations.percentagePassed*40 + "%");
            $('.section-4 .visuals-head .visual-custom-4 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-4 .images .image-2').css('margin-top', offset*0.3);
            $('.section-3 .section-content').css('top', -offset);
            $('.section-3 .visuals-head').css('top', -offset*1.5);
          },
        })
    
        const scene3 = document.getElementById('scene-3');
        const parallaxInstance3 = new Parallax(scene3, sceneOptions);
    
        $('.section-4').visibility({
          once       : false,
          continuous : true,
          onPassing  : function(calculations) {
            const offset = calculations.percentagePassed * 400;
            $('.section-5 .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-4 .images .image-1').css('margin-top', offset*0.5);
            $('.section-4 .visuals-head .visual-custom-1 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-4 .section-content').css('top', -offset);
            $('.section-4 .visuals-head').css('top', -offset*1.5);
            $('.section-5 .visuals-head .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
            $('.section-5 .visuals-head .visual-custom-3 img').css({'transform': 'scale('+ ((calculations.percentagePassed/4)+1.0)  +')'});
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
    
        const scene4 = document.getElementById('scene-4');
        const parallaxInstance4 = new Parallax(scene4, sceneOptions);
    
        $('.section-5').visibility({
          once       : false,
          continuous : true,
          onPassing  : function(calculations) {
            const offset = calculations.percentagePassed * 400;
            $('.section-5 .section-content, .section-5 .visuals-head').css('bottom', offset);
            $('.section-5 .visuals-head .visual-custom-1 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0) +')'});
            $('.section-5 .section-content').css('top', -offset);
            $('.section-5 .visuals-head').css('top', -offset*1.5);
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

        const scene5 = document.getElementById('scene-5');
        const parallaxInstance5 = new Parallax(scene5, sceneOptions);

        const scene6 = document.getElementById('scene-6');
        const parallaxInstance6 = new Parallax(scene6, sceneOptions);
      }

      const videoElement = document.createElement("video");

      videoElement.muted = true;
      videoElement.preload = true;
      videoElement.loop = true;
      videoElement.id = "primary-video"

      const webmSource = document.createElement("source");
      webmSource.src = "/static/index/video.webm";
      webmSource.type = "video/webm";

      const mp4Source = document.createElement("source");
      mp4Source.src = "/static/index/video-fallback.mp4";
      mp4Source.type = "video/mp4";

      videoElement.appendChild(webmSource);
      videoElement.appendChild(mp4Source);

      $('.section-6').visibility({
        once       : true,
        continuous : false,
        onTopPassed: function() {
          videoElement.currentTime = 0;
          videoElement.play();
        }
      })

      const videoContainer = $("#video-container");

      const imageFallback = document.createElement("img");
      imageFallback.src = "/static/index/img/section-6-chapter-1.jpg";
    
      if (window.innerWidth > 1000) {
        videoContainer.append(videoElement);
      } else {
        videoContainer.append(imageFallback);
      }

      const map = $("#map");

      map.hide();

      $("#map-expander").on("click", () => {
        map.show();
        map.fadeIn(500);
        $('html, body').animate({
          scrollTop: map.offset().top
        }, 2000);
      })

      $("#map .action-close button").on("click", () => {
        map.hide();
        map.fadeOut(500);
      })

      $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && location.hostname == this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              let $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { 
                return false;
              } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
              };
            });
          }
        }
      });
  
      renderForm();
    })
  })
;