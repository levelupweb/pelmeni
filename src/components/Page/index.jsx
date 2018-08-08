import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";
import Fade from "react-reveal/Fade";
import { Header, Container, Segment } from "semantic-ui-react";

const Page = ({ title, description, children, className, text }) => (
	<Container text={text}>
		<Segment vertical inverted className={`${className} ${styles.page}`}>
			{title &&
				description && (
				<Fade bottom>
					<div className={styles.title}>
						<Header inverted as="h1">
							{title}
						</Header>
						<p className={styles.description}>{description}</p>
					</div>
				</Fade>
			)}
			<Fade>{children}</Fade>
		</Segment>
	</Container>
);

Page.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
	text: PropTypes.bool
};

Page.defaultProps = {
	text: false,
	title: null,
	description: null,
	className: null
};

export default Page;
