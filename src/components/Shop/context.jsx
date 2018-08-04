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
		this.updateAmount = this.updateAmount.bind(this);
		this.getTotalSumm = this.getTotalSumm.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.state = {
			isFetching: false,
			items: null,
			error: null,
			cart: [],
		}
	}

	componentDidMount() {
		this.fetchItemsStart();
	}

	addToCart(item) {
		this.setState(state => {
			const existedItem = state.cart.filter(i => i.id === item.id)[0];

			if (existedItem) {
				return {
					cart: state.cart.map(i => i._id === item.id ? ({
						...i,
						amount: existedItem.amount + item.amount,
					}) : i)
				}
			}

			return {
				cart: [
					...state.cart,
					item,
				]
			}
		})
	}

	removeFromCart(itemId) {
		this.setState(state => ({
			cart: state.cart.filter(item => item._id !== itemId)
		}))
	}

	updateAmount(itemId, amount) {
		this.setState(state => ({
			cart: state.cart.map(item => item._id === itemId ? ({
				...item,
				amount,
			}) : item)
		}))
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

	getTotalSumm() {
		const { cart } = this.state;

		return cart.reduce((prev, curr) => 
			prev + (curr.price * curr.amount)
		, 0)
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
				cart
			},
			fetchItemsStart,
			addToCart,
			removeFromCart,
			updateAmount,
			getTotalSumm,
		} = this;

		return (
			<ShopContext.Provider
				value={{
					isFetching,
					error,
					items,
					fetchItemsStart,
					addToCart,
					removeFromCart,
					updateAmount,
					getTotalSumm,
					cart
				}}
			>
				{children}
			</ShopContext.Provider>
		)
	}
}

export const ShopProvider = ShopProviderClass;