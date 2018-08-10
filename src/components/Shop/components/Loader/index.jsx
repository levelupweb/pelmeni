import React from "react";
import PropTypes from "prop-types";
import { Loader } from "semantic-ui-react";

const LoaderWrapper = ({ text, active, centered, inline }) => (
	<Loader active={active} centerd={centered} inline={inline}>
		{text}
	</Loader>
);

LoaderWrapper.propTypes = {
	text: PropTypes.string,
	active: PropTypes.bool,
	centered: PropTypes.bool,
	inline: PropTypes.bool
};

LoaderWrapper.defaultProps = {
	text: "Подождите, идёт загрузка",
	active: true,
	centerd: true,
	inline: true,
};

export default LoaderWrapper;