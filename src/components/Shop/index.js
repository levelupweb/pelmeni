import React, { Component } from "react";
import CardList from "../CardList";
import Cart from "../Cart";
import ShopForm from "../ShopForm";
import Steps from "../Steps";
import data from "./data";
import "./styles.css";

const emptyArray = [];
const CART = "cart";

const configureCart = () => {
  if (window.localStorage && window.localStorage.getItem(CART)) {
    return JSON.parse(window.localStorage.getItem(CART));
  } else {
    return emptyArray;
  }
}

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setStep = this.setStep.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);

    this.state = { 
      cart: configureCart(), 
      step: 1, 
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { cart } = this.state;
    this.setLocalStorage(cart);
  }

  addToCart(item, next) {
    const { cart } = this.state;

    this.setState(state => ({ 
      cart: [ ...state.cart, item ] 
    }), () => next());
  }

  changeItem(id, item) {
    if (window.localStorage) {
      const cart = [
        ...JSON.parse(localStorage.getItem(CART)).map(i => {
          if (i.id === id) {
            return Object.assign({}, i, item);
          }
          return i;
        })
      ];

      this.setState({ cart });
    }
  }

  setLocalStorage(cart) {
    if (window.localStorage) {
      localStorage.setItem(CART, JSON.stringify(cart));
    }
  }

  resetLocalStorage() {
    if (window.localStorage) {
      localStorage.removeItem(CART);
    }
  }

  setStep(step) {
    this.setState({ step })
  }

  handleSuccess() {
    this.setState({ 
      cart: emptyArray, 
      step: 4, 
    }, () => this.resetLocalStorage());
  }

  removeItem(id) {
    this.setState({ 
      cart: [ ...this.state.cart.filter(item => item.id !== id) ] 
    });
  }

  render() {
    const { cart, step } = this.state;
    const cartLength = cart.length;

    return (
      <div className="shop-wrapper">
        <Steps 
          step={step} 
          onSetStep={this.setStep} 
          cartLength={cartLength}
        />
        <div className="shop-content">
          {step === 1 &&
            <CardList 
              cart={cart} 
              onAdd={this.addToCart} 
              data={data} 
              columns="two" 
            />
          }
          {step === 2 &&
            <Cart
              cart={cart} 
              onRemove={this.removeItem} 
              onChange={this.changeItem}
            />
          }
          {step === 3 &&
            <ShopForm 
              cart={cart} 
              onSuccess={this.handleSuccess}
            />
          }
          {step === 4 &&
            <div className="ui text container" style={{textAlign: "center"}}>
              <a href="/" className="ui button inverted big">
                Вернуться на главную
              </a>
            </div>
          }
        </div>
      </div>
    );
  }
}