import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Items from "./components/Items";
import Form from "./components/Form";
import styles from "./styles.less";
import { Switch, Route } from "react-router-dom";
import { Button, Loader, Header } from "semantic-ui-react";
import { ShopContext } from "./context";

const Shop = ({ items, isFetching, error }) => {
	if (error && error.message) {
		return (
			<div className={styles.centered}>
				<Header textAlign="center" inverted as="h3">
					Непредвиденная ошибка
					<Header.Subheader>{error.message}</Header.Subheader>
				</Header>
			</div>
		);
	}

	if (!items || isFetching) {
		return (
			<div className={styles.centered}>
				<Loader active inline centered>
					Подождите, идёт загрузка
				</Loader>
			</div>
		);
	}

	if (items) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<Switch>
						<Route exact path="/shop" render={() => <Items />} />
						<Route exact path="/shop/cart" render={() => <Confirmation />} />
						<Route exact path="/shop/form" render={() => <Form />} />
						<div className={styles.center}>
							<Route
								exact
								path="/shop/success"
								render={() => (
									<Link to="/">
										<Button primary size="large">
											Вернуться на главную
										</Button>
									</Link>
								)}
							/>
						</div>
					</Switch>
				</div>
			</div>
		);
	}

	return null;
};

Shop.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			price: PropTypes.number.isRequired,
			weight: PropTypes.number.isRequired
		})
	),
	error: PropTypes.shape({
		message: PropTypes.string.isRequired
	}),
	isFetching: PropTypes.bool
};

Shop.defaultProps = {
	isFetching: false,
	error: null,
	items: null
};

const EnhancedShop = () => (
	<ShopContext.Consumer>
		{({ items, isFetching, error }) => (
			<Shop items={items} isFetching={isFetching} error={error} />
		)}
	</ShopContext.Consumer>
);

export default EnhancedShop;
