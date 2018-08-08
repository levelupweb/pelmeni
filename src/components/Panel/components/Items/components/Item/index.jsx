import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "semantic-ui-react";
import { ItemsContext } from "../../context";

const Item = ({ handleCategoryEditing, data }) =>
	<Card>
		<Card.Content>
			<Card.Header onClick={() => handleCategoryEditing(data._id)}>
				{data.title}
			</Card.Header>
			<Card.Meta>
				<span className="date">
					{data.items.map(item => `${item.weight} гр. `)}
				</span>
			</Card.Meta>
		</Card.Content>
		<Card.Content description={data.description} />
		<Card.Content extra>
			<Button onClick={() => handleCategoryEditing(data._id)} primary fluid>
				Редактировать
			</Button>
		</Card.Content>
	</Card>;

Item.propTypes = {
	data: PropTypes.shape({
		price: PropTypes.number,
		weight: PropTypes.number,
		category: PropTypes.string
	}).isRequired,
	handleCategoryEditing: PropTypes.func.isRequired
};

const EnhancedItem = ({ data }) =>
	<ItemsContext.Consumer>
		{({ handleCategoryEditing }) =>
			<Item data={data} handleCategoryEditing={handleCategoryEditing} />}
	</ItemsContext.Consumer>;

EnhancedItem.propTypes = {
	data: PropTypes.shape({
		price: PropTypes.number,
		weight: PropTypes.number,
		category: PropTypes.string
	}).isRequired
};

export default EnhancedItem;
