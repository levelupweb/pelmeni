import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import config from "../../utils/config";
import { LOCAL_STORAGE_CART } from "@src/consts";

import {
	setItemToLocalStorage,
	getFromLocalStorage,
	removeFromLocalStorage
} from "@utils/localStorage";

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
		this.refreshCart = this.refreshCart.bind(this);
		this.handlePromo = this.handlePromo.bind(this);
		this.state = {
			isFetching: false,
			items: null,
			error: null,
			cart: JSON.parse(getFromLocalStorage(LOCAL_STORAGE_CART)) || [],
			promo: null,
			addSpy: 0
		};
	}

	componentDidMount() {
		this.fetchItemsStart();
	}

	addToCart(item) {
		return new Promise(resolve => {
			this.setState(
				state => {
					const existedItem = state.cart.filter(i => i.id === item.id)[0];

					if (existedItem) {
						return {
							addSpy: state.addSpy + 1,
							cart: state.cart.map(
								i =>
									i._id === item.id
										? {
											...i,
											amount: existedItem.amount + item.amount
										  }
										: i
							)
						};
					}

					return {
						addSpy: state.addSpy + 1,
						cart: [...state.cart, item]
					};
				},
				() => {
					const { cart } = this.state;

					setItemToLocalStorage(LOCAL_STORAGE_CART, JSON.stringify(cart));
					return resolve(cart);
				}
			);
		});
	}

	removeFromCart(itemId) {
		this.setState(
			state => ({
				cart: state.cart.filter(item => item._id !== itemId)
			}),
			() => {
				const { cart } = this.state;

				setItemToLocalStorage(LOCAL_STORAGE_CART, JSON.stringify(cart));
			}
		);
	}

	refreshCart() {
		this.setState({ cart: [] }, () =>
			removeFromLocalStorage(LOCAL_STORAGE_CART)
		);
	}

	updateAmount(itemId, amount) {
		this.setState(
			state => ({
				cart: state.cart.map(
					item =>
						item._id === itemId
							? {
								...item,
								amount
							  }
							: item
				)
			}),
			() => {
				const { cart } = this.state;

				setItemToLocalStorage(LOCAL_STORAGE_CART, JSON.stringify(cart));
			}
		);
	}

	fetchItemsStart() {
		const { isFetching } = this.state;

		if (!isFetching) {
			this.setState({ isFetching: true }, () => {
				this.fetchItemsProcess();
			});
		}
	}

	fetchItemsProcess() {
		axios
			.get(config.url + "/category/all")
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess({ data }) {
		this.setState({
			isFetching: false,
			items: data
		});
	}

	fetchItemsFail(error) {
		if (error) {
			const { response } = error;
			if (response) {
				if (response.status) {
					return this.handleError(response.data);
				}
				return this.handleError({
					message:
						"Неизвестная ошибка сервера. Попробуйте отправить свой заказ чуть позже"
				});
			}
		}
		return this.handleError({
			message:
				"Неизвестная ошибка клиента. Попробуйте обновить страницу и отправить форму ещё раз"
		});
	}

	handleError(error) {
		this.setState({
			isFetching: false,
			error
		});
	}

	handlePromo(promo) {
		this.setState({
			promo
		});
	}

	getTotalSumm() {
		const { cart } = this.state;

		return cart.reduce((prev, curr) => prev + curr.price * curr.amount, 0);
	}

	getTotalSummWithDiscount() {
		const { promo } = this.state;

		if (promo && promo.discount) {
			return Math.ceil((this.getTotalSumm() / 100) * (100 - promo.discount));
		}

		return null;
	}

	render() {
		const {
			props: { children },
			state: { isFetching, error, items, cart, promo, addSpy },
			fetchItemsStart,
			addToCart,
			removeFromCart,
			updateAmount,
			refreshCart,
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
					refreshCart,
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
		);
	}
}

ShopProviderClass.propTypes = {
	children: PropTypes.element.isRequired
};

export const ShopProvider = ShopProviderClass;
