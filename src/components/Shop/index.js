import React, { Component } from "react";
import Header from "./components/Header";
import Confirmation from "./components/Confirmation";
import Items from "./components/Items";
import Form from "./components/Form";
import styles from "./styles.less";

import { 
  Switch, 
  Route, 
  withRouter,
} from "react-router-dom";

const Shop = ({ 
  location: {
    pathname
  }
}) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <Header
        pathname={pathname} 
      />
    </div>
    <div className={styles.content}>
      <Switch>
        <Route 
          exact
          path="/shop"
          render={() => <Items />} 
        />
        <Route 
          exact
          path="/shop/cart"
          render={() => <Confirmation />}
        />
        <Route
          exact
          path="/shop/form"
          render={() => <Form />}
        />
      </Switch>
    </div>
  </div>
);

export default withRouter(Shop);