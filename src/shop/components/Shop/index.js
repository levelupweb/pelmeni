import React, { Component } from "react";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Divider from "../Divider";
import CardList from "../CardList";
import Checkout from "../Checkout";
import Navigation from "../Navigation";
import Success from "../Success";
import Form from "../Form";
import Steps from "../Steps";
import styles from "./styles";
import data from "../data";

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
    this.handleSuccess = this.handleSuccess.bind(this);
    this.state = { cart: configureCart(), step: 1, }
  }

  addToCart(item, next) {
    const { cart } = this.state;

    this.setState(state => ({ 
      cart: [ ...state.cart, item ] 
    }), () => {
      this.setLocalStorage(this.state.cart);
      return next();
    })
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
    this.resetLocalStorage();
    this.setState({ cart: emptyArray, step: 4, })
  }

  removeItem(id) {
    this.setState({
      cart: [ ...this.state.cart.filter(item => item.id !== id) ]
    });

    this.setLocalStorage([ ...this.state.cart.filter(item => item.id !== id) ]);
  }

  render() {
    const { cart, step } = this.state;
    const cartLength = cart.length;

    return <div 
      className="section-content" 
      style={styles.section}
    >
      <div className="navbar-wrapper">
        <Header />
      </div>
      <Jumbotron />
      <div style={styles.navigation}>
        {cartLength > 0 &&
          <Navigation 
            step={step}
            onForward={() => this.setStep(step+1)}
            onBack={() => this.setStep(step-1)}
            cartLength={cartLength}
          />
        }
      </div>
      <Divider step={step} />
      <Steps 
        step={step} 
        onSetStep={this.setStep} 
        cartLength={cartLength}
      />
      <div style={styles.content}>
        {step === 1 &&
          <CardList 
            cart={cart} 
            onAdd={this.addToCart} 
            data={data} 
            columns="two" 
          />
        }
        {step === 2 &&
          <Checkout 
            cart={cart} 
            onRemove={this.removeItem} 
          />
        }
        {step === 3 &&
          <Form 
            cart={cart} 
            onSuccess={this.handleSuccess}
          />
        }
        {step === 4 &&
          <Success />
        }
      </div>
    </div>
  }
}