import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "@components/Card/context";
import styles from "./styles.less";

const Price = ({ currentItem, amount }) => (
	<React.Fragment>
		<p className={styles.real}>{currentItem.price * amount} руб.</p>
		<p className={styles.market}>
			<span>Цена в магазинах за ед.</span>
			<span>{currentItem.price * 1.3} руб.</span>
		</p>
	</React.Fragment>
);

Price.propTypes = {
	amount: PropTypes.number,
	currentItem: PropTypes.shape({
		weight: PropTypes.number,
		price: PropTypes.number,
		category: PropTypes.string
	})
};

Price.defaultProps = {
	amount: 0,
	currentItem: 0
};

const EnhancedPrice = () => (
	<CardContext.Consumer>
		{({ currentItem, amount }) => (
			<Price currentItem={currentItem} amount={amount} />
		)}
	</CardContext.Consumer>
);

export default EnhancedPrice;
