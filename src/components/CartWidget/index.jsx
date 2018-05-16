import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./styles.css";

import {
  shopEditItem,
  shopRemoveItem
} from "../Shop/actions";

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

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);

    this.state = {
      isExpanded: false,
      hasError: false,
    }
  }

  editItem(id, data) {
    const { shopEditItem } = this.props;

    if (shopEditItem && id && data) {
      shopEditItem(id, data);
    }
  }

  removeItem(id) {
    const { shopRemoveItem } = this.props;

    if (shopRemoveItem && id) {
      shopRemoveItem(id);
    }
  }

  handleExpand() {
    this.setState(state => ({
      isExpanded: !state.isExpanded,
    }))
  }

  handleChangeAmount(id, amount, total) {
    this.editItem(id, {
      amount,
      total,
    });
  }

  getSumm() {
    const { cart } = this.props;
    
    return cart.reduce((prev, curr) => prev + curr.total, 0);
  }

  getAmount() {
    const { cart } = this.props;

    return cart.reduce((prev, curr) => prev + curr.amount, 0);
  }

  renderItems() {
    const { cart } = this.props;

    if (cart && cart.length !== 0) {
      return cart.map((item, i) => (
        <div className="cart-widget-item">
          <div className="cart-widget-item-title">
            <h4 className="ui header inverted">
              {i+1}. {item.title}
              <div className="sub header">
                {item.weight} гр.
              </div>
            </h4>
            <div 
              onClick={() => this.removeItem(item.id)} 
              className="ui button icon inverted basic red tiny cart-widget-item-remove" 
            >
              <i className="ui close icon" />
            </div>
          </div>
          <div className="cart-widget-item-bar">
            {renderAmountChanger(item, (newValue, newTotal) => 
              this.handleChangeAmount(item.id, newValue, newTotal)
            )}
            <div className="cart-widget-item-total">
              {item.total} Руб.
            </div>
          </div>
        </div>
      ))
    }

    return (
      <div className="cart-widget-item-msg">
        <p>Ваша корзина пока пуста</p>
        <a href="/shop">
          <div className="ui button inverted basic fluid">
            Выбрать товар
          </div>
        </a>
      </div>
    )
  }

  renderButton() {
    const { cart, } = this.props;

    if (cart && cart.length !== 0) {
      return [
        <div className="ui divider" />,
        <div className="cart-widget-item-total">
          Итого: {this.getSumm()} Руб.
        </div>,
        <Link 
          onClick={() => this.setState({ isExpanded: false })} 
          to="/shop/cart"
        >
          <button className="ui button fluid large">
            Оформить заказ
          </button>
        </Link>
      ]
    }

    return null;
  }

  render() {
    const { hasError, isExpanded } = this.state;
    const { cart } = this.props;

    if (hasError) {
      return (
        <div>Ошибка</div>
      );
    }

    if (cart && cart.hasOwnProperty("length")) {
      return (
        <div className="cart-widget-cart">
          <div className="cart-widget-cart-info">
            <div className="cart-widget-cart-total">
              <strong>{this.getSumm()}</strong> Руб.
            </div>
            <div className="cart-widget-cart-amount">
              {this.getAmount()} в корзине
            </div>
          </div>
          <div className="cart-widget-cart-button">
            <div 
              onClick={this.handleExpand} 
              className="ui button basic icon inverted"
            >
              <i className={`ui icon ${!isExpanded ? "angle down" : "angle up"}`} /> Корзина
            </div>
          </div>
          {isExpanded &&
            <div className="cart-widget-cart-expand">
              <div className="cart-widget-cart-arrow" />
              <div className="cart-widget-cart-items">
                {this.renderItems()}
              </div>
              {this.renderButton()}
            </div>
          }
        </div>
      )
    } 

    return null;
  }
}

const mapStateToProps = ({ shop }) => ({
  cart: shop.cart
})

const mapDispatchToProps = dispatch => ({
  shopEditItem: (id, data) => dispatch(shopEditItem(id, data)),
  shopRemoveItem: id => dispatch(shopRemoveItem(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);