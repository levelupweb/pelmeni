import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "semantic-ui-react";
import { PromosContext } from "../../context";
import { PROMO_DISCOUNT, PROMO_CODE } from "@consts/promo";

const Item = ({ promo, handleRemoving }) => (
	<Card>
		<Card.Content>
			<Card.Header>{promo[PROMO_CODE]}</Card.Header>
			<Card.Meta>
				<span className="date">
					Скидка по этому коду составляет: {promo[PROMO_DISCOUNT]} %
				</span>
			</Card.Meta>
		</Card.Content>
		<Card.Content extra>
			<Button fluid onClick={() => handleRemoving(promo._id)}>
				Удалить
			</Button>
		</Card.Content>
	</Card>
);

Item.propTypes = {
	promo: PropTypes.shape({
		code: PropTypes.string,
		discount: PropTypes.number,
		_id: PropTypes.string
	}).isRequired,
	handleRemoving: PropTypes.func.isRequired
};

const EnhancedItem = ({ promo }) => (
	<PromosContext.Consumer>
		{({ handleRemoving }) => (
			<Item promo={promo} handleRemoving={handleRemoving} />
		)}
	</PromosContext.Consumer>
);

EnhancedItem.propTypes = {
	promo: PropTypes.shape({
		code: PropTypes.string,
		discount: PropTypes.number,
		_id: PropTypes.string
	}).isRequired
};

export default EnhancedItem;
