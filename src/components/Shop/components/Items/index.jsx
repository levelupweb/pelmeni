import React from "react";
import PropTypes from "prop-types";
import CardList from "@components/CardList";
import { ShopContext } from "../../context";
import { attachImagesToEntries } from "./utils";

const Items = ({ items }) => (
	<CardList
		itemsWithImages={items && attachImagesToEntries(items)}
		columns="two"
	/>
); 

Items.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		_id: PropTypes.string,
		description: PropTypes.string,
		title: PropTypes.string,
		items: PropTypes.arrayOf(PropTypes.shape({
			_id: PropTypes.string,
			weight: PropTypes.number,
			price: PropTypes.number,
			category: PropTypes.string
		}))
	}))
}

Items.defaultProps = {
	items: [],
}

const EnhancedItems = () => (
	<ShopContext.Consumer>
		{({ items }) => <Items items={items} />}
	</ShopContext.Consumer>
);

export default EnhancedItems;