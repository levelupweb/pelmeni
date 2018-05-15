import React from "react";

const loadDependencies = () => {
  require("jquery");
  require("../../../semantic/semantic/dist/components/sidebar");
  require("../../../semantic/semantic/dist/components/sidebar.css");
}

class SidebarMenu extends React.Component { 
  componentDidMount() {
    if (typeof window === "object") {
      loadDependencies();
    }
  }

  loadSidebar() {
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;
  }

  render() {
    return (
      <div 
        className="ui vertical inverted sidebar menu left uncover" 
        id="sidebar"
      >
        <a className="item" href="/">
          Главная
        </a>
        <a className="item" href="/catalog">
          Каталог продукции
        </a>
        <a className="item"  href="/#contact">
          Связаться с нами
        </a>
        <a className="ui item" href="/shop">
          Купить продукцию
        </a>
        <a className="item" href="/dostavka">
          Условия доставки
        </a>
      </div>
    )
  }
}

export default SidebarMenu;