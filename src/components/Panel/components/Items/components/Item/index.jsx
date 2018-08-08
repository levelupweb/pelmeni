import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "semantic-ui-react";
import { PanelItemContext } from "../../context";

const Item = ({ handleEditing, data }) => (
	<Card>
		<Card.Content>
			<Card.Header onClick={() => handleEditing(data._id)}>
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
			<Button onClick={() => handleEditing(data._id)} primary fluid>
				Редактировать
			</Button>
		</Card.Content>
	</Card>
);

Item.propTypes = {
	data: PropTypes.shape({
		price: PropTypes.number,
		weight: PropTypes.number,
		category: PropTypes.string
	}).isRequired,
	handleEditing: PropTypes.func.isRequired
};

const EnhancedItem = ({ data }) => (
	<PanelItemContext.Consumer>
		{({ handleEditing }) => <Item data={data} handleEditing={handleEditing} />}
	</PanelItemContext.Consumer>
);

EnhancedItem.propTypes = {
	data: PropTypes.shape({
		price: PropTypes.number,
		weight: PropTypes.number,
		category: PropTypes.string
	}).isRequired
};

export default EnhancedItem;
