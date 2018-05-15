const document = (html, config, helmet) => 
`<!DOCTYPE html>
  <html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="theme-color" content="#ffffff" />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
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
    <script src="${config.dist}/app.index.js"></script>
  </body>
</html>
`
module.exports = document;