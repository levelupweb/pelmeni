require("dotenv").load();
const express = require('express');
const fs = require("fs");
const emailjs = require("emailjs");
const bodyParser = require("body-parser");
const https = require('https');
const emailServer = require("./emailServer");
const http = require('http');

const app = express();

const key = fs.readFileSync('ssl/key.key', 'utf8');
const cert = fs.readFileSync('ssl/cert.crt', 'utf8');

app.use(bodyParser());

app.use('/static', express.static(__dirname + '/src'));

app.set('port', process.env.PORT);

app.get("/", (req, res) => res.sendFile(__dirname + "/src/index/index.html"));

app.get("/shop", (req, res) => res.sendFile(__dirname + "/src/shop/shop.html"));

app.get("/catalog", (req, res) => res.sendFile(__dirname + "/src/catalog/index.html"));

app.get("/dostavka", (req, res) => res.sendFile(__dirname + "/src/dostavka/index.html"));

const generateHtml = data => `
  <html><body>
    <h1>Заказ с сайта Klassnye.com</h1>
    <p>С сайта Klassnye.com поступил новый заказ от клиента. Обработайте данный заказ как можно скорее</p>
    <p>Клиент оставил следующую информацию о себе:</p>
    <ul>
      <li>Имя клиента: ${data.name}</li>
      <li>E-mail: ${data.email}</li>
      <li>Номер телефона: ${data.phone}</li>
    </ul>
    <p>Информация о заказе:</p>
    <ul>
      ${data.items.map((item) => `<li>${item.title} (Кол-во: ${item.amount}, Вес за шт.: ${item.weight})</li>`)}
    </ul>
    <h2>К оплате: ${data.items.reduce((prev, curr) => prev + (curr.price * curr.amount),0)} руб.</h2>
  </body></html>
`;

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validatePhone = number => {
  const re = /^((\+7|7|8)+([0-9]){10})$/;
  return re.test(number);
}

const getErrors = data => Object.keys(data).reduce((prev, curr) => {
  if (curr === "phone" && (!data[curr] || data[curr].length === 0)) return [...prev, "Пожалуйста, заполните обязательное поле - номер телефона"];
  if (curr === "items" && data[curr].length === 0) return [...prev, "Ваша корзина пуста"];
  return prev;
}, [])

app.post("/send", (req, res) => {
  const data = req.body; 
  const errors = getErrors(data);

  if (errors.length > 0) return res.status(422).json(errors);

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

  return emailserver.send(message, (err, message) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({ isSended: true });
  });
})

const getErrorsFeedback = data => Object.keys(data).reduce((prev, curr) => {
  if (curr === "email" && !validateEmail(data[curr])) return [...prev, "Неверный формат e-mail адреса"];
  if (curr === "message" && (data[curr].length < 10 && data[curr].length > 1000)) return [...prev, "Сообщение не может быть меньше 10 и больше 1000 символов"];
  if (curr === "name" && (data[curr].length < 2 && data[curr].length > 50)) return [...prev, "Имя не может быть меньше 2 и больше 50 символов"]
  return prev;
}, []);

const generateHtmlFeedback = data => `
  <html><body>
    <h1>Обратная связь с сайта Klassnye.com</h1>
    <p>С сайта Klassnye.com поступило новое сообщение</p>
    <p>Клиент оставил следующую информацию о себе:</p>
    <ul>
      <li>Имя клиента: ${data.name}</li>
      <li>E-mail или телефон: ${data.email || data.phone}</li>
    </ul>
    <p>Сообщение:</p>
    <p>${data.message}</p>
  </body></html>
`;

app.post("/feedback", (req, res) => {
  const data = req.body; 
  const errors = getErrorsFeedback(data);

  if (errors.length > 0) return res.status(422).json(errors);

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

  return emailserver.send(message, (err, message) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json({ isSended: true });
  });
})

let server;

if (process.env.SSL === 'true') {
  server = https.createServer({ key, cert }, app);
} else {
  server = http.createServer(app);
}

server.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Server runs on ' + port);
});

