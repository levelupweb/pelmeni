import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Button, Message } from "semantic-ui-react";
import { ItemsContext } from "../../context";
import { ITEM_PRICE, ITEM_WEIGHT } from "@consts/item";
import { CATEGORY_ITEMS } from "@consts/category";

const renderError = error =>
	error &&
	error.msg &&
	<Message negative>
		<p>
			{error.msg}
		</p>
	</Message>;

const ItemEditModal = ({
	getItemUpdatingError,
	handleItemEditing,
	updateItemStart,
	isHydrating,
	getField,
	handleItemTemporary,
	error,
	open
}) =>
	open &&
	<Modal size="tiny" onClose={() => handleItemEditing(null)} open={open}>
		<Modal.Header>Изменение вариации</Modal.Header>
		<Modal.Content>
			{error &&
				error.message &&
				<Message negative>
					<Message.Header>Что-то пошло не так</Message.Header>
					<p>
						{error.message}
					</p>
				</Message>}
			<Form>
				<Form.Field>
					<label htmlFor={ITEM_PRICE}>Цена вариации</label>
					<Form.Input
						type="number"
						name={ITEM_PRICE}
						disabled={isHydrating}
						value={getField(ITEM_PRICE)}
						placeholder="Цена текущей вариации"
						onChange={({ target: { value } }) =>
							handleItemTemporary({
								[ITEM_PRICE]: value
							})}
					/>
					{renderError(getItemUpdatingError(ITEM_PRICE))}
				</Form.Field>
				<Form.Field>
					<label htmlFor={ITEM_WEIGHT}>Вес вариации</label>
					<Form.Input
						type="number"
						name={ITEM_WEIGHT}
						disabled={isHydrating}
						value={getField(ITEM_WEIGHT)}
						placeholder="Вес текущей вариации"
						onChange={({ target: { value } }) =>
							handleItemTemporary({
								[ITEM_WEIGHT]: value
							})}
					/>
					{renderError(getItemUpdatingError(ITEM_WEIGHT))}
				</Form.Field>
				<Form.Field>
					<Button loading={isHydrating} onClick={updateItemStart} positive>
						Сохранить
					</Button>
					<Button onClick={() => handleItemEditing(null)}>Отмена</Button>
				</Form.Field>
			</Form>
		</Modal.Content>
	</Modal>;

ItemEditModal.propTypes = {
	getItemUpdatingError: PropTypes.func.isRequired,
	handleItemEditing: PropTypes.func.isRequired,
	updateItemStart: PropTypes.func.isRequired,
	open: PropTypes.bool,
	handleItemTemporary: PropTypes.func.isRequired,
	getField: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool,
	error: PropTypes.shape({
		message: PropTypes.string
	})
};

const EnhancedItemEditModal = () =>
	<ItemsContext.Consumer>
		{({
			getItemUpdatingError,
			handleItemEditing,
			updateItemStart,
			itemUpdating,
			categoryUpdating,
			handleItemTemporary,
			items
		}) => {
			const category = items.filter(
				category => category._id === categoryUpdating.id
			)[0];

			const item =
				category &&
				category[CATEGORY_ITEMS].filter(
					item => item._id === itemUpdating.id
				)[0];

			/**
       * This function gets value of category field
       * or get temporary field
       */
			const getField = field => {
				if (itemUpdating.temporary[field] !== undefined) {
					return itemUpdating.temporary[field];
				}
				return item && item[field];
			};

			return (
				<ItemEditModal
					getItemUpdatingError={getItemUpdatingError}
					handleItemEditing={handleItemEditing}
					handleItemTemporary={handleItemTemporary}
					updateItemStart={updateItemStart}
					isHydrating={itemUpdating.isHydrating}
					error={itemUpdating.error}
					getField={getField}
					open={!!itemUpdating.id}
				/>
			);
		}}
	</ItemsContext.Consumer>;

export default EnhancedItemEditModal;
