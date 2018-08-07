import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

export const LayoutContext = React.createContext();

class LayoutProviderClass extends React.Component {
	constructor(props) {
		super(props);
		this.handleExpand = this.handleExpand.bind(this);
		this.state = {
			isExpanded: false
		};
	}

	handleExpand(isExpanded) {
		this.setState({ isExpanded });
	}

	render() {
		const {
			props: {
				children,
				location: { pathname }
			},
			state: { isExpanded },
			handleExpand
		} = this;

		return (
			<LayoutContext.Provider
				value={{
					isExpanded,
					handleExpand,
					activeItem: pathname
				}}
			>
				{children}
			</LayoutContext.Provider>
		);
	}
}

LayoutProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export const LayoutProvider = withRouter(LayoutProviderClass);
