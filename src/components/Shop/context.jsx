import React from "react";
import axios from "axios";
import config from "../../utils/config";

export const ShopContext = React.createContext();

class ShopProviderClass extends React.Component {
	constructor(props) {
		super(props);
		this.fetchItemsStart = this.fetchItemsStart.bind(this);
		this.fetchItemsProcess = this.fetchItemsProcess.bind(this);
		this.fetchItemsSuccess = this.fetchItemsSuccess.bind(this);
		this.fetchItemsFail = this.fetchItemsFail.bind(this);
		this.state = {
			isFetching: false,
			items: null,
			error: null,
		}
	}

	componentDidMount() {
		this.fetchItemsStart();
	}

	fetchItemsStart() {
		const { isFetching } = this.state;

		if (!isFetching) {
			this.setState({ isFetching: true }, () => {
					this.fetchItemsProcess();
			})
		}
	}

	fetchItemsProcess() {
		axios.get(config.url + "/category/all")
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess({ data }) {
		this.setState({
			isFetching: false,
			items: data
		})
	}

	fetchItemsFail({ response }) {
		if (response) {
			if (response.data.code) {
				this.handleError(response.data)

				return;
			}

			this.handleError({
				message: "Неизвестная ошибка сервера"
			})

			return;
		}
		this.handleError({
			message: "Неизвестная ошибка клиента"
		})
	}

	handleError(error) {
		console.log(error);

		this.setState({
			isFetching: false,
			error,
		})
	}

	render() {
		const {
			props: {
				children,
			},
			state: {
				isFetching,
				error,
				items,
			},
			fetchItemsStart
		} = this;

		return (
			<ShopContext.Provider
				value={{
					isFetching,
					error,
					items,
					fetchItemsStart
				}}
			>
				{children}
			</ShopContext.Provider>
		)
	}
}

export const ShopProvider = ShopProviderClass;