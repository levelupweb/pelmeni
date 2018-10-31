import React from "react";
import styles from "./styles.less";
import { Container } from "semantic-ui-react";

class Promo extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Container>
					<span className={styles.bold}>Акция:</span>
					{"Скидка 15% на всё по промокоду \"15klass\""}
				</Container>
			</div>
		);
	}
}

export default Promo;
