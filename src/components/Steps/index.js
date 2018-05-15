import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles";

const renderTitle = step => {
  switch (step) {
    case 1:
      return "Выберите товар";
    case 2:
      return "Подтвердите заказ";
    case 3:
      return "Оформите заказ";
    case 4:
      return "Готово!";
    default:
    return null;
  }
}

const renderDescription = step => {
  switch (step) {
    case 1:
      return "На этой странице вы с легкостью можете заказать нашу продукцию онлайн";
    case 2:
      return "Подтвердите правильно ли составлен ваш заказ";
    case 3:
      return "Введите ваш номер телефона и мы свяжемся с вами в течение 15 минут. Для ускорения процесса заказа рекомендуем заполнить адрес доставки";
    case 4:
      return "Ваш заказ успешно подтвержден! Мы свяжемся с вами в течение 15 минут! Оплата производится при получении заказа наличными деньгами или банковской картой. Спасибо, что выбираете нашу продукцию!";
    default:
    return null;
  }
}

export default ({ step, onSetStep, cartLength }) => (
  <div className="ui container">
    <Fade bottom>
      <h1 className="ui inverted header primary-header">
        {renderTitle(step)}
      </h1>
    </Fade>
    <Fade bottom>
      <p className="secondary-header">
        {renderDescription(step)}
      </p>
    </Fade>
    <Fade bottom>
      {step < 4 &&
      <ol className="ordered ui list inverted big horizontal">
        <li style={styles.active(step === 1)} className="ui item">
          Корзина
        </li>
        <li style={styles.active(step === 2)} className="ui item">
          Подтверждение
        </li>
        <li style={styles.active(step === 3)} className="ui item">
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