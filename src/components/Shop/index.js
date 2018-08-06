import React, { Component } from "react";
import CardList from "../CardList";
import Cart from "../Cart";
import ShopForm from "../ShopForm";
import Steps from "../Steps";
import images from "./images";
import "./styles.css";

import { 
  Switch, 
  Route, 
  withRouter, 
  Link 
} from "react-router-dom";

import {
  ShopContext
} from "./context";

const attachImagesToEntries = (items) => items
  .map((category) => {
    const categoryImages = images[category._id];

    if (categoryImages) {
      return {
        ...category,
        items: category.items.map((item) => {
          const itemImage = categoryImages[item._id];

          if (itemImage) {
            return {
              ...item,
              image: itemImage
            }
          }
          return item;
        })
      }
    }
    return category;
  })

class Shop extends Component {
  renderSteps() {
    const {
      location: {
        hash,
        pathname
      }
    } = this.props;

    if (hash !== "#success") {
      return (
        <div className="shop-steps">
          <Steps pathname={pathname} />
        </div>
      );
    }

    return null
  }

  render() {
    const { 
      cart, 
      canCart
    } = this.props;

    if (!cart) { 
      return (
        <div className="ui loader active" />
      );
    }

    const cartLength = cart.length;
    
    return (
      <div className="shop-wrapper">
        {this.renderSteps()}
        <div className="shop-content">
          <Switch>
            <Route 
              exact
              path="/shop"
              render={() => (
                <div className="shop-card-list">
                  {canCart &&
                    <Link to="/shop/cart" className="shop-next-button">
                      <button className="ui labeled icon button positive big">
                        Продолжить <i className="ui icon angle right" />
                      </button>
                    </Link>
                  }
                  <ShopContext.Consumer>
                    {({ items }) => (
                      <CardList
                        itemsWithImages={items && attachImagesToEntries(items)}
                        columns="two"
                      />
                    )}
                  </ShopContext.Consumer>
                </div>
              )} 
            />
            <Route 
              exact
              path="/shop/cart"
              render={() => (
                <Cart
                  cart={cart} 
                  onRemove={this.removeItem} 
                  onChange={this.changeItem}
                  submitter={
                    <Link to="/shop/form">
                      <button className="ui button positive big">
                        Оформить заказ
                      </button>
                    </Link>
                  }
                  backer={
                    <Link to="/shop">
                      <button className="ui button big">
                        Назад
                      </button>
                    </Link>
                  }
                />
              )}
            />
            <Route
              exact
              path="/shop/form"
              render={() => (
                <ShopForm 
                  cart={cart} 
                  onSuccess={this.handleSuccess}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Shop.defaultProps = {
  canCart: false,
  cart: [],
}

export default withRouter(Shop);