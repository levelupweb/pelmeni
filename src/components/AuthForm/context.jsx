import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import cookies from "js-cookie";
import config from "@utils/config";
import { withRouter } from "react-router";
import { TOKEN } from "@src/consts";

export const AuthFormContext = React.createContext();

class AuthFormProviderClass extends React.Component {
	constructor(props) {
		super(props);
		this.sendCredentialsStart = this.sendCredentialsStart.bind(this);
		this.sendCredentialsProcess = this.sendCredentialsProcess.bind(this);
		this.sendCredentialsSuccess = this.sendCredentialsSuccess.bind(this);
		this.sendCredentialsFail = this.sendCredentialsFail.bind(this);
		this.handleError = this.handleError.bind(this);
		this.handleValidationErrors = this.handleValidationErrors.bind(this);
		this.handleTemporaryCredentials = this.handleTemporaryCredentials.bind(
			this
		);
		this.state = {
			isHydrating: false,
			temporaryCredentials: {},
			error: null,
			validationErrors: null
		};
	}

	handleTemporaryCredentials(data) {
		this.setState(state => ({
			temporaryCredentials: {
				...state.temporaryCredentials,
				...data
			}
		}));
	}

	sendCredentialsStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState(
				{ isHydrating: true, error: null, validationErrors: null },
				() => {
					this.sendCredentialsProcess();
				}
			);
		}
	}

	sendCredentialsProcess() {
		const { temporaryCredentials } = this.state;

		axios
			.post(config.url + "/admin/auth", temporaryCredentials)
			.then(this.sendCredentialsSuccess)
			.catch(this.sendCredentialsFail);
	}

	sendCredentialsSuccess({ data }) {
		const { history } = this.props;

		const unresolvedError = {
			message: "Неизвестная ошибка клиента. Обратитесь к администратору"
		};

		if (data.token) {
			/**
			 * Set token and redirect to panel
			 */
			cookies.set(TOKEN, data.token);
			history.push("/admin");
		}

		this.handleError(unresolvedError);
	}

	sendCredentialsFail(error) {
		const { response } = error;

		if (response) {
			if (response.status) {
				if (response.status === 422) {
					return this.handleValidationErrors(response.data.errors);
				}
				return this.handleError(response.data);
			}
			return this.handleError({
				message: "Неизвестная ошибка сервера"
			});
		}
		this.handleError({
			message: "Неизвестная ошибка клиента"
		});
	}

	handleError(error) {
		this.setState({
			error,
			isHydrating: false
		});
	}

	handleValidationErrors(errors) {
		this.setState({
			isHydrating: false,
			validationErrors: errors
		});
	}

	render() {
		const {
			state: { isHydrating, error, validationErrors, temporaryCredentials },
			props: { children },
			handleTemporaryCredentials,
			sendCredentialsStart,
		} = this;

		return (
			<AuthFormContext.Provider
				value={{
					isHydrating,
					error,
					validationErrors,
					temporaryCredentials,
					handleTemporaryCredentials,
					sendCredentialsStart,
				}}
			>
				{children}
			</AuthFormContext.Provider>
		);
	}
}

AuthFormProviderClass.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	children: PropTypes.element.isRequired
};

export const AuthFormProvider = withRouter(AuthFormProviderClass);
