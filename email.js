const emailjs = require("emailjs");
const emailServer = require("./emailServer");

const { 
  check, 
  validationResult 
} = require("express-validator/check");

const { 
  matchedData 
} = require("express-validator/filter");

const checkPostData = [
  check("name")
    .exists()
    .withMessage("Не заполнено поле 'Имя'"),
  check("dostavka")
    .optional(),
  check("dostavka")
    .optional()
    .isLength({
      max: 10000,
    })
    .withMessage("Адрес доставки не может быть больше 500 символов"),
  check("phone")
    .exists()
    .withMessage("Не заполнено поле \"Контактный телефон\""),
  check("message")
    .optional()
    .isLength({
      max: 10000,
    })
    .withMessage("Сообщение не может быть больше 10000 символов"),
  check("items")
    .exists()
    .withMessage("Не заполнено поле 'Продукты'"),
]

const generateHtml = data => `
  <html><body>
    <h1>Заказ с сайта Klassnye.com</h1>
    <p>С сайта Klassnye.com поступил новый заказ от клиента. Обработайте данный заказ как можно скорее</p>
    <p>Клиент оставил следующую информацию о себе:</p>
    <ul>
      <li>Имя клиента: ${data.name || "Не указано"}</li>
      <li>E-mail: ${data.email || "Не указан"}</li>
      <li>Номер телефона: ${data.phone || "Не указан"}</li>
      <li>Адрес доставки: ${data.dostavka || "Не указано"}</li>
    </ul>
    <p>Информация о заказе:</p>
    <ul>
      ${data.items.map((item) => `<li>${item.title} (Кол-во: ${item.amount}, Вес за шт.: ${item.weight})</li>`)}
    </ul>
    <h2>К оплате: ${data.items.reduce((prev, curr) => prev + (curr.price * curr.amount),0)} руб.</h2>
  </body></html>
`;

const checkContactData = [
  check("name")
    .exists()
    .withMessage("Не заполнено поле 'Имя'"),
  check("email")
    .exists()
    .withMessage("Не заполнено поле 'Email"),
  check("email")
    .isEmail()
    .trim()
    .normalizeEmail()
    .withMessage("Неверный формат Email адреса"),
  check("message")
    .optional()
    .isLength({
      max: 10000,
    })
    .withMessage("Сообщение не может быть больше 10000 символов"),
];


const generateHtmlFeedback = data => `
  <html><body>
    <h1>Обратная связь с сайта Klassnye.com</h1>
    <p>С сайта Klassnye.com поступило новое сообщение</p>
    <p>Клиент оставил следующую информацию о себе:</p>
    <ul>
      <li>Имя клиента: ${data.name || "Не указано"}</li>
      <li>E-mail или телефон: ${data.email || data.phone || "Не указано"}</li>
    </ul>
    <p>Сообщение:</p>
    <p>${data.message}</p>
  </body></html>
`;


module.exports = {
  handlerContact: (req, res) => {
    const data = matchedData(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.mapped(),
      });
    }

    const message	= {
      text: "Обратная связь",
      from: process.env.SMTP_USER,
      to: "<beatzhitta@gmail.com>",
      subject: "Обратная связь с сайта Klassnye.com",
      attachment: [ {
        data: generateHtmlFeedback(req.body),
        alternative: true
      }]
    };

    return emailServer.send(message, (err, message) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ isSended: true });
    });
  },
  handlerOffer: (req, res) => {
    const data = matchedData(req);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.mapped(),
      });
    }
  
    const message	= {
      text: "Новая заявка",
      from: process.env.SMTP_USER,
      to: "<" + process.env.SMTP_USER + ">",
      subject: "Новый заказ на сайте Klassnye.com",
      attachment: [ {
        data: generateHtml(req.body),
        alternative: true
      }]
    };
  
    return emailServer.send(message, (err, message) => {
      if (err) return res.status(500).send(err);
      return res.status(200).json({ isSended: true });
    });
  },
  checkContactData,
  checkPostData
}