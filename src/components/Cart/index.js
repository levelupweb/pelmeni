import React from "react";
import styles from "./styles.css";

const renderAmountChanger = (item, onChange) => (
  <div className="ui buttons">
    <button 
      className={`ui button small icon ${item.amount < 1 && "disabled"}`} 
      onClick={() => onChange(item.amount - 1, (item.amount - 1) * item.price)}
    >
      <i className="ui icon minus" />
    </button>
    <button 
      className={`ui button small icon`}
    >
      <strong>{item.amount}</strong> шт.
    </button>
    <button 
      className={`ui button small  icon`} 
      onClick={() => onChange(item.amount + 1, (item.amount + 1) * item.price)}
    >
      <i className="ui icon plus" />
    </button>
  </div>
)


export default class Cart extends React.Component {
  renderItems() {
    const { cart, onRemove, onChange } = this.props;

    if (!cart || (cart && !cart.map)) {
      return null;
    }

    return cart.map((item) => (
      <tr>
        <td>
          <h3 className="ui header cart-title">
            {item.title}
            <div className="sub header">
              {item.description}
            </div>
          </h3>
          {renderAmountChanger(item, (amount, total) => 
            onChange(item.id, { amount, total })
          )}
          <button 
            className="ui button icon labeled cart-remove-button" 
            onClick={() => onRemove(item.id)}
          >
            <i className="ui icon close"></i> Удалить
          </button> 
        </td>
        <td>
          {item.amount} шт.
        </td>
        <td>
          {item.weight} гр.
        </td>
        <td>
          {item.total} руб.
        </td>
      </tr>
    ))
  }


  getTotalAmount() {
    const { cart } = this.props;

    return cart.reduce((prev, curr) => prev + curr.amount, 0);
  }

  getTotalWeight() {
    const { cart } = this.props;

    return cart.reduce((prev, curr) => prev + curr.weight * curr.amount, 0);
  }

  getTotalSumm() {
    const { cart } = this.props;

    return cart.reduce((prev, curr) => prev + curr.total, 0);
  }

  getResultSumm() {
    const totalSumm = this.getTotalSumm();

    if (totalSumm < 1000) {
      return totalSumm + 100;
    }

    return totalSumm;
  }

  render() {
    const { cart, submitter, backer } = this.props;
    const summ = this.getTotalSumm();

    if (!cart) {
      return (
        <div>Ошибка</div>
      );
    }

    if (cart && cart.length === 0) {
      return (
        <div className="ui container text" style={{textAlign: "center"}}>
          <h2 className="ui header inverted" style={{margin: "30px"}}>
            Ваша корзина пока пуста, вернитесь к первому шагу
          </h2>
        </div>
      );
    }

    return (
      <div className="ui grid">
        <div className="ten wide column">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Кол-во</th>
                <th>Вес</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItems()}
              <tr>
                <td>
                  <strong>Итого</strong>
                </td>
                <td>
                  {this.getTotalAmount()} кол-во
                </td>
                <td>
                  {this.getTotalWeight()} гр.
                </td>
                <td>
                  {summ} руб.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="ui divider" />
          <div className="cart-info">
            <h1 className="ui header inverted cart-finals">
              Итого: {this.getResultSumm()} руб.
            </h1>
            <p className="lead small">
              {summ > 1000 ? 
                "Доставка бесплатно" : "С учетом доставки - 100 рублей (закажите от 1000 рублей - доставка бесплатно)"
              }
            </p>
          </div>
          <div className="cart-action">
            {backer}
            {submitter}
          </div>
        </div>
        <div className="six wide column">
          <h2 className="ui header inverted">Условия доставки</h2>
          <div className="ui list">
            <div className="item">
              Доставка заказа в пределах г. Кострома 
              <div className="right floated content">
                <strong>100р</strong>
              </div>
            </div>
            <div className="item">
              Заказ от 1000р доставка по г. Кострома 
              <div className="right floated content">
                <strong>Бесплатно</strong>
              </div>
            </div>
            <div className="ui divider"></div>
            <div className="item">
              Доставка заказа за пределы г. Кострома – обсуждается индивидуально по телефону
            </div>
          </div>
          <h2 className="ui header inverted">Время доставки</h2>
          <p>Интернет магазин «Классные ПФ из Костромы» работает с понедельника по четверг с 8-00 до 17-00, пятница с 8-00 до 16-00.</p>
          <p>Все заказы, оформленные на сайте в выходные и праздничные дни, обрабатываются в первый рабочий день после выходных.</p>
          <p>Доставка осуществляется в рабочие дни с 10-00 до 20-00. В субботу с 10-00 до 14-00.</p>
          <p>Условия поставки: При заказе на сайте или по телефону до 14-00 – доставка с 16-00 до 20-00, либо на следующий день в удобное время для покупателя с 10-00 до 20-00.</p>
          <p>При заказе на сайте или по телефону после 14-00 - доставка на следующий день с 10-00 до 20-00.</p>
          <div className="ui divider" />
          <h2 className="ui header inverted">Наши партнеры</h2>
          <p>Магнит, Лента, Пятерочка, Глобус, Десяточка, Высшая Лига, Гулливер, Лидер, Столбы, Лотос, Риат.</p>
        </div>
      </div>
    )
  }
}