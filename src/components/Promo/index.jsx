import React from "react";
import styles from "./styles.less";
import { Container } from "semantic-ui-react";

class Promo extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Container>
					<span className={styles.bold}>Акция:</span>
					Бесплатная доставка по Костроме С 1 по 31 октября
				</Container>
			</div>
		);
	}
}

export default Promo;
