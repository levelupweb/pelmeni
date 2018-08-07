import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "../../context";
import styles from "./styles.less";

import { Header } from "semantic-ui-react";

const renderWeights = items =>
	items.map(
		(item, i) => `${item.weight} гр.${i !== items.length - 1 ? "," : ""} `
	);

const Title = ({ category }) => (
	<React.Fragment>
		<Header className={styles.title} as="h2" inverted>
			{category.title}
			<Header.Subheader>{renderWeights(category.items)}</Header.Subheader>
		</Header>
		<p className={styles.description}>{category.description}</p>
	</React.Fragment>
);

Title.propTypes = {
	category: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				weight: PropTypes.number,
				price: PropTypes.string
			})
		).isRequired
	}).isRequired
};

const EnhancedTitle = () => (
	<CardContext.Consumer>
		{({ category }) => <Title category={category} />}
	</CardContext.Consumer>
);

export default EnhancedTitle;
