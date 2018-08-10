import React from "react";
import styles from "./styles.less";
import { Button, Icon, Header } from "semantic-ui-react";

class Phone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	handleToggle(isActive) {
		this.setState({
			isActive
		});
	}

	render() {
		const { isActive } = this.state;

		return (
			<div className={styles.wrapper}>
				<Button
					icon
					size="massive"
					primary
					circular
					onClick={() => this.handleToggle(!isActive)}
				>
					<Icon name="phone" />
				</Button>
				{isActive && (
					<div className={styles.content}>
						<div
							onClick={() => this.handleToggle(false)}
							className={styles.close}
						>
							<Icon name="close" />
						</div>
						<Header as="h3">У вас есть вопрос?</Header>
						<p>Задайте его нашему менеджеру, позвонив по номеру</p>
						<a href="tel:+79610080166" className={styles.phone}>
							+7 (961) 008-01-66
						</a>
					</div>
				)}
			</div>
		);
	}
}

export default Phone;
