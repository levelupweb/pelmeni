import React from "react";
import Cart from "../Cart";

export default class Checkout extends React.Component {
  render() {
    const { cart, onRemove } = this.props;

    if (cart.length === 0) {
      return (
        <div className="ui container text" style={{textAlign: "center"}}>
          <h2 className="ui header inverted" style={{margin: "30px"}}>
            Ваша корзина пока пуста, вернитесь к первому шагу
          </h2>
        </div>
      )
    }

    return (
      <div className="ui container" style={{paddingTop:"25px"}}>
        <Cart onRemove={onRemove} cart={cart} />
      </div>
    )
  }
}