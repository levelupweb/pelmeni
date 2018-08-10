import React from "react";
import Fade from "react-reveal/Fade";
import { Header, Container, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import styles from "./styles.less";

const Page = ({ title, description, children, className, text, fluid }) => (
	<Container fluid={fluid} text={text}>
		<Segment inverted className={`${className} ${styles.page}`}>
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
			<Fade><div className={styles.children}>{children}</div></Fade>
		</Segment>
	</Container>
);

Page.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
	text: PropTypes.bool,
	fluid: PropTypes.bool,
};

Page.defaultProps = {
	text: false,
	title: null,
	description: null,
	className: null,
	fluid: false,
};

export default Page;
