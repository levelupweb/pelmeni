import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./styles.less";

import {
  Header
} from "semantic-ui-react";

const renderTitle = path => {
  switch (path) {
    case "/shop":
      return "Выберите товар";
    case "/shop/cart":
      return "Подтвердите заказ";
    case "/shop/form":
      return "Оформите заказ";
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
    default:
    return null;
  }
}

const HeaderWrapper = ({ pathname }) => (
  <div className={styles.wrapper}>
    <Fade bottom>
			<Header inverted as="h1">
				{renderTitle(pathname)}
			</Header>
    </Fade>
    <Fade bottom>
      <p className={styles.paragraph}>
        {renderDescription(pathname)}
      </p>
    </Fade>
  </div>
);

export default HeaderWrapper;