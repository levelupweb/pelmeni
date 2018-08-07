const renderHelmet = helmet => {
  if (!helmet) {
    return "";
  }

  return `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    `;
};

const document = (config, html, helmet) =>
  `<!DOCTYPE html>
	<html lang="ru">
			<head>
					<meta 
							charset="utf-8" 
					/>
					<meta 
							name="viewport" 
							content="width=device-width, initial-scale=1, shrink-to-fit=no" 
					/>
					<meta 
							name="yandex-verification" 
							content="3ae891b4751b75eb" 
					/>
					<meta 
							name="theme-color" 
							content="#ffffff" 
					/>
					<link 
							href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700" 
							rel="stylesheet"
					/>
					<link 
							rel="shortcut icon" href="${config.dist}/favicon.ico" 
					/>
					<meta 
							name="keywords" 
							content="Купить пельмени, пельмени Классные, Костромские пельмени Классные, доставка пельменей, заказать пельмени" 
					/>
					<meta 
							name="author" 
							content="Пельмени Классные" 
					/>
					<meta 
							name="robots" 
							content="index, follow" 
					/>
					<meta 
							name="revisit-after" 
							content="1 days" 
					/>
					<meta 
							property="og:locale" 
							content="ru_RU"
					/>
					<meta 
							property="og:image:width" content="537"
					/>
					<meta 
							property="og:site_name" 
							content="Пельмени Классные" 
					/>
					<meta 
							property="og:title" 
							content="Пельмени Классные" 
					/>
					<meta 
							property="og:description" 
							content="Пельмени Классные. Онлайн-доставка пельменей" 
					/>
					<meta 
							property="og:image:height" 
							content="240"
					/>
					<title>
							Пельмени классные. Замороженные полуфабрикаты с доставкой на дом.
					</title>
					${renderHelmet(helmet)}
			</head>
			<body>
					<noscript>
							${html || "Для просмотра требуется активация Javascript"}
					</noscript>
					<div id="root">
					</div>
					<script type="text/javascript">
							window.siteConfig = ${JSON.stringify(config)}
					</script>
					<script 
							type="text/javascript" 
							src="${config.dist}/app.index.js"
					></script>
			</body>
	</html>
`;

module.exports = document;
