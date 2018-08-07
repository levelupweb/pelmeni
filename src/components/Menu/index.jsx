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

const MenuWrapper = ({ 
  activeItem, 
  handleExpand, 
  isExpanded 
}) => (
  <Menu 
    fixed="top" 
    className={`
      ${styles.menu}
      ${isExpanded && styles.hidden}
    `} 
    secondary 
    pointing 
    inverted 
    size="large" 
    fluid
  >
    <Container>
      <Menu.Item 
        onClick={() => handleExpand(true)}
        className={styles.toc}
      >
        <Icon name="sidebar" />
      </Menu.Item>
      <Menu.Item 
        active={activeItem === "/"} 
        className={styles.logo} 
      >
        <Link to="/">
          Класс!ные
        </Link>
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
    </Container>
  </Menu>
);

MenuWrapper.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  isExpanded: PropTypes.bool,
}

MenuWrapper.defaultProps = {
  activeItem: null,
  isExpanded: false,
}

const EnhancedMenuWrapper = () => (
  <LayoutContext.Consumer>
    {({ handleExpand, activeItem, isExpanded }) => (
      <MenuWrapper 
        handleExpand={handleExpand}
        activeItem={activeItem}
        isExpanded={isExpanded}
      />
    )}
  </LayoutContext.Consumer>
)

export default EnhancedMenuWrapper;