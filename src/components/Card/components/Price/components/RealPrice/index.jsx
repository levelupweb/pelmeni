import React from "react";
import { number, string } from "prop-types";
import styles from "./styles.less";
import { CURRENCY_RUB } from "@consts/currencies";

const RealPrice = ({ price, amount, suffix }) =>
	<p className={styles.text}>
		{`${price * amount} ${suffix}`}
	</p>;

RealPrice.propTypes = {
	/**
	 * Price of currentItem
	 */
	price: number,
	/**
	 * Amount changing in Amount component
	 */
	amount: number,
	/**
	 * Hardcoded suffix
	 * @todo currency
	 */
	suffix: string
};

RealPrice.defaultProps = {
	price: 0,
	amount: 1,
	suffix: CURRENCY_RUB
};

export default RealPrice;
