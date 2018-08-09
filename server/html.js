const renderHelmet = helmet => {
	if (!helmet) {
		return "";
	}

	return `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
    `;
};

const renderScript = () => `
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

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-119402035-1"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-119402035-1');
	</script>
`;

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
					<link 
						rel="stylesheet" 
						type="text/css" 
						media="all" 
						title="normal" 
						href="${config.dist}/normalizer.css"
					>
					<link 
						rel="stylesheet" 
						type="text/css" 
						media="all" 
						title="normal" 
						href="${config.dist}/semantic.min.css"
					>
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
					${renderScript()}
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
