import React from "react";
import PropTypes from "prop-types";

import {
	Modal,
	Form,
	Button,
	Message,
	Segment,
	Header
} from "semantic-ui-react";

import { PanelItemContext } from "../../context";

import {
	CATEGORY_TITLE,
	CATEGORY_DESCRIPTION,
	CATEGORY_ITEMS
} from "@consts/category";

import { ITEM_PRICE, ITEM_WEIGHT } from "@consts/item";

const renderError = error => error && <Message negative>{error}</Message>;

const EditModal = ({
	getValue,
	currentlyEditing,
	handleTemporaryItem,
	cancelEditing,
	error,
	handleEditingVariation,
	isHydrating,
	cancelEditingVariation,
	currentlyEditingVariation,
	updateItemStart,
	updateVariationStart,
	getTemporaryItemVariationValue,
	handleTemporaryItemVariation,
	getVariationFieldError,
	variationError,
	getFieldError
}) =>
	currentlyEditing && (
		<Modal onClose={cancelEditing} open={!!currentlyEditing} size="tiny">
			<Modal
				size="tiny"
				onClose={cancelEditingVariation}
				open={!!currentlyEditingVariation}
			>
				<Modal.Header>Изменение вариации</Modal.Header>
				<Modal.Content>
					{variationError &&
						variationError.message && (
						<Message negative>
							<Message.Header>Что-то пошло не так</Message.Header>
							<p>{variationError.message}</p>
						</Message>
					)}
					<Form>
						<Form.Field>
							<label htmlFor={ITEM_PRICE}>Цена вариации</label>
							<Form.Input
								type="number"
								name={ITEM_PRICE}
								disabled={isHydrating}
								value={getTemporaryItemVariationValue(ITEM_PRICE)}
								placeholder="Цена текущей вариации"
								onChange={({ target: { value } }) =>
									handleTemporaryItemVariation({
										[ITEM_PRICE]: value
									})
								}
							/>
							{renderError(getVariationFieldError(ITEM_PRICE))}
						</Form.Field>
						<Form.Field>
							<label htmlFor={ITEM_WEIGHT}>Вес вариации</label>
							<Form.Input
								type="number"
								name={ITEM_WEIGHT}
								disabled={isHydrating}
								value={getTemporaryItemVariationValue(ITEM_WEIGHT)}
								placeholder="Вес текущей вариации"
								onChange={({ target: { value } }) =>
									handleTemporaryItemVariation({
										[ITEM_WEIGHT]: value
									})
								}
							/>
							{renderError(getVariationFieldError(ITEM_WEIGHT))}
						</Form.Field>
						<Form.Field>
							<Button
								loading={isHydrating}
								onClick={updateVariationStart}
								positive
							>
								Сохранить
							</Button>
							<Button onClick={cancelEditingVariation}>Отмена</Button>
						</Form.Field>
					</Form>
				</Modal.Content>
			</Modal>
			<Modal.Header>Редактирование товара</Modal.Header>
			<Modal.Content>
				{error &&
					error.message && (
					<Message negative>
						<Message.Header>Что-то пошло не так</Message.Header>
						<p>{error.message}</p>
					</Message>
				)}
				<Header as="h3">
					Редактирование
					<Header.Subheader>
						Редактирование описания и названия товара
					</Header.Subheader>
				</Header>
				<Form>
					<Form.Field>
						<label htmlFor={CATEGORY_TITLE}>Название товара</label>
						<Form.Input
							name={CATEGORY_TITLE}
							disabled={isHydrating}
							value={getValue(CATEGORY_TITLE)}
							placeholder="Название товара"
							onChange={({ target: { value } }) =>
								handleTemporaryItem({
									[CATEGORY_TITLE]: value
								})
							}
						/>
						{renderError(getFieldError(CATEGORY_TITLE))}
					</Form.Field>
					<Form.Field>
						<label htmlFor={CATEGORY_TITLE}>Название товара</label>
						<Form.TextArea
							disabled={isHydrating}
							name={CATEGORY_DESCRIPTION}
							value={getValue(CATEGORY_DESCRIPTION)}
							placeholder="Описание товара"
							onChange={({ target: { value } }) =>
								handleTemporaryItem({
									[CATEGORY_DESCRIPTION]: value
								})
							}
						/>
						{renderError(getFieldError(CATEGORY_DESCRIPTION))}
					</Form.Field>
				</Form>
				<Header as="h3">
					Вариации товара
					<Header.Subheader>
						Редактирование цен и весов отдельных товаров
					</Header.Subheader>
				</Header>
				<Segment.Group>
					{getValue(CATEGORY_ITEMS).map(item => (
						<Segment key={item._id}>
							<Header as="h3">
								{item.weight} гр. - {item.price} руб.
								<Header.Subheader
									onClick={() => handleEditingVariation(item._id)}
									style={{ cursor: "pointer" }}
								>
									<a>Изменить</a>
								</Header.Subheader>
							</Header>
						</Segment>
					))}
				</Segment.Group>
			</Modal.Content>
			<Modal.Actions>
				<Button loading={isHydrating} onClick={updateItemStart} positive>
					Сохранить
				</Button>
				<Button onClick={cancelEditing}>Отмена</Button>
			</Modal.Actions>
		</Modal>
	);

