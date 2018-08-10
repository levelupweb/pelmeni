import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Confirmation from "./components/Confirmation";
import Items from "./components/Items";
import ErrorWrapper from "./components/Error";
import Form from "./components/Form";
import Loader from "./components/Loader";
import styles from "./styles.less";
import { Switch, Route } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { ShopContext } from "./context";

const Shop = ({ items, isFetching, error }) => {
	if (error) {
		return <ErrorWrapper error={error} />;
	}

	if (!items || isFetching) {
		return <Loader active inline centered />;
	}

	if (items) {
		return (
			<div className={styles.wrapper}>
				<Switch>
					<Route
						exact
						path="/shop"
						render={() => <Items />}
					/>
					<Route
						exact
						path="/shop/cart"
						render={() => <Confirmation />}
					/>
					<Route
						exact
						path="/shop/form"
						render={() => <Form />}
					/>
					<Route
						exact 
						path="/shop/success"
						render={() =>
							<div className={styles.center}>
								<Link to="/">
									<Button primary size="large">
									Вернуться на главную
									</Button>
								</Link>
							</div>}
					/>
				</Switch>
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
	error: null,
	isFetching: false,
	items: null
};

const EnhancedShop = () =>
	<ShopContext.Consumer>
		{({ items, isFetching, error }) =>
			<Shop items={items} isFetching={isFetching} error={error} />}
	</ShopContext.Consumer>;

export default EnhancedShop;
