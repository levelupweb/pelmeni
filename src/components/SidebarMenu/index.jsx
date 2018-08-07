import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LayoutContext } from "../Layout/context";
import styles from "./styles.less";

import { Menu, Sidebar, Icon } from "semantic-ui-react";

const SidebarMenu = ({ activeItem, isExpanded, handleExpand }) => (
	<Sidebar
		animation="push"
		inverted
		className={styles.wrapper}
		as={Menu}
		onHide={() => handleExpand(false)}
		vertical
		visible={isExpanded}
		width="wide"
	>
		<Menu.Item as="a" onClick={() => handleExpand(false)}>
			<Icon name="angle left" /> Закрыть меню
		</Menu.Item>
		<Link to="/" onClick={() => handleExpand(false)}>
			<Menu.Item as="a" active={activeItem === "/"}>
				Главная
			</Menu.Item>
		</Link>
		<Link to="/shop" onClick={() => handleExpand(false)}>
			<Menu.Item as="a" active={activeItem === "/shop"}>
				Каталог продукции
			</Menu.Item>
		</Link>
		<Link to="/contact" onClick={() => handleExpand(false)}>
			<Menu.Item as="a" active={activeItem === "/contact"}>
				Связаться с нами
			</Menu.Item>
		</Link>
		<Link to="/" onClick={() => handleExpand(false)}>
			<Menu.Item as="a" active={activeItem === "/dostavka"}>
				Условия доставки
			</Menu.Item>
		</Link>
	</Sidebar>
);

SidebarMenu.propTypes = {
	isExpanded: PropTypes.bool,
	handleExpand: PropTypes.func.isRequired,
	activeItem: PropTypes.string
};

SidebarMenu.defaultProps = {
	isExpanded: false,
	activeItem: null
};

const EnhancedSidebarMenu = () => (
	<LayoutContext.Consumer>
		{({ activeItem, isExpanded, handleExpand }) => (
			<SidebarMenu
				activeItem={activeItem}
				isExpanded={isExpanded}
				handleExpand={handleExpand}
			/>
		)}
	</LayoutContext.Consumer>
);

export default EnhancedSidebarMenu;
