import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { AuthFormContext } from "./context";

import styles from "./styles.less";
import { ADMIN_LOGIN, ADMIN_PASSWORD } from "@consts/admin";
import { Form, Button, Message, Segment, Header } from "semantic-ui-react";

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
	}

	renderFieldError(field) {
		const { validationErrors } = this.props;

		if (
			validationErrors &&
			validationErrors[field] &&
			validationErrors[field].msg
		) {
			return (
				<Message negative>
					<p>{validationErrors[field].msg}</p>
				</Message>
			);
		}

		return null;
	}

	render() {
		const {
			error,
			temporaryCredentials,
			isHydrating,
			sendCredentialsStart,
			handleTemporaryCredentials
		} = this.props;

		return (
			<Segment className={styles.wrapper}>
				<Header as="h2">
					Вход в админ-панель
					<Header.Subheader>
						Пожалуйста, введите свой логин и пароль от админ-панели
					</Header.Subheader>
				</Header>
				{error &&
					error.message && (
					<Fade>
						<div className={styles.error}>
							<Message negative>
								<Message.Header>Непредвидення ошибка</Message.Header>
								<p>{error.message}</p>
							</Message>
						</div>
					</Fade>
				)}
				<Form size="large">
					<Form.Field>
						<label htmlFor={ADMIN_LOGIN}>Логин</label>
						<Form.Input
							disabled={isHydrating}
							value={temporaryCredentials[ADMIN_LOGIN]}
							name={ADMIN_LOGIN}
							onChange={({ target: { value } }) =>
								handleTemporaryCredentials({
									[ADMIN_LOGIN]: value
								})
							}
							placeholder="Введите ваш логин"
						/>
						<div className={styles.fieldError}>
							{this.renderFieldError(ADMIN_LOGIN)}
						</div>
					</Form.Field>
					<Form.Field>
						<label htmlFor={ADMIN_PASSWORD}>Пароль</label>
						<Form.Input
							type="password"
							disabled={isHydrating}
							value={temporaryCredentials[ADMIN_PASSWORD]}
							name={ADMIN_PASSWORD}
							onChange={({ target: { value } }) =>
								handleTemporaryCredentials({
									[ADMIN_PASSWORD]: value
								})
							}
							placeholder="Введите ваш пароль"
						/>
						<div className={styles.fieldError}>
							{this.renderFieldError(ADMIN_PASSWORD)}
						</div>
					</Form.Field>
					<div className={styles.action}>
						<Button
							loading={isHydrating}
							onClick={sendCredentialsStart}
							primary
						>
							Войти
						</Button>
					</div>
				</Form>
			</Segment>
		);
	}
}

AuthForm.propTypes = {
	isHydrating: PropTypes.bool,
	error: PropTypes.shape({
		message: PropTypes.string.isRequired
	}).isRequured,
	validationErrors: PropTypes.arrayOf(
		PropTypes.shape({
			msg: PropTypes.string.isRequired
		})
	),
	sendCredentialsStart: PropTypes.func.isRequired,
	handleTemporaryCredentials: PropTypes.func.isRequired,
	temporaryCredentials: PropTypes.shape({
		[ADMIN_LOGIN]: PropTypes.string,
		[ADMIN_PASSWORD]: PropTypes.string
	})
};

AuthForm.defaultProps = {
	temporaryCredentials: {},
	validationErrors: null,
	error: null,
	isHydrating: false
};

const EnhancedAuthForm = () => (
	<AuthFormContext.Consumer>
		{({
			isHydrating,
			error,
			validationErrors,
			sendCredentialsStart,
			handleTemporaryCredentials,
			temporaryCredentials
		}) => (
			<AuthForm
				isHydrating={isHydrating}
				error={error}
				validationErrors={validationErrors}
				sendCredentialsStart={sendCredentialsStart}
				handleTemporaryCredentials={handleTemporaryCredentials}
				temporaryCredentials={temporaryCredentials}
			/>
		)}
	</AuthFormContext.Consumer>
);

export default EnhancedAuthForm;
