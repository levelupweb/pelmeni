import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Message, Button } from "semantic-ui-react";
import { PromosContext } from "../../context";
import { PROMO_CODE, PROMO_DISCOUNT } from "@consts/promo";

const renderError = error =>
	error &&
	error.msg && (
		<Message negative>
			<p>{error.msg}</p>
		</Message>
	);

const AddingModal = ({
	handleTemporaryAdding,
	handleAdding,
	open,
	temporaryPromo,
	isHydrating,
	getAddingError,
	addItemStart
}) => (
	<Modal size="tiny" open={open} onClose={() => handleAdding(false)}>
		<Modal.Header>Создание нового промо-кода</Modal.Header>
		<Modal.Content>
			{/* {variationError &&
				variationError.message && (
				<Message negative>
					<Message.Header>Что-то пошло не так</Message.Header>
					<p>{variationError.message}</p>
				</Message>
			)} */}
			<p>
				Введите сам промо-код и скидку, которая будет активирована после
				применения данного кода. Скидка измеряется в процентах
			</p>
			<Form>
				<Form.Field>
					<Form.Field>
						<label htmlFor={PROMO_CODE}>Промо-код</label>
						<Form.Input
							name={PROMO_CODE}
							disabled={isHydrating}
							value={temporaryPromo[PROMO_CODE]}
							placeholder="Введите промо-код"
							onChange={({ target: { value } }) =>
								handleTemporaryAdding({
									[PROMO_CODE]: value
								})
							}
						/>
						{renderError(getAddingError(PROMO_CODE))}
					</Form.Field>
					<Form.Field>
						<label htmlFor={PROMO_DISCOUNT}>Скидка</label>
						<Form.Input
							type="number"
							name={PROMO_DISCOUNT}
							disabled={isHydrating}
							value={temporaryPromo[PROMO_DISCOUNT]}
							placeholder="Введите скидку, которая будет активирована по этому коду"
							onChange={({ target: { value } }) =>
								handleTemporaryAdding({
									[PROMO_DISCOUNT]: value
								})
							}
						/>
						{renderError(getAddingError(PROMO_DISCOUNT))}
					</Form.Field>
					<Form.Field>
						<Button onClick={addItemStart} loading={isHydrating} primary>
							Создать
						</Button>
					</Form.Field>
				</Form.Field>
			</Form>
		</Modal.Content>
	</Modal>
);

AddingModal.propTypes = {
	handleTemporaryAdding: PropTypes.func.isRequired,
	handleAdding: PropTypes.func.isRequired,
	temporaryPromo: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool,
	open: PropTypes.bool,
	getAddingError: PropTypes.func.isRequired,
	addItemStart: PropTypes.func.isRequired
};

AddingModal.defaultProps = {
	open: false,
	isHydrating: false
};

const EnhancedAddingModal = () => (
	<PromosContext.Consumer>
		{({
			handleTemporaryAdding,
			handleAdding,
			adding,
			getAddingError,
			addItemStart
		}) => (
			<AddingModal
				open={adding.active}
				handleTemporaryAdding={handleTemporaryAdding}
				handleAdding={handleAdding}
				isHydrating={adding.isHydrating}
				temporaryPromo={adding.temporary}
				getAddingError={getAddingError}
				addItemStart={addItemStart}
			/>
		)}
	</PromosContext.Consumer>
);

export default EnhancedAddingModal;
