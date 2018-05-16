import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { menuToggle } from "../SidebarMenu/actions";
import { withRouter } from 'react-router'
import CartWidget from "../CartWidget";
import "./styles.css";

class Menu extends React.Component {
  render() {
    const { menuToggle } = this.props;
    const { pathname } = this.props.location;
    return (
      <div className="main-menu">
        <div className="ui container">
          <div className="ui fluid secondary pointing inverted menu large">
            <a className="toc item" id="open_sidebar">
              <i className="toc-icon" onClick={() => menuToggle && menuToggle()} style={{fontSize: "35px"}} className="sidebar icon"></i>
            </a>
            <Link to='/' className={`${pathname === "/" && "active"} item`}>
              Главная
            </Link>
            <Link 
              to='/shop' className={`${pathname === "/shop" && "active"} item`}
            >
              <span ref={(node) => node && node.style.setProperty("color", "#af9063", "important")} >
                Выберите продукты
              </span>
            </Link>
            <Link to='/dostavka' className={`${pathname === "/dostavka" && "active"} item`}>
              Доставка и оплата
            </Link>
            <Link to='/contact' className={`${pathname === "/contact" && "active"} item`}>
              Связаться с нами
            </Link>
            <div className="right menu">
              <CartWidget />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, dispatch => ({
  menuToggle: () => dispatch(menuToggle())
}))(Menu));