import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Message, Button, Icon } from "semantic-ui-react";
import { ShopContext } from "../Shop/context";
import axios from "axios";
import config from "@utils/config";
import parseError from "@utils/parseError";


class PromoInput extends React.Component {
	constructor(props) {
		super(props);
		this.checkCodeStart = this.checkCodeStart.bind(this);
		this.checkCodeProcess = this.checkCodeProcess.bind(this);
		this.checkCodeSuccess = this.checkCodeSuccess.bind(this);
		this.checkCodeFail = this.checkCodeFail.bind(this);
		this.handleTemporaryCode = this.handleTemporaryCode.bind(this);
		this.state = {
			isChecking: false,
			discount: null,
			error: null,
			temporaryCode: null,
			isValid: true
		};
	}

	checkCodeStart() {
		const { isChecking, discount } = this.state;

		if (!isChecking && !discount) {
			this.setState({ isChecking: true, error: null }, () => {
				this.checkCodeProcess();
			});
		}
	}

	checkCodeProcess() {
		const { temporaryCode } = this.state;

		axios
			.get(config.url + "/promo/check", {
				params: { code: temporaryCode }
			})
			.then(this.checkCodeSuccess)
			.catch(this.checkCodeFail);
	}

	checkCodeSuccess({ data }) {
		const { handlePromo } = this.props;

		if (data) {
			this.setState({ isChecking: false, isValid: true }, () => {
				handlePromo(data);
			});

			return;
		}

		this.setState({
			isChecking: false,
			isValid: false
		});
	}

	checkCodeFail(reason) {
		const error = parseError(reason);

		this.setState({
			error,
			isChecking: false,
		});
	}

	handleTemporaryCode({ target: { value } }) {
		this.setState({
			temporaryCode: value
		});
	}

	render() {
		const { temporaryCode, isChecking, error, isValid } = this.state;

		return (
			<Form onSubmit={this.checkCodeStart}>
				{error && (
					<Message negative>
						<p>{error.message}</p>
					</Message>
				)}
				<Form.Field>
					<Input
						value={temporaryCode}
						placeholder="У вас есть промокод?"
						onChange={this.handleTemporaryCode}
						loading={isChecking}
						action={
							<Button icon onClick={this.checkCodeStart} loading={isChecking}>
								<Icon name="angle right" />
							</Button>
						}
					/>
					{isValid === false && (
						<Message negative>
							<p>Код не действителен. Попробуйте ввести другой</p>
						</Message>
					)}
				</Form.Field>
			</Form>
		);
	}
}

PromoInput.propTypes = {
	promo: PropTypes.shape({
		code: PropTypes.string,
		discount: PropTypes.number
	}),
	handlePromo: PropTypes.func.isRequired
};

PromoInput.defaultProps = {
	promo: null
};

const EnhancedPromoInput = () => (
	<ShopContext.Consumer>
		{({ promo, handlePromo }) => (
			<PromoInput promo={promo} handlePromo={handlePromo} />
		)}
	</ShopContext.Consumer>
);

export default EnhancedPromoInput;
