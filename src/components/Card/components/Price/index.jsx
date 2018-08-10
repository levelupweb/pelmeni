import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "@components/Card/context";
import RealPrice from "./components/RealPrice";
import MarketPrice from "./components/MarketPrice";

function Price({ currentItem, amount }) {
	if (!currentItem) {
		return null;
	}

	return (
		<React.Fragment>
			<RealPrice price={currentItem.price} amount={amount} />
			<MarketPrice price={currentItem.price} />
		</React.Fragment>
	);
}

Price.propTypes = {
	amount: PropTypes.number,
	currentItem: PropTypes.shape({
		weight: PropTypes.number,
		price: PropTypes.number,
		category: PropTypes.string
	})
};

Price.defaultProps = {
	amount: 1,
	currentItem: null
};

export default function EnhancedPrice() {
	return (
		<CardContext.Consumer>
			{({ currentItem, amount }) =>
				<Price currentItem={currentItem} amount={amount} />}
		</CardContext.Consumer>
	);
}
