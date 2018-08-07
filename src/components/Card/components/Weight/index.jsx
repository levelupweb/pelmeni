import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "@components/Card/context";

import { Dropdown } from "semantic-ui-react";

const getItemIdByWeight = (category, weight) => {
	const item = category.items.filter(item => item.weight === Number(weight))[0];

	if (item) {
		return item._id;
	}

	return null;
};

const Weight = ({ category, currentItem, handleItem }) => (
	<Dropdown
		options={category.items.map(item => ({
			key: item.weight,
			text: `${item.weight} гр`,
			value: item.weight
		}))}
		fluid
		selection
		value={currentItem.weight}
		placeholder="Выберите вес"
		onChange={(_, { value }) => {
			const nextItem = getItemIdByWeight(category, value);

			if (nextItem) {
				handleItem(nextItem);
			}
		}}
	/>
);

Weight.propTypes = {
	category: PropTypes.shape({
		items: PropTypes.arrayOf(
			PropTypes.shape({
				weight: PropTypes.number,
				price: PropTypes.number,
				category: PropTypes.string
			})
		)
	}),
	currentItem: PropTypes.shape({
		weight: PropTypes.number,
		price: PropTypes.number,
		category: PropTypes.string
	}),
	handleItem: PropTypes.func.isRequired,
	selectedItem: PropTypes.string
};

Weight.defaultProps = {
	selectedItem: null,
	currentItem: null,
	category: null
};

const EnhancedWeight = () => (
	<CardContext.Consumer>
		{({ category, currentItem, handleItem, selectedItem }) => (
			<Weight
				category={category}
				currentItem={currentItem}
				handleItem={handleItem}
				selectedItem={selectedItem}
			/>
		)}
	</CardContext.Consumer>
);

export default EnhancedWeight;
