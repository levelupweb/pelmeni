import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles";

const renderTitle = path => {
  switch (path) {
    case "/shop":
      return "Выберите товар";
    case "/shop/cart":
      return "Подтвердите заказ";
    case "/shop/form":
      return "Оформите заказ";
    case "/shop/success":
      return "Готово!";
    default:
    return null;
  }
}

const renderDescription = path => {
  switch (path) {
    case "/shop":
      return `
        На этой странице вы с легкостью можете 
        заказать нашу продукцию онлайн
      `;
    case "/shop/cart":
      return `
        Подтвердите правильно ли составлен ваш заказ 
      `;
    case "/shop/form":
      return `
        Введите ваш номер телефона и мы свяжемся с вами в 
        течение 15 минут. Для ускорения процесса заказа 
        рекомендуем заполнить адрес доставки
      `;
    case "/shop/success":
      return `
        Ваш заказ успешно подтвержден! Мы свяжемся с 
        вами в течение 15 минут! Оплата производится при получении 
        заказа наличными деньгами или банковской картой. 
        Спасибо, что выбираете нашу продукцию!
      `;
    default:
    return null;
  }
}

export default ({ pathname }) => (
  <div className="ui container">
    <Fade bottom>
      <h1 className="ui inverted header">
        {renderTitle(pathname)}
      </h1>
    </Fade>
    <Fade bottom>
      <p className="lead small">
        {renderDescription(pathname)}
      </p>
    </Fade>
    <Fade bottom>
      {pathname !== "/shop/success" &&
        <ol className="ordered ui list inverted big horizontal">
          <li style={styles.active(pathname === "/shop")} className="ui item">
            Корзина
          </li>
          <li style={styles.active(pathname === "/shop/cart")} className="ui item">
            Подтверждение
          </li>
          <li style={styles.active(pathname === "/shop/form")} className="ui item">
            Адрес доставки
          </li>
          <li className="ui item">
            Получение и оплата
          </li>
        </ol>
      }
    </Fade>
  </div>
);