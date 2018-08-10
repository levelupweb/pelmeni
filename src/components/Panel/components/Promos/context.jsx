import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import cookies from "js-cookie";
import { TOKEN } from "@src/consts";
import config from "@utils/config";
import parseError from "@utils/parseError";

export const PromosContext = React.createContext();

export class PromosProvider extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdding = this.handleAdding.bind(this);
		this.handleTemporaryAdding = this.handleTemporaryAdding.bind(this);
		this.handleAddingCancel = this.handleAddingCancel.bind(this);
		this.getAddingValidationErrors = this.getAddingValidationErrors.bind(this);
		this.fetchItemsStart = this.fetchItemsStart.bind(this);
		this.fetchItemsProcess = this.fetchItemsProcess.bind(this);
		this.fetchItemsSuccess = this.fetchItemsSuccess.bind(this);
		this.fetchItemsFail = this.fetchItemsFail.bind(this);
		this.removeItemStart = this.removeItemStart.bind(this);
		this.removeItemProcess = this.removeItemProcess.bind(this);
		this.removeItemSuccess = this.removeItemSuccess.bind(this);
		this.removeItemFail = this.removeItemFail.bind(this);
		this.handleRemoving = this.handleRemoving.bind(this);
		this.getAddingError = this.getAddingError.bind(this);
		this.addItemStart = this.addItemStart.bind(this);
		this.addItemProcess = this.addItemProcess.bind(this);
		this.addItemSuccess = this.addItemSuccess.bind(this);
		this.addItemFail = this.addItemFail.bind(this);
		this.state = {
			adding: {
				active: false,
				isHydrating: false,
				error: null,
				validationErrors: null,
				temporary: {}
			},
			list: {
				items: null,
				isHydrating: false,
				error: null
			},
			removing: {
				id: null,
				isHydrating: false,
				disclaimer: false,
				error: null
			}
		};
	}

	componentDidMount() {
		this.fetchItemsStart();
	}

	/**
	 * Fetching lifecycle
	 */

	fetchItemsStart() {
		const { list } = this.state;

		if (!list.isHydrating) {
			this.setState(
				{
					list: {
						...list,
						isHydrating: true,
						error: null
					}
				},
				() => this.fetchItemsProcess()
			);
		}
	}

	fetchItemsProcess() {
		axios
			.get(config.url + "/promo/all", {
				headers: {
					authorization: cookies.get(TOKEN)
				}
			})
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess({ data }) {
		const { list } = this.state;

		this.setState({
			list: {
				...list,
				isHydrating: false,
				items: data
			}
		});
	}

	fetchItemsFail(reason) {
		const error = parseError(reason);
		const { list } = this.state;

		this.setState({
			list: {
				...list,
				error
			}
		});
	}

	/**
	 * Adding lifecycle
	 */

	addItemStart() {
		const { adding } = this.state;

		if (!adding.isHydrating) {
			this.setState(
				{
					adding: {
						...adding,
						isHydrating: true,
						error: null,
						validationErrors: null
					}
				},
				() => this.addItemProcess()
			);
		}
	}

	addItemProcess() {
		const { adding } = this.state;

		axios
			.post(config.url + "/promo/create", adding.temporary, {
				headers: {
					authorization: cookies.get(TOKEN)
				}
			})
			.then(this.addItemSuccess)
			.catch(this.addItemFail);
	}

	addItemSuccess({ data }) {
		const { adding, list } = this.state;

		this.setState(
			{
				adding: {
					...adding,
					isHydrating: false,
					temporary: {}
				},
				list: {
					...list,
					items: [data, ...list.items]
				}
			},
			() => this.handleAdding(null)
		);
	}

	addItemFail(reason) {
		const error = parseError(reason);
		const { adding } = this.state;

		if (error.message) {
			this.setState({
				adding: {
					...adding,
					isHydrating: false
				}
			});
			return;
		}

		this.setState({
			adding: {
				...adding,
				isHydrating: false,
				validationErrors: error
			}
		});
	}

	/**
	 * Adding methods
	 */

	handleAdding(active) {
		const { adding } = this.state;

		this.setState({
			adding: {
				...adding,
				active
			}
		});
	}

	handleTemporaryAdding(data) {
		const { adding } = this.state;

		this.setState({
			adding: {
				...adding,
				temporary: {
					...adding.temporary,
					...data
				}
			}
		});
	}

	getAddingError(field) {
		const { adding } = this.state;

		if (adding.validationErrors) {
			return adding.validationErrors[field];
		}

		return null;
	}

	handleAddingCancel() {
		const { adding } = this.state;

		this.setState({
			adding: {
				...adding,
				temporary: {},
				active: false
			}
		});
	}

	getAddingValidationErrors(field) {
		const { adding } = this.state;

		if (adding.validationErrors) {
			return adding.validationErrors[field];
		}

		return null;
	}

	/**
	 * Removing Lifecycle
	 */

	handleRemoving(id) {
		const { removing } = this.state;

		this.setState({
			removing: {
				...removing,
				id
			}
		});
	}

	removeItemStart() {
		const { removing } = this.state;

		if (!removing.isHydrating) {
			this.setState(
				{
					removing: { ...removing, isHydrating: true, error: null }
				},
				() => this.removeItemProcess()
			);
		}
	}

	removeItemProcess() {
		const { removing } = this.state;

		axios
			.delete(`${config.url}/promo/delete?id=${removing.id}`, {
				headers: {
					authorization: cookies.get(TOKEN)
				}
			})
			.then(this.removeItemSuccess)
			.catch(this.removeItemFail);
	}

	removeItemSuccess() {
		const { list, removing } = this.state;

		this.setState({
			list: {
				...list,
				items: list.items.filter(item => item._id !== removing.id)
			},
			removing: {
				...removing,
				isHydrating: false,
				id: null
			}
		});
	}

	removeItemFail(reason) {
		const error = parseError(reason);
		const { removing } = this.state;

		this.setState({
			removing: {
				...removing,
				isHydrating: false,
				error
			}
		});
	}

	render() {
		const {
			props: { children },
			state: { list, adding, removing },
			handleRemoving,
			removeItemStart,
			handleAdding,
			handleTemporaryAdding,
			getAddingError,
			addItemStart
		} = this;

		return (
			<PromosContext.Provider
				value={{
					list,
					adding,
					handleRemoving,
					removeItemStart,
					removing,
					handleAdding,
					handleTemporaryAdding,
					getAddingError,
					addItemStart
				}}
			>
				{children}
			</PromosContext.Provider>
		);
	}
}

PromosProvider.propTypes = {
	children: PropTypes.element.isRequired
};