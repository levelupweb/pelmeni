import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withRouter } from "react-router";
import cookies from "js-cookie";
import { TOKEN } from "@src/consts";
import parseError from "@utils/parseError";
import { Loader, Message } from "semantic-ui-react";
import config from "@utils/config";
import createNativeError from "@utils/createNativeError";

const withAuth = Component => {
	class WithAuthComponent extends React.Component {
		constructor(props) {
			super(props);
			this.checkTokenStart = this.checkTokenStart.bind(this);
			this.checkTokenProcess = this.checkTokenProcess.bind(this);
			this.checkTokenSuccess = this.checkTokenSuccess.bind(this);
			this.checkTokenFail = this.checkTokenFail.bind(this);
			this.state = {
				isAuthStarted: false,
				isHydrating: false,
				isAuthed: false,
				error: null
			};
		}

		componentDidMount() {
			this.checkTokenStart();
		}

		componentDidCatch() {
			this.setState({
				error: createNativeError(
					"Непредвиденная ошибка клиента. Обратитесь к администратору"
				)
			});
		}

		checkTokenStart() {
			const { isHydrating } = this.state;

			if (!isHydrating) {
				this.setState(
					{ isHydrating: true, error: null, isAuthStarted: true },
					() => this.checkTokenProcess()
				);
			}
		}

		checkTokenProcess() {
			const token = cookies.get(TOKEN);

			return axios
				.get(config.url + "/admin/check", {
					headers: {
						authorization: token
					}
				})
				.then(this.checkTokenSuccess)
				.catch(this.checkTokenFail);
		}

		checkTokenSuccess({ data }) {
			if (data.isAuthed) {
				this.setState({
					isAuthed: data.isAuthed,
					isHydrating: false
				});

				return;
			}

			this.checkTokenFail();
		}

		checkTokenFail(reason) {
			const { history } = this.props;
			const error = parseError(reason);

			/**
			 * token is not attached to cookies
			 * should re-auth
			 */
			if (error.code === "0008") {
				history.push("/auth");
			}

			this.setState({
				error,
				isHydrating: false
			});
		}

		render() {
			const { isAuthed, isAuthStarted, isHydrating, error } = this.state;
			const { history } = this.props;

			if (error && error.message) {
				return (
					<Message negative>
						<Message.Header>Непредвиденная ошибка</Message.Header>
						<p>{error.message}</p>
					</Message>
				);
			}

			if (isHydrating || !isAuthStarted) {
				return (
					<Loader inline centered active>
						Подождите, идёт авторизация
					</Loader>
				);
			}

			if (!isAuthed) {
				/**
				 * Redirect to auth if user
				 * can't be authorized in system
				 */
				return history.push("/auth");
			}

			return <Component {...this.props} />;
		}
	}

	WithAuthComponent.propTypes = {
		history: PropTypes.shape({
			push: PropTypes.func.isRequired
		})
	};

	return withRouter(WithAuthComponent);
};

export default withAuth;
