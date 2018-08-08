import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { PanelContext } from "../../context";
import config from "@utils/config";
import { TOKEN } from "@src/consts";
import cookies from "js-cookie";
import parseError from "@utils/parseError";
import { CATEGORY_ITEMS } from "@consts/category";
import { ITEM_CATEGORY } from "@consts/item";
export const PanelItemContext = React.createContext();

class PanelItemClass extends React.Component {
	constructor(props) {
		super(props);
		this.handleEditing = this.handleEditing.bind(this);
		this.handleEditingVariation = this.handleEditingVariation.bind(this);
		this.getValue = this.getValue.bind(this);
		this.getFieldError = this.getFieldError.bind(this);
		this.getVariationFieldError = this.getVariationFieldError.bind(this);
		this.cancelEditing = this.cancelEditing.bind(this);
		this.cancelEditingVariation = this.cancelEditingVariation.bind(this);
		this.handleTemporaryItem = this.handleTemporaryItem.bind(this);
		this.updateItemStart = this.updateItemStart.bind(this);
		this.updateItemProcess = this.updateItemProcess.bind(this);
		this.updateItemSuccess = this.updateItemSuccess.bind(this);
		this.getTemporaryItemVariationValue = this.getTemporaryItemVariationValue.bind(
			this
		);
		this.handleTemporaryItemVariation = this.handleTemporaryItemVariation.bind(
			this
		);
		this.updateItemStart = this.updateItemStart.bind(this);
		this.updateItemProcess = this.updateItemProcess.bind(this);
		this.updateItemSuccess = this.updateItemSuccess.bind(this);
		this.updateItemFail = this.updateItemFail.bind(this);
		this.updateVariationStart = this.updateVariationStart.bind(this);
		this.updateVariationProcess = this.updateVariationProcess.bind(this);
		this.updateVariationSuccess = this.updateVariationSuccess.bind(this);
		this.updateVariationFail = this.updateVariationFail.bind(this);
		this.updateVariationFail = this.updateVariationFail.bind(this);
		this.state = {
			currentlyEditing: null,
			temporaryItem: {},
			isHydrating: false,
			validationErrors: null,
			error: null,
			temporaryItemVariation: {},
			currentlyEditingVariation: null,
			variationValidationErrors: null,
			variationError: null
		};
	}

	handleEditingVariation(currentlyEditingVariation) {
		this.setState({ currentlyEditingVariation });
	}

	cancelEditingVariation() {
		this.setState({
			currentlyEditingVariation: null,
			temporaryItemVariation: {}
		});
	}

	handleTemporaryItemVariation(data) {
		const { temporaryItemVariation } = this.state;

		this.setState({
			temporaryItemVariation: {
				...temporaryItemVariation,
				...data
			}
		});
	}

	getTemporaryItemVariationValue(field) {
		const {
			temporaryItemVariation,
			currentlyEditing,
			currentlyEditingVariation
		} = this.state;
		const { getItemById } = this.props;

		if (temporaryItemVariation[field] !== undefined) {
			return temporaryItemVariation[field];
		}

		const currentItem = getItemById(currentlyEditing);

		if (currentItem) {
			const currentVariation = currentItem.items.filter(
				item => item._id === currentlyEditingVariation
			)[0];
			if (currentVariation) {
				return currentVariation[field];
			}
		}

		return null;
	}

	/**
	 * Updating item lifecycle
	 */

	updateItemStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState(
				{ isHydrating: true, error: null, validationErrors: null },
				() => this.updateItemProcess()
			);
		}
	}

	updateItemProcess() {
		const { temporaryItem, currentlyEditing } = this.state;

		axios
			.put(
				`${config.url}/category/update?id=${currentlyEditing}`,
				temporaryItem,
				{
					headers: {
						authorization: cookies.get(TOKEN)
					}
				}
			)
			.then(this.updateItemSuccess)
			.catch(this.updateItemFail);
	}

	updateItemSuccess({ data }) {
		const { updateItemById } = this.props;

		this.setState(
			{
				isHydrating: false,
				currentlyEditing: null,
				temporaryItem: {}
			},
			/**
			 * Finally update item in items list
			 */
			() => updateItemById(data._id, data)
		);
	}

	updateItemFail(reason) {
		const error = parseError(reason);

		if (error.message) {
			this.setState({
				error,
				isHydrating: false
			});
			return;
		}

		this.setState({
			validationErrors: error,
			isHydrating: false
		});
	}

	/**
	 * Updating variation lifecycle
	 */

	updateVariationStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState(
				{
					isHydrating: true,
					variationError: null,
					variationValidationErrors: null
				},
				() => this.updateVariationProcess()
			);
		}
	}

	updateVariationProcess() {
		const { temporaryItemVariation, currentlyEditingVariation } = this.state;

		axios
			.put(
				`${config.url}/item/update?id=${currentlyEditingVariation}`,
				temporaryItemVariation,
				{
					headers: {
						authorization: cookies.get(TOKEN)
					}
				}
			)
			.then(this.updateVariationSuccess)
			.catch(this.updateVariationFail);
	}

	updateVariationSuccess({ data }) {
		const { updateItemById, getItemById } = this.props;
		const { currentlyEditing, currentlyEditingVariation } = this.state;

		this.setState(
			{
				isHydrating: false,
				temporaryItemVariation: {},
				currentlyEditingVariation: null
			},
			() => {
				const item = getItemById(currentlyEditing);
				/**
				 * Update inner items of category
				 */

				updateItemById(data[ITEM_CATEGORY], {
					...item,
					[CATEGORY_ITEMS]: item[CATEGORY_ITEMS].map(item => {
						if (item._id === currentlyEditingVariation) {
							console.log(data);
							return data;
						}
						return item;
					})
				});
			}
		);
	}

	updateVariationFail(reason) {
		const error = parseError(reason);

		if (error.message) {
			this.setState({
				variationError: error,
				isHydrating: false
			});
			return;
		}

		this.setState({
			variationValidationErrors: error,
			isHydrating: false
		});
	}

	handleEditing(currentlyEditing) {
		this.setState({
			currentlyEditing
		});
	}

	cancelEditing() {
		this.setState({
			currentlyEditing: null,
			temporaryItem: {}
		});
	}

	getValue(field) {
		const { temporaryItem, currentlyEditing } = this.state;
		const { getItemById } = this.props;

		if (temporaryItem[field] !== undefined) {
			return temporaryItem[field];
		}

		const currentItem = getItemById(currentlyEditing);

		if (currentItem) {
			return currentItem[field];
		}

		return null;
	}

	handleTemporaryItem(data) {
		const { temporaryItem } = this.state;

		this.setState({
			temporaryItem: {
				...temporaryItem,
				...data
			}
		});
	}

	getFieldError(field) {
		const { validationErrors } = this.state;

		if (
			validationErrors &&
			validationErrors[field] &&
			validationErrors[field].msg
		) {
			return validationErrors[field].msg;
		}

		return null;
	}

	getVariationFieldError(field) {
		const { variationValidationErrors } = this.state;

		if (
			variationValidationErrors &&
			variationValidationErrors[field] &&
			variationValidationErrors[field].msg
		) {
			return variationValidationErrors[field].msg;
		}

		return null;
	}

	render() {
		const {
			props: { children },
			state: {
				currentlyEditing,
				temporaryItem,
				isHydrating,
				error,
				currentlyEditingVariation,
				variationValidationErrors,
				variationError
			},
			handleEditing,
			getValue,
			getFieldError,
			updateItemStart,
			handleTemporaryItem,
			cancelEditing,
			handleEditingVariation,
			cancelEditingVariation,
			handleTemporaryItemVariation,
			getTemporaryItemVariationValue,
			getVariationFieldError,
			updateVariationStart
		} = this;

		return (
			<PanelItemContext.Provider
				value={{
					handleEditing,
					currentlyEditing,
					temporaryItem,
					isHydrating,
					getValue,
					handleTemporaryItem,
					getFieldError,
					updateItemStart,
					cancelEditing,
					handleEditingVariation,
					cancelEditingVariation,
					currentlyEditingVariation,
					handleTemporaryItemVariation,
					updateVariationStart,
					getTemporaryItemVariationValue,
					variationValidationErrors,
					getVariationFieldError,
					variationError,
					error
				}}
			>
				{children}
			</PanelItemContext.Provider>
		);
	}
}

PanelItemClass.propTypes = {
	children: PropTypes.element.isRequired,
	getItemById: PropTypes.func.isRequired,
	updateItemById: PropTypes.func.isRequired
};

const EnhancedPanelItemClass = ({ children }) => (
	<PanelContext.Consumer>
		{({ getItemById, updateItemById }) => (
			<PanelItemClass getItemById={getItemById} updateItemById={updateItemById}>
				{children}
			</PanelItemClass>
		)}
	</PanelContext.Consumer>
);

EnhancedPanelItemClass.propTypes = {
	children: PropTypes.element.isRequired
};

export const PanelItemProvider = EnhancedPanelItemClass;
