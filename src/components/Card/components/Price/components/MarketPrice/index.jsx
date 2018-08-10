import React from "react";
import { number, string } from "prop-types";
import styles from "./styles.less";
import { CURRENCY_RUB } from "@consts/currencies";

/**
 * Market price depends on currentItem price
 * and ratio
 */

const MarketPrice = ({ price, ratio, suffix, title }) =>
	<p className={styles.text}>
		<span>
			{title}
		</span>
		<span>
			{`${price * ratio} ${suffix}`}
		</span>
	</p>;

MarketPrice.propTypes = {
	/**
	 * Price of currentItem
	 */
	price: number,
	/**
     * Hardcoded ratio
     */
	ratio: number,
	suffix: string,
	title: string
};

MarketPrice.defaultProps = {
	price: 0,
	ratio: 1.3,
	suffix: CURRENCY_RUB,
	title: "Цена в магазинах за ед."
};

export default MarketPrice;
