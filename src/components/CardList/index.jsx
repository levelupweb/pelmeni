import React from "react";
import PropTypes from "prop-types";
import Card from "@components/Card";

import { Grid } from "semantic-ui-react";

const CardList = ({ itemsWithImages }) => (
	<Grid columns={2} stackable>
		{itemsWithImages.map((item, i) => <Card key={i} category={item} />)}
	</Grid>
);

CardList.propTypes = {
	itemsWithImages: PropTypes.arrayOf(
		PropTypes.shape({
			price: PropTypes.number,
			weight: PropTypes.number,
			image: PropTypes.shape({
				src: PropTypes.string,
				srcThumbnail: PropTypes.string
			})
		})
	)
};

CardList.defaultProps = {
	itemsWithImages: null
};

export default CardList;
