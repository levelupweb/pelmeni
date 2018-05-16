const document = (html, config, helmet) => 
`<!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#ffffff" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" rel="stylesheet">
    <link rel="shortcut icon" href="${config.dist}/favicon.ico" />
    <meta name="keywords" content="Купить пельмени, пельмени Классные, Костромские пельмени Классные, доставка пельменей, заказать пельмени" />
    <meta name="author" content="Пельмени Классные" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="1 days" />
    <meta property="og:locale" content="ru_RU">
    <meta property="og:image:width" content="537">
    <meta property="og:site_name" content="Пельмени Классные" />
    <meta property="og:title" content="Пельмени Классные" />
    <meta property="og:description" content="Пельмени Классные. Онлайн-доставка пельменей" />
    <meta property="og:image:height" content="240">
    
  </head>
  <body>
    <noscript>
      ${html}
    </noscript>
    <div id="root"></div>
    <script type="text/javascript" >
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter48895697 = new Ya.Metrika({
                        id:48895697,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                    });
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/48895697" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <script src="${config.dist}/app.index.js"></script>
  </body>
</html>
`
module.exports = document;