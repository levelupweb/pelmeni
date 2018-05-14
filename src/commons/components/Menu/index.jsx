import React from "react";
import Cart from "../Cart";
import styles from "./styles";
import common from "./common.css";

const Menu = () => {
  const { pathname } = window.location;
  
  return (
    <div className="ui fluid secondary pointing inverted menu large">
      <a className="toc item" id="open_sidebar">
        <i  style={styles.toc} className="sidebar icon"></i>
      </a>
      <a className={`${pathname === "/" && "active"} item`} href="/">
        Главная
      </a>
      <a 
        ref={(node) => node && node.style.setProperty("color", "#af9063", "important")} 
        className={`${pathname === "/catalog" && "active"} item`}  
        href="/catalog"
      >
        Выберите продукты
      </a>
      <a className={`${pathname === "/dostavka" && "active"} item`} href="/dostavka">
        Доставка и оплата
      </a>
      <a className={`${pathname === "/#contact" && "active"} item`} href="/#contact">
        Связаться с нами
      </a>
      <div className="right menu">
        <Cart />
      </div>
    </div>
  )
}

export default Menu;