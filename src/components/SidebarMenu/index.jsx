import React from "react";
import { connect } from "react-redux";

const loadDependencies = () => {
  require("jquery");
  require("../../../semantic/semantic/dist/components/sidebar");
}

class SidebarMenu extends React.Component { 
  componentDidMount() {
    if (typeof window === "object") {
      loadDependencies();
    }
  }

  componentDidUpdate(prevProps) {
    const { isActive } = this.props;

    if (isActive !== prevProps.isActive && isActive) {
      $('.ui.sidebar')
        .sidebar("show")
      ;
    } 

    if (isActive !== prevProps.isActive && !isActive) {
      $('.ui.sidebar')
        .sidebar("hide")
      ;
    } 
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
        <a className="item" href="/shop">
          Каталог продукции
        </a>
        <a className="item"  href="/contact">
          Связаться с нами
        </a>
        <a className="item" href="/dostavka">
          Условия доставки
        </a>
      </div>
    )
  }
}

const mapStateToProps = ({ menu }) => ({
  isActive: menu.isActive
})

export default connect(mapStateToProps)(SidebarMenu);