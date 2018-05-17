const emailjs = require("emailjs");
const emailServer = require("./emailServer");
const Purchase = require("./purchase").model;
const purchaseConsts = require("./purchase").consts;
const convertToCsv = require("./utils/convertToCsv");

const { 
  check, 
  validationResult 
} = require("express-validator/check");

const { 
  matchedData 
} = require("express-validator/filter");

const checkPostData = [
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
      to: "<" + process.env.SMTP_USER + ">",
      subject: "Обратная связь с сайта Klassnye.com",
      attachment: [ {
        data: generateHtmlFeedback(data),
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

    const items = data.items.map(item => ({
      title: item.title,
      description: item.description,
      total: item.total,
      price: item.price,
      amount: item.amount,
      weight: item.weight,
      id: item.id,
    }))

    const user = {
      name: data.name,
      dostavka: data.dostavka,
      phone: data.phone,
      message: data.message
    };

    return Purchase.create({ 
      items, 
      user, 
      status: purchaseConsts.PURCHASE_STATUS_CREATED 
    }, (err, newPurchase) => {
      if (err || !newPurchase) {
        return res.status(500)
          .send("Произошла ошибка во время создания нового заказа. Повторите попытку позже");
      }

      const message	= {
        text: "Новая заявка",
        from: process.env.SMTP_USER,
        to: "<" + process.env.SMTP_USER + ">",
        subject: "Новый заказ на сайте Klassnye.com",
        attachment: [ {
          data: generateHtml(data),
          alternative: true
        }]
      };
    
      return emailServer.send(message, (err, message) => {
        if (err) {
          return res.status(500).send("Произошла ошибка во время создания нового заказа. Повторите попытку позже");
        }
        return Purchase
          .findByIdAndUpdate(newPurchase._id, {
            status: purchaseConsts.PURCHASE_STATUS_SENDED,
          })
          .then(() => res.status(200).json({ isSended: true }))
          .catch((err) => res.status(500).send("Произошла ошибка во время создания нового заказа. Повторите попытку позже"));
      });
    })
  },
  handlerCsv: (req, res) => {
    return Purchase.find({}, null, {
      lean: true, 
      skip: (+req.query.skip || 0), 
      limit: (+req.query.limit) || 50
    }, (err, purchases) => {
      if (!err && purchases) {
        res.set({"Content-Disposition":"attachment; filename=\"data.csv\""});
        res.contentType('image/csv');
        return res.status(200).send(convertToCsv({
          data: purchases
        }));
      } else {
        return res.status(500).send("Ошибка при поиске данных");
      }
    })
  },
  handlerData: (req, res) => {
    return Purchase.find({}, null, {
      lean: true, 
      skip: (+req.query.skip || 0), 
      limit: (+req.query.limit) || 50
    }, (err, purchases) => {
      if (!err && purchases) {
        return res.status(200).send(purchases);
      } else {
        return res.status(500).send("Ошибка при поиске данных");
      }
    })
  },
  checkContactData,
  checkPostData,
}