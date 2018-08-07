import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ShopContext } from "@components/Shop/context";
import AmountChanger from "@components/AmountChanger";
import PromoInput from "@components/PromoInput";
import "./styles.css";

import {
  Button,
  Header,
  Icon,
  Message,
  Input,
  Form,
} from "semantic-ui-react";

class CartWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = {
      isExpanded: false,
      animation: false,
    }
  }

  componentDidUpdate(prevProps) {
    const { addSpy } = this.props;

    if (JSON.stringify(addSpy) !== JSON.stringify(prevProps.addSpy)) {
      this.setState({ animation: true }, () => setTimeout(() =>
        this.setState({ animation: false }), 1000
      ))
    }
  }

  handleExpand() {
    this.setState(state => ({
      isExpanded: !state.isExpanded
    }));
  }

  renderItems() {
    const {
      cart,
      removeFromCart,
      updateAmount
    } = this.props;

    if (cart && cart.length !== 0) {
      return cart.map((item, i) => (
        <div className="cart-widget-item">
          <div className="title">
            <Header
              inverted
              as="h3"
            >
              {item.title}
              <Header.Subheader>
                {item.weight} гр.
              </Header.Subheader>
            </Header>
            <Button
              onClick={() => removeFromCart(item.id)}
              size="tiny"
              icon
            >
              <Icon name="close" />
            </Button>
          </div>
          <div className="bar">
            <AmountChanger
              amount={item.amount}
              onChange={amount => updateAmount(item.id, amount)}
            />
            <div className="total">
              {item.price * item.amount} Руб.
            </div>
          </div>
        </div>
      ))
    }

    return (
      <div className="empty">
        <p className="message">
          Ваша корзина пока пуста
        </p>
        <Link
          to="/shop"
          onClick={this.handleExpand}
        >
          <Button
            inverted
            basic
            fluid
          >
            Выбрать товар
          </Button>
        </Link>
      </div>
    );
  }

  renderTotal() {
    const {
      total,
      totalWithDiscount
    } = this.props;

    if (totalWithDiscount) {
      return (
        <span className="cart-total">
          <span className="lined-throught">
            {total}
          </span>
          <span className="total-to-checkout">
            {totalWithDiscount}
          </span>
          <span className="suffix">
            руб.
          </span>
        </span>
      );
    }

    return (
      <span className="cart-total">
        <span className="total-to-checkout">
          {total}
        </span>
        <span className="suffix">
          руб.
        </span>
      </span>
    );
  }

  renderButton() {
    return (
      <div className="cart-checkout-button">
        <div className="total">
          Итого: {this.renderTotal()}
        </div>
        <Link
          onClick={this.handleExpand}
          to="/shop/cart"
        >
          <Button
            fluid
            basic
          >
            Перейти к оформлению
          </Button>
        </Link>
      </div>
    );
  }

  render() {
    const {
      isExpanded,
      animation
    } = this.state;

    const {
      cart,
      total,
      promo
    } = this.props;

    if (cart && cart.hasOwnProperty("length")) {
      return (
        <div className="cart-widget-cart">
          <div className="info">
            <div className="total">
              <strong>{total}</strong> Руб.
            </div>
            <div className="amount">
              {cart.length} в корзине
            </div>
          </div>
          <Button
            className={animation && "shaking"}
            onClick={this.handleExpand}
            inverted
            basic
            icon
          >
            <Icon
              name={!isExpanded ? "angle down" : "angle up"}
            /> Моя корзина
          </Button>
          {isExpanded &&
            <div className="expand">
              <div className="arrow" />
              <div className="items">
                {this.renderItems()}
              </div>
              {cart.length > 0 && (
                <div className="bottom">
                  <div className="checkout">
                    {this.renderButton()}
                  </div>
                  {!promo &&
                    <div className="promo">
                      <PromoInput />
                    </div>
                  }
                </div>
              )}
            </div>
          }
        </div>
      )
    }

    return null;
  }
}

CartWidget.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
    weight: PropTypes.number,
    price: PropTypes.number,
  })),
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number,
  updateAmount: PropTypes.func.isRequired,
  promo: PropTypes.shape({
    code: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
  }),
  handlePromo: PropTypes.func.isRequired,
  totalWithDiscount: PropTypes.number,
}

CartWidget.defaultProps = {
  cart: [],
  total: 0,
  totalWithDiscount: null,
  promo: null,
}

const EnhancedCartWidget = () => (
  <ShopContext.Consumer>
    {({
      cart,
      removeFromCart,
      updateAmount,
      getTotalSumm,
      promo,
      handlePromo,
      getTotalSummWithDiscount,
      addSpy,
    }) => (
        <CartWidget
          cart={cart}
          removeFromCart={removeFromCart}
          updateAmount={updateAmount}
          total={getTotalSumm()}
          totalWithDiscount={getTotalSummWithDiscount()}
          promo={promo}
          addSpy={addSpy}
          handlePromo={handlePromo}
        />
      )}
  </ShopContext.Consumer>
)

export default EnhancedCartWidget;