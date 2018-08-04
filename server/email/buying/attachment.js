const { 
    PURCHASE_ITEMS 
} = require("../../models/Purchase/consts");

const { 
    ITEM_PRICE,
    ITEM_AMOUNT,
    ITEM_TITLE,
    ITEM_WEIGHT
} = require("../../models/Item/consts");


const { 
    USER_NAME,
    USER_DOSTAVKA,
    USER_EMAIL,
    USER_MESSAGE,
    USER_PHONE,
} = require("../../models/User/consts");


module.exports = (data) => [
    { data: `<html>
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
                        <ul>
                            <li>Имя клиента: ${data[USER_NAME] || "Не указано"}</li>
                            <li>E-mail: ${data[USER_EMAIL] || "Не указан"}</li>
                            <li>Номер телефона: ${data[USER_PHONE] || "Не указан"}</li>
                            <li>Адрес доставки: ${data[USER_DOSTAVKA] || "Не указано"}</li>
                            <li>Комментарий: ${data[USER_MESSAGE] || "Не указано"}</li>
                        </ul>
                        
                        <p style="margin-top: 20px; font-size: 20px"><b>Информация о заказе</b></p>
                        <ul>
                            ${data[PURCHASE_ITEMS].map((item) => 
                                `<li>${item[ITEM_TITLE]} (Кол-во: ${item[ITEM_AMOUNT]}, Вес за шт.: ${item[ITEM_WEIGHT]})</li>`
                            )}
                        </ul>
                        <p style="font-size: 25px">
                            К оплате: ${data[PURCHASE_ITEMS].reduce((prev, curr) => prev + (curr[ITEM_PRICE] * curr[ITEM_AMOUNT]),0)} руб.
                        </p>
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
    },
  ];