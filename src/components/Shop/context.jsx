import React from "react";
import axios from "axios";
import config from "../../utils/config";

import {
	LOCAL_STORAGE_CART,
	LOCAL_STORAGE_PROMO
} from "../../consts";

import {
	setItemToLocalStorage,
	getFromLocalStorage,
} from "../../utils/localStorage";

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
		this.getTotalSummWithDiscount = this.getTotalSummWithDiscount.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
		this.handlePromo = this.handlePromo.bind(this);
		this.state = {
			isFetching: false,
			items: null,
			error: null,
			cart: JSON.parse(getFromLocalStorage(LOCAL_STORAGE_CART)) || [],
			promo: JSON.parse(getFromLocalStorage(LOCAL_STORAGE_PROMO)),
			addSpy: 0,
		}
	}

	componentDidMount() {
		this.fetchItemsStart();
	}

	addToCart(item) {
		return new Promise((resolve) => {
			this.setState(state => {
				const existedItem = state.cart.filter(i =>
					i.id === item.id
				)[0];

				if (existedItem) {
					return {
						addSpy: state.addSpy + 1,
						cart: state.cart.map(i => i._id === item.id ? ({
							...i,
							amount: existedItem.amount + item.amount,
						}) : i)
					}
				}

				return {
					addSpy: state.addSpy + 1,
					cart: [
						...state.cart,
						item,
					]
				}
			}, () => {
				const { cart } = this.state;

				setItemToLocalStorage(LOCAL_STORAGE_CART, JSON.stringify(cart));
				return resolve(cart);
			})
		});
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

	handlePromo(code, discount) {
		this.setState({
			promo: { code, discount }
		}, () => {
			const { promo } = this.state;

			setItemToLocalStorage(LOCAL_STORAGE_PROMO, JSON.stringify(promo));
		})
	}

	getTotalSumm() {
		const { cart } = this.state;

		return cart.reduce((prev, curr) =>
			prev + (curr.price * curr.amount)
			, 0);
	}

	getTotalSummWithDiscount() {
		const { promo } = this.state;

		if (promo && promo.discount) {
			return Math.ceil((this.getTotalSumm() / 100) * promo.discount)
		}

		return null;
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
				cart,
				promo,
				addSpy,
			},
			fetchItemsStart,
			addToCart,
			removeFromCart,
			updateAmount,
			getTotalSumm,
			handlePromo,
			getTotalSummWithDiscount
		} = this;

		return (
			<ShopContext.Provider
				value={{
					addSpy,
					isFetching,
					error,
					items,
					fetchItemsStart,
					addToCart,
					removeFromCart,
					updateAmount,
					getTotalSumm,
					getTotalSummWithDiscount,
					cart,
					handlePromo,
					promo
				}}
			>
				{children}
			</ShopContext.Provider>
		)
	}
}

export const ShopProvider = ShopProviderClass;