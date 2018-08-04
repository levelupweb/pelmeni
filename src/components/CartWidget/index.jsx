import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { ShopContext } from "../Shop/context";
import config from "../../utils/config";
import "./styles.css";

const renderAmountChanger = (item, onChange) => (
  <div className="ui buttons tiny">
    <button 
      className={`ui button small icon`} 
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
      className={`ui button small icon`} 
      onClick={() => onChange(item.amount + 1, (item.amount + 1) * item.price)}
    >
      <i className="ui icon plus" />
    </button>
  </div>
)

class CartWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.checkCodeStart = this.checkCodeStart.bind(this);
    this.checkCodeProcess = this.checkCodeProcess.bind(this);
    this.checkCodeSuccess = this.checkCodeSuccess.bind(this);
    this.checkCodeFail = this.checkCodeFail.bind(this);

    this.state = {
      isExpanded: false,
      isChecking: false,
      temporaryCode: null,
      discount: null,
      isValid: true,
    }
  }

  handleExpand() {
    this.setState(state => ({ 
      isExpanded: !state.isExpanded 
    }));
  }

  checkCodeStart() {
    const { 
      isChecking,
      discount,
    } = this.state;

    if (!isChecking && !discount) {
      this.setState({  isChecking: true, error: null, isValid: true }, () => {
        this.checkCodeProcess();
      })
    }
  }

  checkCodeProcess() {
    const { temporaryCode } = this.state;

    axios.get(config.url + "/promo/check", {
      params: { code: temporaryCode }
    })
			.then(this.checkCodeSuccess)
			.catch(this.checkCodeFail);
  }

  checkCodeSuccess({ data: { isValid, discount } }) {
    this.setState({
      isChecking: false,
      discount: discount,
      isValid
    })
  }

  checkCodeFail({ response }) {
		if (response) {
			if (response.data.code) {
				this.handleError(response.data)

				return;
			}

			this.handleError({
				message: "Неизвестная ошибка сервера"
			})

			return;
		}
		this.handleError({
			message: "Неизвестная ошибка клиента"
		})
	}

	handleError(error) {
		console.log(error);

		this.setState({
			isFetching: false,
			error,
		})
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
            <h3 className="ui inverted header">
              {item.title}
              <div className="sub header">
                {item.weight} гр.
              </div>
            </h3>
            <div 
              onClick={() => removeFromCart(item.id)} 
              className="ui button icon tiny" 
            >
              <i className="ui close icon" />
            </div>
          </div>
          <div className="bar">
            {renderAmountChanger(item, value =>  
              updateAmount(item.id, value))
            }
            <div className="total">
              {item.price * item.amount} Руб.
            </div>
          </div>
        </div>
      ))
    }

    return (
      <div className="empty">
        <p>Ваша корзина пока пуста</p>
        <Link 
          to="/shop"
          onClick={this.handleExpand}
        >
          <div className="ui button inverted basic fluid">
            Выбрать товар
          </div>
        </Link>
      </div>
    )
  }

  renderButton() {
    const { total } = this.props;

    return (
      <React.Fragment>
        <div className="total">
          Итого: <span>{total} Руб.</span>
        </div>
        <Link 
          onClick={this.handleExpand} 
          to="/shop/cart"
        >
          <button className="ui button fluid basic">
            Перейти к оформлению
          </button>
        </Link>
      </React.Fragment>
    );
  }

  renderInput() {
    const { 
      temporaryCode,
      isChecking,
      error,
      isValid
    } = this.state;

    return (
      <div 
        className={`
          ui action input fluid
          ${!isValid ? "error" : ""}
        `}
      >
        {error && 
          <div className="ui negative message">
            <i className="ui close icon" />
            <div className="header">Ошибка</div>
            <p>{error.message}</p>
          </div>
        }
        <input 
          type="text"
          value={temporaryCode}
          placeholder="У вас есть промокод?"
          onChange={({ target: { value } }) => 
            this.setState({
              temporaryCode: value
            })
          }
        />
        <button 
          className={`basic ui button ${isChecking && "loading"}`}
          onClick={this.checkCodeStart}
        >
          <i className="ui icon angle right" />
        </button>
      </div>
    );
  }

  render() {
    const { isExpanded } = this.state;

    const { 
      cart,
      total,
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
          <div className="button">
            <div 
              onClick={this.handleExpand} 
              className="ui button basic icon inverted"
            >
              <i 
                className={`
                  ui icon 
                  ${!isExpanded ? "angle down" : "angle up"}
                `} 
              /> Моя корзина
            </div>
          </div>
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
                  <div className="promo">
                    {this.renderInput()}
                  </div>
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
  total: PropTypes.number
}

CartWidget.defaultProps = {
  cart: [],
  total: 0,
}

const EnhancedCartWidget = () => (
  <ShopContext.Consumer>
    {({ cart, removeFromCart, updateAmount, getTotalSumm }) => (
      <CartWidget
        cart={cart}
        removeFromCart={removeFromCart}
        updateAmount={updateAmount}
        total={getTotalSumm()}
      />
    )}
  </ShopContext.Consumer>
)

export default EnhancedCartWidget;