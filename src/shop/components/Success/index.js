import React from "react";
import styles from "./styles";

export default () => (
  <div className="ui text container" style={styles.success}>
    <h1 className="ui header inverted">
      Поздравляем!
    </h1>
    <p className="lead small">
      Ваш заказ успешно оформлен и скоро будет обработан нашими менеджерами.{" "} 
      Спасибо, что выбираете нашу продукцию!
    </p>
    <a href="/" className="ui button primary big">
      Вернуться на главную
    </a>
  </div>
)