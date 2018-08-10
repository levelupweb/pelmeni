import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import config from "@utils/config";
import { TOKEN } from "@src/consts";
import cookies from "js-cookie";
import { CATEGORY_ITEMS } from "@consts/category";
import parseError from "@utils/parseError";

export const ItemsContext = React.createContext();

export class ItemsProvider extends React.Component {
	constructor(props) {
		super(props);
		this.fetchItemsStart = this.fetchItemsStart.bind(this);
		this.fetchItemsStartProcess = this.fetchItemsStartProcess.bind(this);
		this.fetchItemsSuccess = this.fetchItemsSuccess.bind(this);
		this.fetchItemsFail = this.fetchItemsFail.bind(this);
		this.getCategoryUpdatingError = this.getCategoryUpdatingError.bind(this);
		this.handleCategoryTemporary = this.handleCategoryTemporary.bind(this);
		this.handleCategoryEditing = this.handleCategoryEditing.bind(this);
		this.handleCategoryUpdating = this.handleCategoryUpdating.bind(this);
		this.handleItemUpdating = this.handleItemUpdating.bind(this);
		this.getItemUpdatingError = this.getItemUpdatingError.bind(this);
		this.updateItemStart = this.updateItemStart.bind(this);
		this.handleItemTemporary = this.handleItemTemporary.bind(this);
		this.handleItemEditing = this.handleItemEditing.bind(this);
		this.updateItemProcess = this.updateItemProcess.bind(this);
		this.updateItemSuccess = this.updateItemSuccess.bind(this);
		this.updateItemFail = this.updateItemFail.bind(this);
		this.updateCategoryStart = this.updateCategoryStart.bind(this);
		this.updateCategoryProcess = this.updateCategoryProcess.bind(this);
		this.updateCategorySuccess = this.updateCategorySuccess.bind(this);
		this.updateCategoryFail = this.updateCategoryFail.bind(this);
		this.state = {
			categoryUpdating: {
				isHydrating: false,
				id: null,
				error: null,
				validationErrors: null,
				temporary: {}
			},
			itemUpdating: {
				isHydrating: false,
				id: null,
				error: null,
				validationErrors: null,
				temporary: {}
			},
			fetching: {
				isHydrating: false,
				error: null
			},
			items: null
		};
	}

	/**
   * Start fetching when 
   * component is mounted
   */

	componentDidMount() {
		this.fetchItemsStart();
	}

	/**
   * Fetching lifecycle
   */

	fetchItemsStart() {
		const { fetching, items } = this.state;

		if (!fetching.isHydrating && !items) {
			this.setState(
				{ fetching: { ...fetching, isHydrating: true, error: null } },
				() => this.fetchItemsStartProcess()
			);
		}
	}

