import React from "react";
import PropTypes from "prop-types";

export const PanelContext = React.createContext();

class PanelProviderClass extends React.Component {
	constructor(props) {
		super(props);
		this.handleItems = this.handleItems.bind(this);
		this.getItemById = this.getItemById.bind(this);
		this.updateItemById = this.updateItemById.bind(this);
		this.state = {
			items: null
		};
	}

	handleItems(items) {
		this.setState({
			items
		});
	}

	updateItemById(id, data) {
		const { items } = this.state;

		this.setState({
			items: items.map(item => {
				if (item._id === id) {
					return {
						...item,
						...data
					};
				}
				return item;
			})
		});
	}

	getItemById(id) {
		const { items } = this.state;

		return items.filter(item => item._id === id)[0];
	}

	render() {
		const {
			props: { children },
			state: { items, currentlyEditing },
			handleItems,
			getItemById,
			updateItemById
		} = this;

		return (
			<PanelContext.Provider
				value={{
					items,
					handleItems,
					currentlyEditing,
					getItemById,
					updateItemById
				}}
			>
				{children}
			</PanelContext.Provider>
		);
	}
}

PanelProviderClass.propTypes = {
	children: PropTypes.element.isRequired
};

export const PanelProvider = PanelProviderClass;
