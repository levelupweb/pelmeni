import React from "react";
import PropTypes from "prop-types";
import { PromosContext } from "../../context";
import { Button } from "semantic-ui-react";

const CreateButton = ({ handleAdding }) => (
	<Button size="large" onClick={() => handleAdding(true)} fluid>
		Добавить новый промо-код
	</Button>
);

CreateButton.propTypes = {
	handleAdding: PropTypes.func.isRequired
};

const EnhancedCreateButton = () => (
	<PromosContext.Consumer>
		{({ handleAdding }) => <CreateButton handleAdding={handleAdding} />}
	</PromosContext.Consumer>
);

export default EnhancedCreateButton;
