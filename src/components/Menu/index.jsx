import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import { LayoutContext } from "../Layout/context";
import { Menu, Container, Icon, Responsive } from "semantic-ui-react";
import styles from "./styles.less";

const MenuWrapper = ({ activeItem, handleExpand, isExpanded }) => (
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
			<Responsive
				as={Menu.Item}
				className={styles.toc}
				maxWidth={1000}
				onClick={() => handleExpand(true)}
			>
				<Icon name="sidebar" />
			</Responsive>
			<Responsive as={React.Fragment} minWidth={1000}>
				<Menu.Item active={activeItem === "/"}>
					<Link to="/">Главная</Link>
				</Menu.Item>
				<Menu.Item active={activeItem === "/shop"}>
					<Link to="/shop">Выберите продукты</Link>
				</Menu.Item>
				<Menu.Item active={activeItem === "/dostavka"}>
					<Link to="/dostavka">Доставка и оплата</Link>
				</Menu.Item>
				<Menu.Item active={activeItem === "/contact"}>
					<Link to="/contact">Связаться с нами</Link>
				</Menu.Item>
			</Responsive>
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
	isExpanded: PropTypes.bool
};

MenuWrapper.defaultProps = {
	activeItem: null,
	isExpanded: false
};

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
);

export default EnhancedMenuWrapper;
