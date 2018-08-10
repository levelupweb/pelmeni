import React, { Component, createContext } from "react";
import PropTypes from "prop-types";
import { LOCAL_STORAGE_CART } from "@src/consts";
import { ITEM_ID } from "@consts/item";
import { PURCHASE_ITEMS_AMOUNT } from "@consts/purchase";
import { ITEM_PRICE } from "@consts/item";
import calculateSumm from "@utils/calculateSumm";
import { PROMO_DISCOUNT } from "@consts/promo";
import { getCategories } from "@API/category";
import parseError from "@utils/parseError";
import withAsyncSetState from "@HOC/withAsyncSetState";
import { getCart } from "./utils";

import {
	setItemToLocalStorage,
	removeFromLocalStorage
} from "@utils/localStorage";

export const ShopContext = createContext();

class ShopProviderClass extends Component {

	state = {
		isFetching: false,
		items: null,
		error: null,
		cart: getCart(),
		promo: null,
		addSpy: 0
	}

	componentDidMount() {
		this.fetchItemsStart();
	} 

	addToCart = (item, callback) => {
		const { cart, addSpy } = this.state;

		const existedItem = cart.filter(
			cartItem => cartItem[ITEM_ID] === item[ITEM_ID]
		)[0];

		const filterAndUpdate = cartItem => {
			if (cartItem[ITEM_ID] !== item[ITEM_ID]) {
				return cartItem;
			}

			return {
				...cartItem,
				[PURCHASE_ITEMS_AMOUNT]:
					existedItem[PURCHASE_ITEMS_AMOUNT] + item[PURCHASE_ITEMS_AMOUNT]
			};
		};

		const createNextState = () => {
			if (existedItem) {
				return {
					addSpy: addSpy + 1,
					cart: cart.map(filterAndUpdate)
				};
			}
			return {
				addSpy: addSpy + 1,
				cart: [...cart, item]
			};
		};

		const updateStorage = () => {
			setItemToLocalStorage(
				LOCAL_STORAGE_CART,
				JSON.stringify(this.state.cart)
			);
		};

		this.asyncSetState(createNextState())
			.then(updateStorage)
			.then(callback);
	}

	removeFromCart = (itemId) => {
		const { cart } = this.state;

		const nextState = {
			cart: cart.filter(item => 
				item[ITEM_ID] !== itemId
			)
		};

		const updateStorage = () => {
			setItemToLocalStorage(
				LOCAL_STORAGE_CART, 
				JSON.stringify(this.state.cart)
			);
		};

		this.setState(nextState, updateStorage);
	}

	refreshCart = () => {
		this.setState({ cart: [] }, () =>
			removeFromLocalStorage(LOCAL_STORAGE_CART)
		);
	}

	updateAmount = (itemId, amount) => {
		const { cart } = this.state;

		const filterAndUpdate = cartItem => {
			if (cartItem[ITEM_ID] !== itemId) {
				return cartItem;
			}

			return {
				...cartItem,
				[PURCHASE_ITEMS_AMOUNT]: amount
			}; 
		};

		const nextState = {
			cart: cart.map(filterAndUpdate)
		}; 

		const updateStorage = () => {
			setItemToLocalStorage(
				LOCAL_STORAGE_CART, 
				JSON.stringify(this.state.cart)
			);
		};

		this.setState(nextState, updateStorage);
	}

	fetchItemsStart = () => {
		const { isFetching, items } = this.state;

		if (isFetching || items) return;

		this.asyncSetState({ isFetching: true, error: null })
			.then(this.fetchItemsProcess);
	}

	fetchItemsProcess = () => {
		getCategories()
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess = ({ data }) => {
		this.setState({
			isFetching: false,
			items: data
		});
	}

	fetchItemsFail = reason => {
		const error = parseError(reason);

		this.setState({
			isFetching: false,
			error,
		});
	}

	handlePromo = promo => {
		this.setState({ promo });
	}

	getTotalSumm = () => {
		const { cart } = this.state;

		const calculateNextSumm = (prev, curr) => 
			prev + calculateSumm(curr[ITEM_PRICE], curr[PURCHASE_ITEMS_AMOUNT]);

		return cart.reduce(calculateNextSumm, 0);
	}

	getTotalSummWithDiscount = () => {
		const { promo, cart } = this.state;

		if (promo && promo[PROMO_DISCOUNT]) {
			const calculateNextSumm = (prev, curr) =>
				prev + calculateSumm(curr[ITEM_PRICE], curr[PURCHASE_ITEMS_AMOUNT], promo[PROMO_DISCOUNT]);
		
			return cart.reduce(calculateNextSumm, 0);
		}

		return null;
	}

	render() {
		const { children } = this.props;

		return (
			<ShopContext.Provider
				value={{
					...this,
					...this.state,
					...this.props,
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

export const ShopProvider = withAsyncSetState(ShopProviderClass);
