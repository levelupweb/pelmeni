import "jquery";
import Parallax from "parallax-js";
import imagesLoaded from "imagesloaded";
import "../../../../semantic/semantic/dist/components/visibility";

export default () => {
  const sceneOptions = { relativeInput: true };

  const visibilityOptions = {
    once: false,
    continuous: true,
  }


  if (window.innerWidth > 700) {

    const scene1 = document.getElementById('scene-1');
    const parallaxInstance1 = new Parallax(scene1, sceneOptions);

    $('.section-1').visibility(Object.assign({}, visibilityOptions, {
      onPassing: (calculations) => {
        const offset = calculations.percentagePassed * 400;
        $('.visuals-2 .images .image-2').css('margin-top', offset*0.4);
        $('.visuals-2 .visual-rotation img').css('transform', 'rotate(' + offset/2 + 'deg) scale('+ offset/400 +')');
        $('.visuals-2 .visual-custom-1 img').css({'top': 400-offset});
        $('.visuals-2 .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
      }
    }));

    let isVisible = false;
    $('.visuals-3 .visual-custom-2').css('opacity', 0);
    
    $('.section-2').visibility(Object.assign({}, visibilityOptions, {
      onPassing: (calculations) => {
        const offset = calculations.percentagePassed * 400;
        $('.section-2 .images .image-2 img').css({'margin-right': offset*0.6});
        $('.visuals-3 .visual-custom-1 img').css('left', calculations.percentagePassed*40 + "%");
        $('.visuals-3 .visual-custom-5 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-2 .visual-custom-6 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-1 .visual-custom-4 img').css('transform', 'scale('+ ((calculations.percentagePassed/1)+1.0)  +')');
        
        if (calculations.percentagePassed > 0.7 && !isVisible) {
          $('.visuals-3 .visual-custom-1 img').attr("src", require("./img/section-3-chapter-2.jpg"));
          isVisible = true;
        } else if (calculations.percentagePassed < 0.7 && isVisible) {
          $('.visuals-3 .visual-custom-1 img').attr("src", require("./img/section-3-chapter-1.jpg"));
          isVisible = false;
        }
      }
    }));

    const scene2 = document.getElementById('scene-2');
    const parallaxInstance2 = new Parallax(scene2, sceneOptions);

    $('.section-3').visibility(Object.assign({}, visibilityOptions, {
      onPassing: (calculations) => {
        const offset = calculations.percentagePassed * 400;
        $('.visuals-4 .visual-default img').css('left', calculations.percentagePassed*40 + "%");
        $('.visuals-4 .visual-custom-4 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-4 .images .image-2').css('margin-top', offset*0.3);
      },
    }));

    const scene3 = document.getElementById('scene-3');
    const parallaxInstance3 = new Parallax(scene3, sceneOptions);

    $('.section-4').visibility(Object.assign({}, visibilityOptions, {
      onPassing: (calculations) => {
        const offset = calculations.percentagePassed * 400;
        $('.visuals-5 .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-4 .images .image-1').css('margin-top', offset*0.5);
        $('.visuals-4 .visual-custom-1 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-5 .visual-custom-2 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0)  +')'});
        $('.visuals-5 .visual-custom-3 img').css({'transform': 'scale('+ ((calculations.percentagePassed/4)+1.0)  +')'});
      },
    }));

    const scene4 = document.getElementById('scene-4');
    const parallaxInstance4 = new Parallax(scene4, sceneOptions);

    $('.section-4').visibility(Object.assign({}, visibilityOptions, {
      onPassing: (calculations) => {
        const offset = calculations.percentagePassed * 400;
        $('.visuals-5 .visual-custom-1 img').css({'transform': 'scale('+ ((calculations.percentagePassed/2)+1.0) +')'});
      },
    }));

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
  webmSource.src = require("./video/video.webm");
  webmSource.type = "video/webm";

  const mp4Source = document.createElement("source");
  mp4Source.src = require("./video/video-fallback.mp4");
  mp4Source.type = "video/mp4";

  videoElement.appendChild(webmSource);
  videoElement.appendChild(mp4Source);

  $('.section-6').visibility(Object.assign({}, visibilityOptions, {
    onTopPassed: () => {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }));

  const videoContainer = $("#video-container");

  const imageFallback = document.createElement("img");
  imageFallback.src = require("./img/section-6-chapter-1.jpg");

  if (window.innerWidth > 1000) {
    videoContainer.append(videoElement);
  } else {
    videoContainer.append(imageFallback);
  }
}