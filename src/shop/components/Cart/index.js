import React from "react";
import styles from "./styles";

export default class Cart extends React.Component {
  renderItems() {
    const { cart, onRemove } = this.props;

    return cart.map((item) => (
      <tr>
        <td >
          <h3 className="ui header"><i style={styles.remove} onClick={() => onRemove(item.id)} className="ui icon close"></i> {item.title}
            
          </h3>
        </td>
        <td>{item.amount} шт.</td>
        <td>{item.weight}</td>
        <td>{item.total} руб.</td>
      </tr>
    ))
  }

  getSumm() {
    const { cart } = this.props;
    return cart.reduce((prev, curr) => prev + curr.total * curr.amount, 0);
  }
  render() {
    return (
      <div>
        <table className="ui celled table">
          <thead>
            <tr><th>Наименование</th>
            <th>Кол-во</th>
            <th>Общий вес</th>
            <th>Сумма</th>
          </tr></thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
        <div className="ui divider" />
        <div style={styles.info}>
          <p className="lead small">Пожалуйста, подтвердите информацию о деталях заказа, а затем нажмите кнопку "Вперед"</p>  
        </div>
        <div className="ui divider" />
        <div style={styles.info}>
          <h2 className="ui header inverted" style={styles.finals}>Итого</h2>
          <h2 className="ui header inverted" style={styles.summ}>{this.getSumm()} руб.</h2>
        </div>
      </div>
    )
  }
}