import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "@components/Card/context";
import { ShopContext } from "@components/Shop/context";
import { Button } from "semantic-ui-react";

const Submit = ({ currentItem, amount, handleAmount, category, addToCart }) => (
	<Button
		primary
		fluid
		onClick={() =>
			addToCart({
				...currentItem,
				id: currentItem._id,
				title: category.title,
				description: category.description,
				amount
			}).then(() => handleAmount(1))
		}
	>
		В корзину
	</Button>
);

Submit.propTypes = {
	currentItem: PropTypes.shape({
		weight: PropTypes.number,
		price: PropTypes.number,
		category: PropTypes.string
	}),
	amount: PropTypes.number,
	handleAmount: PropTypes.func.isRequired,
	category: PropTypes.shape({
		title: PropTypes.string
	}),
	addToCart: PropTypes.func.isRequired
};

const EnhancedSubmit = () => (
	<ShopContext.Consumer>
		{({ addToCart }) => (
			<CardContext.Consumer>
				{({ currentItem, amount, category, handleAmount }) => (
					<Submit
						currentItem={currentItem}
						amount={amount}
						category={category}
						handleAmount={handleAmount}
						addToCart={addToCart}
					/>
				)}
			</CardContext.Consumer>
		)}
	</ShopContext.Consumer>
);

export default EnhancedSubmit;
