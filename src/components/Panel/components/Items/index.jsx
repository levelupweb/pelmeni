import React from "react";
import PropTypes from "prop-types";
import CategoryEditModal from "./components/CategoryEditModal";
import Item from "./components/Item";
import { ItemsContext, ItemsProvider } from "./context";
import { Loader, Card, Header } from "semantic-ui-react";
import styles from "./styles.less";

const Items = ({ items, isHydrating, error }) => {
	if (error) {
		return (
			<Header className={styles.error} textAlign="center" as="h2">
				Не удалось загрузить товары
				<Header.Subheader>
					Если вы видите эту ошибку, обратитесь к администратору
				</Header.Subheader>
			</Header>
		);
	}

	if (!items || isHydrating) {
		return (
			<Loader active inline centered>
				Загружаем товары...
			</Loader>
		);
	}

	return (
		<React.Fragment>
			<CategoryEditModal /> 
			<Card.Group itemsPerRow={4} stackable>
				{items.map(item => <Item key={item._id} data={item} />)}
			</Card.Group>
		</React.Fragment>
	);
};


Items.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			items: PropTypes.arrayOf(
				PropTypes.shape({
					price: PropTypes.number,
					weight: PropTypes.number,
					category: PropTypes.string
				})
			)
		})
	),
	isHydrating: PropTypes.bool,
	error: PropTypes.shape({
		message: PropTypes.string
	})
};

const EnhancedItems = () => (
	<ItemsProvider>
		<ItemsContext.Consumer>
			{({ items, fetching }) => (
				<Items items={items} isHydrating={fetching.isHydrating} error={fetching.error} />
			)}
		</ItemsContext.Consumer>
	</ItemsProvider>
);

export default EnhancedItems;
