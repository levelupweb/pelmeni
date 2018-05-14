import React from "react";
import styles from "./styles";

const renderAmountChanger = (current, onChange) => (
  <div style={styles.amountChanger}>
    <div style={styles.minus}>
      <button 
        className={`ui button  small  icon ${current < 1 && "disabled"}`} 
        onClick={() => onChange(current - 1)}
      >
        <i className="ui icon minus" />
      </button>
    </div>

    <div style={styles.current}>
      <strong>{current}</strong> шт.
    </div>


    <div style={styles.plus}>
      <button 
        className={`ui button  small   icon ${current < 0 && "disabled"}`} 
        onClick={() => onChange(current + 1)}
      >
        <i className="ui icon plus" />
      </button>
    </div>
  </div>
)

export default class Cart extends React.Component {
  renderItems() {
    const { cart, onRemove, onChange } = this.props;

    if (cart && cart.map) {
      return cart.map((item) => (
        <tr>
          <td>
            <h3 className="ui header">
              <i style={styles.remove} onClick={() => onRemove(item.id)} className="ui icon close"></i> 
              {item.title}
            </h3>
            {renderAmountChanger(item.amount, (amount) => 
              onChange(item.id, { 
                amount,
                total: amount * item.price,
              })
            )}
          </td>
          <td>{item.amount} шт.</td>
          <td>{item.weight}</td>
          <td>{item.total} руб.</td>
        </tr>
      ))
    }

    return null;
  }

  getSumm() {
    const { cart } = this.props;
    
    if (cart && cart.reduce) {
      return cart.reduce((prev, curr) => prev + curr.total, 0);
    }

    return 0;
  }

  render() {
    const { cart } = this.props;
    const summ = this.getSumm();

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
              <tr><th>Наименование</th>
              <th>Кол-во</th>
              <th>Вес</th>
              <th>Сумма</th>
            </tr></thead>
            <tbody>
              {this.renderItems()}
            </tbody>
          </table>
          <div className="ui divider" />
          <div style={styles.info}>
            <p className="lead small">
              Пожалуйста, подтвердите информацию о деталях заказа, а затем нажмите кнопку "Вперед"
            </p>  
          </div>
          <div className="ui divider" />
          <div style={styles.info}>
            <h2 className="ui header inverted" style={styles.finals}>
              Итого
            </h2>
            <h2 className="ui header inverted" style={styles.summ}>
              {summ} руб.
            </h2>
          </div>
          {summ > 1000 &&
            <div>
              <div className="ui divider" />
              <p className="lead small">
                Доставка бесплатно (заказ на сумму более 1000 руб.)
              </p>
            </div>
          } 
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