EditModal.propTypes = {
	handleEditing: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool,
	getValue: PropTypes.func.isRequired,
	temporaryItem: PropTypes.object,
	currentlyEditing: PropTypes.string,
	handleTemporaryItem: PropTypes.func.isRequired,
	updateItemStart: PropTypes.func.isRequired,
	cancelEditing: PropTypes.func.isRequired,
	handleEditingVariation: PropTypes.func.isRequired,
	cancelEditingVariation: PropTypes.func.isRequired,
	currentlyEditingVariation: PropTypes.string,
	updateVariationStart: PropTypes.func.isRequired,
	handleTemporaryItemVariation: PropTypes.func.isRequired,
	getVariationFieldError: PropTypes.func.isRequired,
	getFieldError: PropTypes.func.isRequired,
	error: PropTypes.shape({
		message: PropTypes.string.isRequired
	}),
	validationError: PropTypes.shape({
		message: PropTypes.string.isRequired
	})
};

EditModal.defaultProps = {
	isHydrating: false,
	temporaryItem: {},
	currentlyEditing: null,
	currentlyEditingVariation: null,
	error: null,
	validationError: null
};

const EnhancedEditModal = () => (
	<PanelItemContext.Consumer>
		{({
			handleEditing,
			temporaryItem,
			isHydrating,
			getValue,
			currentlyEditing,
			handleTemporaryItem,
			updateItemStart,
			cancelEditing,
			handleEditingVariation,
			cancelEditingVariation,
			currentlyEditingVariation,
			getTemporaryItemVariationValue,
			variationError,
			updateVariationStart,
			error,
			handleTemporaryItemVariation,
			getVariationFieldError,
			getFieldError
		}) => (
			<EditModal
				handleEditing={handleEditing}
				temporaryItem={temporaryItem}
				currentlyEditing={currentlyEditing}
				cancelEditing={cancelEditing}
				isHydrating={isHydrating}
				getValue={getValue}
				handleTemporaryItem={handleTemporaryItem}
				updateItemStart={updateItemStart}
				handleEditingVariation={handleEditingVariation}
				cancelEditingVariation={cancelEditingVariation}
				currentlyEditingVariation={currentlyEditingVariation}
				getTemporaryItemVariationValue={getTemporaryItemVariationValue}
				variationError={variationError}
				updateVariationStart={updateVariationStart}
				getFieldError={getFieldError}
				error={error}
				getVariationFieldError={getVariationFieldError}
				handleTemporaryItemVariation={handleTemporaryItemVariation}
			/>
		)}
	</PanelItemContext.Consumer>
);

export default EnhancedEditModal;
