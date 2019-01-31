import React from "react";
import styles from "./styles.less";
import { Container } from "semantic-ui-react";

class Promo extends React.Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<Container>
					<span className={styles.bold}>Акция:</span>
					{"скидка 15% по промокоду \"15klassnye\""}
				</Container>
			</div>
		);
	}
}

export default Promo;