	fetchItemsStartProcess() {
		return axios
			.get(config.url + "/category/all")
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess({ data }) {
		const { fetching } = this.state;

		this.setState({
			items: data,
			fetching: {
				...fetching,
				isHydrating: false
			}
		});
	}

	fetchItemsFail(reason) {
		const error = parseError(reason);

		this.setState({
			fetching: {
				error,
				isHydrating: false
			}
		});
	}

	/**
   * Updating lifecycle
   * and handlers
   */

	getCategoryUpdatingError(field) {
		const { categoryUpdating } = this.state;

		if (categoryUpdating.validationErrors) {
			return categoryUpdating.validationErrors[field];
		}
		return null;
	} 

	handleCategoryUpdating(data, cb) {
		const { categoryUpdating } = this.state;

		this.setState(
			{
				categoryUpdating: {
					...categoryUpdating,
					...data
				}
			},
			() => cb && cb()
		);
	}
  
	handleCategoryTemporary(data) {
		const { temporary } = this.state.categoryUpdating;

		this.handleCategoryUpdating({
			temporary: {
				...temporary,
				...data
			}
		});
	}

	handleCategoryEditing(id) {
		this.handleCategoryUpdating({
			id,
			temporary: {}
		});
	}

	updateCategoryStart() {
		const { categoryUpdating } = this.state;

		if (!categoryUpdating.isHydrating) {
			this.handleCategoryUpdating(
				{
					isHydrating: true,
					error: null,
					validationErrors: null,
				},
				this.updateCategoryProcess
			);
		}
	}

	updateCategoryProcess() {
		const { categoryUpdating } = this.state;

		return axios
			.put(
				`${config.url}/category/update?id=${categoryUpdating.id}`,
				categoryUpdating.temporary,
				{
					headers: {
						authorization: cookies.get(TOKEN)
					}
				}
			)
			.then(this.updateCategorySuccess)
			.catch(this.updateCategoryFail);
	}

	updateCategorySuccess({ data }) {
		const { categoryUpdating, items } = this.state;

		this.setState({
			categoryUpdating: {
				...categoryUpdating,
				id: null,
				isHydrating: false,
				temporary: {}
			},
			items: items.map(item => 
				item._id === data._id ? data : item
			)
		});
	}

	updateCategoryFail(reason) {
		const error = parseError(reason);

		if (error.message) {
			this.handleCategoryUpdating({
				error,
				isHydrating: false
			});
			return;
		}

		this.handleCategoryUpdating({
			validationErrors: error,
			isHydrating: false
		});
	}

	/**
   * Item updating lifecycle
   * and handlers
   */

	getItemUpdatingError(field) {
		const { itemUpdating } = this.state;

		if (itemUpdating.validationErrors) {
			return itemUpdating.validationErrors[field];
		}
    
		return null;
	}

	handleItemEditing(id) {
		this.handleItemUpdating({
			id,
			temporary: {}
		});
	}
  
	handleItemTemporary(data) {
		const { temporary } = this.state.itemUpdating;

		this.handleItemUpdating({
			temporary: {
				...temporary,
				...data
			}
		});
	}

	handleItemUpdating(data, cb) {
		const { itemUpdating } = this.state;

		this.setState(
			{
				itemUpdating: {
					...itemUpdating,
					...data
				}
			},
			cb
		);
	}


	updateItemStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.handleItemUpdating(
				{
					isHydrating: true,
					validationErrors: null,
					error: null
				},
				() => this.updateItemProcess()
			);
		}
	}

	updateItemProcess() {
		const { itemUpdating } = this.state;

		axios
			.put(
				`${config.url}/item/update?id=${itemUpdating.id}`,
				itemUpdating.temporary,
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
		const { items, itemUpdating, categoryUpdating } = this.state;

		this.setState({
			itemUpdating: {
				...itemUpdating,
				isHydrating: false,
				id: null,
				temporary: {}
			},
			items: items.map(
				category =>
					category._id === categoryUpdating.id
						? {
							...category,
							[CATEGORY_ITEMS]: category[CATEGORY_ITEMS].map(
								item => (item._id === itemUpdating.id ? data : item)
							)
						}
						: category
			)
		});
	}

	updateItemFail(reason) {
		const error = parseError(reason);

		if (error.message) {
			this.handleItemUpdating({
				error,
				isHydrating: false
			});
			return;
		}

		this.handleItemUpdating({
			validationErrors: error,
			isHydrating: false
		});
	}

	render() {
		const {
			handleCategoryEditing,
			handleItemEditing,
			fetchItemsStart,
			updateCategoryStart,
			updateItemStart,
			getCategoryUpdatingError,
			handleItemTemporary,
			getItemUpdatingError,
			handleCategoryTemporary 
		} = this;

		const { children } = this.props;
		const { categoryUpdating, itemUpdating, fetching, items } = this.state;

		return (
			<ItemsContext.Provider
				value={{
					categoryUpdating,
					itemUpdating,
					handleItemTemporary,
					fetching,
					items,
					handleCategoryEditing,
					handleItemEditing,
					handleCategoryTemporary,
					fetchItemsStart,
					updateCategoryStart,
					updateItemStart,
					getCategoryUpdatingError,
					getItemUpdatingError
				}}
			>
				{children}
			</ItemsContext.Provider>
		);
	}
}

ItemsProvider.propTypes = {
	children: PropTypes.element.isRequired
};

