import React from "react";
import PropTypes from "prop-types";
import { Modal, Header, Button } from "semantic-ui-react";
import { PromosContext } from "../../context";

const RemoveModal = ({
	open,
	handleRemoving,
	removeItemStart,
	isHydrating
}) => (
	<Modal size="tiny" open={open} onClose={() => handleRemoving(null)}>
		<Modal.Content>
			<Header as="h2">
				Подтвердите
				<Header.Subheader>
					Вы действительно собираетесь удалить данный промо-код?
				</Header.Subheader>
			</Header>
			<Button loading={isHydrating} negative onClick={removeItemStart}>
				Удалить
			</Button>
			<Button onClick={() => handleRemoving(null)}>Отмена</Button>
		</Modal.Content>
	</Modal>
);

RemoveModal.propTypes = {
	open: PropTypes.bool,
	isHydrating: PropTypes.bool,
	handleRemoving: PropTypes.func.isRequired,
	removeItemStart: PropTypes.func.isRequired
};

RemoveModal.defaultProps = {
	open: false
};

const EnhancedRemoveModal = () => (
	<PromosContext.Consumer>
		{({ removing, handleRemoving, removeItemStart }) => (
			<RemoveModal
				open={!!removing.id}
				handleRemoving={handleRemoving}
				isHydrating={removing.isHydrating}
				removeItemStart={removeItemStart}
			/>
		)}
	</PromosContext.Consumer>
);

export default EnhancedRemoveModal;
