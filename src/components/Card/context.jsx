import React from "react";
import PropTypes from "prop-types";

export const CardContext = React.createContext();

const getDefaultItem = category =>
	category.items.sort((a, b) => a.price > b.price)[0];

class CardProviderClass extends React.Component {
	constructor(props) {
		super(props);
		this.handleItem = this.handleItem.bind(this);
		this.handleAmount = this.handleAmount.bind(this);
		this.state = {
			selectedItem: getDefaultItem(props.category)._id,
			amount: 1
		};
	}

	handleItem(selectedItem) {
		this.setState({ selectedItem });
	}

	handleAmount(amount) {
		this.setState({ amount });
	}

	getCurrentItem() {
		const { category } = this.props;
		const { selectedItem } = this.state;

		return category.items.filter(item => item._id === selectedItem)[0];
	}

	render() {
		const {
			state: { selectedItem, amount },
			props: { category, children },
			handleItem,
			handleAmount
		} = this;

		const currentItem = this.getCurrentItem();

		return (
			<CardContext.Provider
				value={{
					selectedItem,
					category,
					handleItem,
					handleAmount,
					amount,
					currentItem
				}}
			>
				{children}
			</CardContext.Provider>
		);
	}
}

CardProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	category: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				weight: PropTypes.number,
				price: PropTypes.string
			})
		).isRequired
	}).isRequired
};

export const CardProvider = CardProviderClass;
