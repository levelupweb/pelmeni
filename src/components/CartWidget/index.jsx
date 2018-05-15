import React from "react";
import styles from "./styles";

const renderAmountChanger = (current, onChange) => (
  <div style={styles.amountChanger}>
    <div style={styles.minus}>
      <button 
        className={`ui button inverted small basic icon ${current < 1 && "disabled"}`} 
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
        className={`ui button inverted small basic icon ${current < 0 && "disabled"}`} 
        onClick={() => onChange(current + 1)}
      >
        <i className="ui icon plus" />
      </button>
    </div>
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
      cart: null,
    }
  }

  componentDidMount() {
    this.getCartData();
  }

  componentDidCatch(error, info) {
    this.setState({ 
      hasError: true,
      error,
    });
  }

  modifyCartData(cart) {
    this.setState({ cart }, () => {
      localStorage.setItem("cart", JSON.stringify(this.state.cart))
    })
  }

  handleExpand() {
    const { isExpanded } = this.state;

    this.setState({
      isExpanded: !isExpanded,
    })
  }

  handleChangeAmount(id, amount) {
    const { cart } = this.state;
    
    if (cart && cart.length) {
      this.modifyCartData(cart.map(item => {
        if (item.id === id) {
          return Object.assign({}, item, {
            amount,
            total: amount * item.price,
          });
        }
        return item;
      }));
    } 
  }

  getCartData() {
    if (window.localStorage) {
      this.setState({
        cart: JSON.parse(localStorage.getItem("cart")),
      })
    }
  }

  removeItem(id) {
    const { cart } = this.state;

    if (cart && cart.length) {
      this.modifyCartData(cart.filter(item => item.id !== id));
    }
  }

  getSumm() {
    const { cart } = this.state;

    if (cart) {
      return cart.reduce((prev, curr) => prev + curr.total, 0);
    }

    return 0;
  }

  getAmount() {
    const { cart } = this.state;

    if (cart && cart.length !== 0) {
      return cart.reduce((prev, curr) => prev + curr.amount, 0);
    }

    return 0;
  }

  renderItems() {
    const { cart } = this.state;

    if (cart && cart.length !== 0) {
      return cart.map((item, i) => (
        <div style={styles.item}>
          <div style={styles.title}>
            <h4 style={styles.titleText} className="ui header inverted">
              {i+1}. {item.title}
              <div className="sub header">
                {item.weight}
              </div>
            </h4>
            <div 
              onClick={() => this.removeItem(item.id)} 
              className="ui button inverted icon basic tiny" 
              style={styles.removeButton}
            >
              <i className="ui close icon" />
            </div>
          </div>
          <div style={styles.bar}>
            {renderAmountChanger(item.amount, (newValue) => this.handleChangeAmount(item.id, newValue))}
            <div style={styles.total}>
              {item.total} Руб.
            </div>
          </div>
        </div>
      ))
    }

    return (
      <div style={styles.msg}>
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
    const { cart } = this.state;

    if (cart && cart.length !== 0) {
      return [
        <div className="ui divider" />,
        <div style={styles.totalButton}>
          Итого: {this.getSumm()} Руб.
        </div>,
        <a href="/shop">
          <div className="ui button inverted basic fluid">
            Оформить заказ
          </div>
        </a>
      ]
    }

    return null;
  }

  render() {
    const { hasError, isExpanded, cart } = this.state;

    if (hasError) {
      return (
        <div>Ошибка</div>
      );
    }

    if (cart && cart.hasOwnProperty("length")) {
      return (
        <div style={styles.cart}>
          <div style={styles.info}>
            <div style={styles.total}>
              <strong>{this.getSumm()}</strong> Руб.
            </div>
            <div style={styles.amount}>
              {this.getAmount()} в корзине
            </div>
          </div>
          <div style={styles.button}>
            <div 
              onClick={this.handleExpand} 
              style={styles.buttonButton} 
              className="ui button basic icon inverted"
            >
              <span style={styles.buttonText}>
                <i className={`ui icon ${!isExpanded ? "angle down" : "angle up"}`} /> Моя корзина
              </span> 
            </div>
          </div>
          {isExpanded &&
            <div style={styles.expand}>
              <div style={styles.arrow} />
              <div style={styles.items}>
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

export default CartButton;