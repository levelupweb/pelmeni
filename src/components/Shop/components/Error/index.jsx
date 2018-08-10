import React from "react";
import PropTypes from "prop-types";
import { Header } from "semantic-ui-react";

const ErrorWrapper = ({ title, error }) => error && error.message && (
	<Header textAlign="center" inverted as="h3">
		{title}
		<Header.Subheader>{error.message}</Header.Subheader>
	</Header>
);

ErrorWrapper.propTypes = {
	title: PropTypes.string,
	error: PropTypes.shape({
		message: PropTypes.string
	})
};

ErrorWrapper.defaultProps = {
	title: "Непредвиденная ошибка",
	error: null,
};

export default ErrorWrapper;