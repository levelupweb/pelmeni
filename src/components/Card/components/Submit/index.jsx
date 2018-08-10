import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "@components/Card/context";
import { createOnClickAction } from "./utils";
import { ShopContext } from "@components/Shop/context";
import { Button } from "semantic-ui-react";

const Submit = ({ onClick }) =>
	<Button onClick={onClick} primary fluid>
		В корзину
	</Button>;

Submit.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string
};

Submit.defaultProps = {
	text: "В корзину"
};

const SubmitWithCardContext = ({ addToCart }) =>
	<CardContext.Consumer>
		{context => <Submit onClick={createOnClickAction(addToCart)(context)} />}
	</CardContext.Consumer>;

SubmitWithCardContext.propTypes = {
	addToCart: PropTypes.func.isRequired
};

const SubmitWithShopContext = () =>
	<ShopContext.Consumer>
		{({ addToCart }) => <SubmitWithCardContext addToCart={addToCart} />}
	</ShopContext.Consumer>;

export default SubmitWithShopContext;
