import React from "react";
import PropTypes from "prop-types";
import ItemEditModal from "../ItemEditModal";
import styles from "./styles.less";

import {
	Modal,
	Form,
	Button,
	Message,
	Segment,
	Header
} from "semantic-ui-react";

import {
	CATEGORY_TITLE,
	CATEGORY_DESCRIPTION,
	CATEGORY_ITEMS
} from "@consts/category";

import { ItemsContext } from "../../context";

const renderError = error =>
	error &&
	error.msg &&
	<Message negative>
		{error.msg}
	</Message>;

const CategoryEditModal = ({
	category,
	handleCategoryEditing,
	error,
	isHydrating,
	getField,
	getCategoryUpdatingError,
	updateCategoryStart,
	handleCategoryTemporary,
	handleItemEditing
}) =>
	<Modal
		onClose={() => handleCategoryEditing(null)}
		open={!!category}
		size="tiny"
	>
		<ItemEditModal />
		<Modal.Header>Редактирование товара</Modal.Header>
		<Modal.Content>
			{error &&
				error.message &&
				<Message negative>
					<Message.Header>Что-то пошло не так</Message.Header>
					<p>
						{error.message}
					</p>
				</Message>}
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
						value={getField(CATEGORY_TITLE)}
						placeholder="Название товара"
						onChange={({ target: { value } }) =>
							handleCategoryTemporary({
								[CATEGORY_TITLE]: value
							})}
					/>
					{renderError(getCategoryUpdatingError(CATEGORY_TITLE))}
				</Form.Field>
				<Form.Field>
					<label htmlFor={CATEGORY_TITLE}>Название товара</label>
					<Form.TextArea
						disabled={isHydrating}
						name={CATEGORY_DESCRIPTION}
						value={getField(CATEGORY_DESCRIPTION)}
						placeholder="Описание товара"
						onChange={({ target: { value } }) =>
							handleCategoryTemporary({
								[CATEGORY_DESCRIPTION]: value
							})}
					/>
					{renderError(getCategoryUpdatingError(CATEGORY_DESCRIPTION))}
				</Form.Field>
			</Form>
			<Header as="h3">
				Вариации товара
				<Header.Subheader>
					Редактирование цен и весов отдельных товаров
				</Header.Subheader>
			</Header>
			<Segment.Group>
				{category[CATEGORY_ITEMS].map(item =>
					<Segment key={item._id}>
						<Header as="h3">
							{item.weight} гр. - {item.price} руб.
							<Header.Subheader
								onClick={() => handleItemEditing(item._id)}
								className={styles.edit}
							>
								<a>Изменить</a>
							</Header.Subheader>
						</Header>
					</Segment>
				)}
			</Segment.Group>
		</Modal.Content>
		<Modal.Actions>
			<Button loading={isHydrating} onClick={updateCategoryStart} positive>
				Сохранить
			</Button>
			<Button onClick={() => handleCategoryEditing(null)}>Отмена</Button>
		</Modal.Actions>
	</Modal>;

CategoryEditModal.propTypes = {
	isHydrating: PropTypes.bool,
	handleCategoryEditing: PropTypes.func.isRequired,
	getField: PropTypes.func.isRequired,
	updateCategoryStart: PropTypes.func.isRequired,
	handleCategoryTemporary: PropTypes.func.isRequired,
	category: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				weight: PropTypes.number.isRequired,
				price: PropTypes.number.isRequired
			})
		)
	}),
	error: PropTypes.shape({
		message: PropTypes.string
	}),
	getCategoryUpdatingError: PropTypes.func.isRequired,
	handleItemEditing: PropTypes.func.isRequired
};

CategoryEditModal.defaultProps = {
	isHydrating: false,
	category: null,
	error: null
};

const EnhancedCategoryEditModal = () =>
	<ItemsContext.Consumer>
		{({
			items,
			categoryUpdating,
			handleCategoryEditing,
			getCategoryUpdatingError,
			updateCategoryStart,
			handleCategoryTemporary,
			handleItemEditing
		}) => {
			if (!categoryUpdating.id) {
				return null;
			}

			/**
       * Find category that edits at 
       * that moment
       */

			const category = items.filter(
				category => category._id === categoryUpdating.id
			)[0];

			/**
       * This function gets value of category field
       * or get temporary field
       */
			const getField = field => {
				if (categoryUpdating.temporary[field] !== undefined) {
					return categoryUpdating.temporary[field];
				}
				return category && category[field];
			};

			return (
				<CategoryEditModal
					handleItemEditing={handleItemEditing}
					isHydrating={categoryUpdating.isHydrating}
					error={categoryUpdating.error}
					getCategoryUpdatingError={getCategoryUpdatingError}
					handleCategoryEditing={handleCategoryEditing}
					getField={getField}
					category={category}
					updateCategoryStart={updateCategoryStart}
					handleCategoryTemporary={handleCategoryTemporary}
				/>
			);
		}}
	</ItemsContext.Consumer>;

export default EnhancedCategoryEditModal;
