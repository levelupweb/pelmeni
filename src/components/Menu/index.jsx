import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { LayoutContext } from "../Layout/context";
import styles from "./styles.less";

import {
  Menu,
  Container,
  Icon,
} from "semantic-ui-react";

const MenuWrapper = ({ activeItem, handleExpand }) => (
  <div className={styles.wrapper}>
    <Container>
      <Menu className={styles.menu} secondary pointing inverted size="large" fluid>
        <Menu.Item 
          onClick={() => handleExpand(true)}
          className={styles.toc}
        >
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Item active={activeItem === "/"}>
          <Link to="/">
            Главная
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "/shop"}>
          <Link to="/shop">
            Выберите продукты
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "/dostavka"}>
          <Link to="/dostavka">
            Доставка и оплата
          </Link>
        </Menu.Item>
        <Menu.Item active={activeItem === "/contact"}>
          <Link to="/contact">
            Связаться с нами
          </Link>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item className={styles.widget}>
            <CartWidget />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  </div>
);

MenuWrapper.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  activeItem: PropTypes.string
}

MenuWrapper.defaultProps = {
  activeItem: null,
}

const EnhancedMenuWrapper = () => (
  <LayoutContext.Consumer>
    {({ handleExpand, activeItem }) => (
      <MenuWrapper 
        handleExpand={handleExpand}
        activeItem={activeItem}
      />
    )}
  </LayoutContext.Consumer>
)

export default EnhancedMenuWrapper;