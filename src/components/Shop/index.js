import React, { Component } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { shopAddItem, shopEditItem, shopRemoveItem, shopRefresh } from "./actions";
import CardList from "../CardList";
import Cart from "../Cart";
import ShopForm from "../ShopForm";
import Steps from "../Steps";
import images from "./images";
import "./styles.css";

import {
  ShopProvider,
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
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }

  addToCart(item) {
    const { shopAddItem } = this.props;

    if (shopAddItem && item) {
      shopAddItem(item)
    }
  }

  changeItem(id, item) {
    const { shopEditItem } = this.props;

    if (shopEditItem && id && item) {
      shopEditItem(id, item);
    }
  }

  handleSuccess() {
    const { shopRefresh } = this.props;
  
    if (shopRefresh) {
      shopRefresh()
    }
  }

  removeItem(id) {
    const { shopRemoveItem } = this.props;
    
    if (shopRemoveItem && id) {
      shopRemoveItem(id)
    }
  }

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
      <ShopProvider>
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
                          cart={cart}
                          onAdd={this.addToCart}
                          items={items && attachImagesToEntries(items)}
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
      </ShopProvider>
    );
  }
}

Shop.defaultProps = {
  canCart: false,
  cart: [],
}

const mapStateToProps = ({ shop }) => ({
  cart: shop.cart,
  canCart: !!(shop.cart.length && shop.cart.length > 0),
})

const mapDispatchToProps = dispatch => ({
  shopAddItem: data => dispatch(shopAddItem(data)),
  shopEditItem: (id, data) => dispatch(shopEditItem(id, data)),
  shopRemoveItem: id => dispatch(shopRemoveItem(id)),
  shopRefresh: () => dispatch(shopRefresh()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));