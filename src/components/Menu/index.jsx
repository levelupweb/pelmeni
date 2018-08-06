import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { menuToggle } from "../SidebarMenu/actions";
import { withRouter } from "react-router"
import CartWidget from "../CartWidget";
import "./styles.css";

import {
  Menu,
  Container,
  Icon,
  Button,
} from "semantic-ui-react";

class MenuWrapper extends React.Component {
  render() {
    const {
      menuToggle,
      location: {
        pathname
      }
    } = this.props;

    return (
      <div className="main-menu">
        <Container>
          <Menu
            secondary
            pointing
            inverted
            size="large"
            fluid
          >
            <Button
              icon
              className="toc"
              onClick={menuToggle}
            >
              <Icon
                name="sidebar"
              />
            </Button>
            <Link to="/">
              <Menu.Item active={pathname === "/"}>
                Главная
              </Menu.Item>
            </Link>
            <Link to="/shop">
              <Menu.Item
                className="primary"
                active={pathname === "/shop"}
              >
                Выберите продукты
              </Menu.Item>
            </Link>
            <Link to="/dostavka">
              <Menu.Item active={pathname === "/dostavka"}>
                Доставка и оплата
              </Menu.Item>
            </Link>
            <Link to="/contact">
              <Menu.Item active={pathname === "/contact"}>
                Связаться с нами
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Menu.Item>
                <CartWidget />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    )
  }
}

export default withRouter(connect(null, dispatch => ({
  menuToggle: () => dispatch(menuToggle())
}))(MenuWrapper));