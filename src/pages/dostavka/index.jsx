import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Fade from "react-reveal/Fade";

class Dostavka extends React.Component {
  render() {
    return (
      <div className="ui container text" style={{paddingTop:"120px"}}>
        <div className="ui inverted dostavka vertical segment" style={{textAlign: "left"}}>
          <Fade bottom cascade>
            <div>
            <h1 class="ui inverted header primary-header">
              Условия доставки
            </h1>
            <p>
              Доставка заказа в пределах г. Кострома <strong>100р</strong>. 
              Заказ от 1000р доставка по г. Кострома <strong>Бесплатно</strong>. 
              Доставка заказа за пределы г. Кострома – обсуждается индивидуально по телефону
            </p>
            <div class="ui divider" />
            <h2 className="ui header inverted">
              Время доставки
            </h2>
            <ul className="list ui inverted ordered big">
              <li className="item">
                Интернет магазин «Классные ПФ из Костромы» работает с понедельника{" "}
                по четверг с 8-00 до 17-00, пятница с 8-00 до 16-00.
              </li>
              <li className="item">
                Все заказы, оформленные на сайте в выходные и праздничные дни, обрабатываются{" "}
                в первый рабочий день после выходных.
              </li>
              <li className="item">
                Доставка осуществляется в рабочие дни с 10-00 до 20-00.{" "}
                В субботу с 10-00 до 14-00.
              </li>
              <li className="item">
                Условия поставки: При заказе на сайте или по телефону до 14-00 – доставка с 16-00 до 20-00,{" "}
                либо на следующий день в удобное время для покупателя с 10-00 до 20-00.
              </li>
              <li className="item">
                При заказе на сайте или по телефону после 14-00 - доставка на следующий{" "}
                день с 10-00 до 20-00.
              </li>
            </ul>
            <div className="ui divider" />
            <h2 className="ui header inverted">
              Наши партнеры
            </h2>
            <ul className="list ui bulleted inverted horizontal big">
              <li className="item">Магнит</li>
              <li className="item">Лента</li>
              <li className="item">Пятерочка</li>
              <li className="item">Глобус</li>
              <li className="item">Десяточка</li>
              <li className="item">Высшая Лига</li>
              </ul>
              <br />
              <ul className="list ui bulleted inverted horizontal big">
              <li className="item">Гулливер</li>
              <li className="item">Лидер</li>
              <li className="item">Столбы</li>
              <li className="item">Лотос</li>
              <li className="item">Риат</li>
            </ul>
            <div class="ui divider" />
            <Link to="/contact" className="ui button basic inverted large">
              Связаться с нами
            </Link>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Dostavka;