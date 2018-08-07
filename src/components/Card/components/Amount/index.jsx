import React from "react";
import { CardContext } from "@components/Card/context";
import AmountChanger from "@components/AmountChanger";

const Amount = () => (
	<CardContext.Consumer>
		{({ amount, handleAmount }) => (
			<AmountChanger amount={amount} onChange={handleAmount} size="medium" />
		)}
	</CardContext.Consumer>
);

export default Amount;
