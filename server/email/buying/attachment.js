const {
	PURCHASE_ITEMS,
	PURCHASE_PROMO,
	PURCHASE_ITEMS_ITEM,
	PURCHASE_ITEMS_AMOUNT,
	PURCHASE_USER
} = require("../../models/Purchase/consts");

const { PROMO_CODE, PROMO_DISCOUNT } = require("../../models/Promo/consts");

const {
	ITEM_PRICE,
	ITEM_WEIGHT,
	ITEM_CATEGORY
} = require("../../models/Item/consts");

const { CATEGORY_TITLE } = require("../../models/Category/consts");

const {
	USER_NAME,
	USER_DOSTAVKA,
	USER_EMAIL,
	USER_MESSAGE,
	USER_PHONE
} = require("../../models/User/consts");

const mapItems = purchasedItems =>
	purchasedItems.reduce(
		(prev, curr) =>
			prev +
			`<li>${curr.item[ITEM_CATEGORY][CATEGORY_TITLE]} (Кол-во: ${
				curr.amount
			}, Вес за шт.: ${curr.item[ITEM_WEIGHT]})</li>`,
		""
	);

const getFinalTotal = data => {
	const total = data[PURCHASE_ITEMS].reduce(
		(prev, curr) =>
			prev +
			curr[PURCHASE_ITEMS_ITEM][ITEM_PRICE] * curr[PURCHASE_ITEMS_AMOUNT],
		0
	);

	if (data[PURCHASE_PROMO] && data[PURCHASE_PROMO][PROMO_DISCOUNT]) {
		return Math.ceil(
			(total / 100) * (100 - data[PURCHASE_PROMO][PROMO_DISCOUNT])
		);
	}

	return total;
};

const renderPrice = data =>
	`<p style="font-size: 25px">
    К оплате: ${getFinalTotal(data)} руб. ${
	data[PURCHASE_PROMO] ? "(с учетом скидки)" : ""
}
</p>`;

const renderDiscount = data => {
	if (data[PURCHASE_PROMO]) {
		return `
    <p style="font-size: 20px">
Был активирован промо-код: ${data[PURCHASE_PROMO][PROMO_CODE]}
<span style="font-size:16px">
  Скидка составила ${data[PURCHASE_PROMO][PROMO_DISCOUNT]} %
</span>
</p>`;
	}

	return "";
};

const renderItems = data => `
  <ul>
    ${mapItems(data[PURCHASE_ITEMS])}
  </ul>
`;

const renderUser = data => `
<ul>
                            <li>Имя клиента: ${data[PURCHASE_USER][USER_NAME] ||
															"Не указано"}</li>
                            <li>E-mail: ${data[PURCHASE_USER][USER_EMAIL] ||
															"Не указан"}</li>
                            <li>Номер телефона: ${data[PURCHASE_USER][
		USER_PHONE
	] || "Не указан"}</li>
                            <li>Адрес доставки: ${data[PURCHASE_USER][
		USER_DOSTAVKA
	] || "Не указано"}</li>
                            <li>Комментарий: ${data[PURCHASE_USER][
		USER_MESSAGE
	] || "Не указано"}</li>
                        </ul>`;

module.exports = data => [
	{
		data: `
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Новый заказ с сайта Klassnye.com</title>
        </head>
        <body style="margin:0; padding:0; background-color:#F2F2F2;font-family: Arial, Helvetica, sans-serif;">
          <center>
            <table>
              <tr>
                  <td height="40" style="font-size:10px; line-height:10px;">&nbsp;</td>
              </tr>
            </table>
            <table width="660" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
              <tr>
                <td height="20" style="font-size:10px; line-height:10px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="center" valign="top">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                    <tr>
                      <td align="left" valign="top">
                        <p style="font-size: 30px;margin-bottom:10px;">
                            <b>
                                Заказ с сайта Klassnye.com
                            </b>
                        </p>
                        <p style="font-size: 20px; color: #888888;margin-top: 0px">
                            С сайта Klassnye.com поступил новый заказ от клиента. Обработайте данный заказ как можно скорее
                        </p>

                        <p style="margin-top: 20px; font-size: 20px"><b>Информация о клиенте</b></p>
                        ${renderUser(data)}
                        <p style="margin-top: 20px; font-size: 20px"><b>
                          Информация о заказе
                        </b></p>

                        ${renderItems(data)}
                        ${renderPrice(data)}
                        ${renderDiscount(data)}
                      </td>
                      <td width="30px" valign="top">
                        &nbsp;
                      </td>
                    </tr>
                </td>
              </tr>
            </table>  
            </table>
            <table width="600" bgColor="#F2F2F2">
              <tr>
                <td height="40" style="font-size:10px; line-height:10px;">&nbsp;</td>
              </tr>
            </table>
          </center>
        </body>
      </html>`,
		alternative: true
	}
];
