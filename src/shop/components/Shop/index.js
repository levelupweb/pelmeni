import React, { Component } from "react";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Divider from "../Divider";
import CardList from "../CardList";
import Checkout from "../Checkout";
import Navigation from "../Navigation";
import Form from "../Form";
import Steps from "../Steps";
import styles from "./styles";
import data from "../data";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setStep = this.setStep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.state = {
      cart: [],
      step: 1,
    }
  }

  addToCart(item, cb) {
    const { cart } = this.state;

    if (!cart.filter(cartItem => cartItem.id === item.id)[0]) {
      this.setState(state => ({ 
        cart: [ ...state.cart, item ] 
      }), () => cb())
    } else {
      this.setState(state => ({ 
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return Object.assign({}, item, { 
              amount: new Number(cartItem.amount) + new Number(item.amount) 
            })
          } else {
            return cartItem;
          }
        })
      }), () => cb())
    }
  }

  setStep(step) {
    this.setState({
      step,
    })
  }

  removeItem(id) {
    this.setState({
      cart: [ ...this.state.cart.filter(item => item.id !== id) ]
    })
  }

  handleSuccess() {
    this.setState({
      cart: [],
      step: 4,
    })
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

      <Jumbotron 
        title="Оформить заказ" 
        description="На этой странице вы с легкостью можете заказать нашу продукцию онлайн" 
      />
      <div style={styles.navigation}>
        {cartLength > 0 &&
          <Navigation 
            step={step}
            onForward={() => this.setStep(step+1)}
            onBack={() => this.setStep(step-1)}
          />
        }
      </div>
      <Divider step={step} />
      <Steps 
        step={step} 
        onSetStep={this.setStep} 
        cartLength={cartLength}
      />
      <div style={{margin: "25px 0", textAlign: "left"}}>
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
          <div className="ui text container" style={{marginTop:"20px", textAlign: "center"}}>
            <h1 className="ui header inverted">Поздравляем!</h1>
            <p className="lead small">Ваш заказ успешно оформлен и скоро будет обработан нашими менеджерами. Спасибо, что выбираете нашу продукцию!</p>
            <a href="/" className="ui button primary big">Вернуться на главную</a>
          </div>
        }
      </div>
    </div>
  }
}