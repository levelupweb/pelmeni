import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "@utils/config";
import styles from "./styles.less";

import { Form, Container, Button, Message, Header } from "semantic-ui-react";

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleTemporaryForm = this.handleTemporaryForm.bind(this);
		this.publishStart = this.publishStart.bind(this);
		this.publishProcess = this.publishProcess.bind(this);
		this.publishSuccess = this.publishSuccess.bind(this);
		this.publishFail = this.publishFail.bind(this);
		this.dismissError = this.dismissError.bind(this);
		this.state = {
			temporaryForm: {},
			isHydrating: null,
			error: null,
			validationErrors: null,
			isSended: false
		};
	}

	handleTemporaryForm({ target: { value, name } }) {
		this.setState(state => ({
			temporaryForm: {
				...state.temporaryForm,
				[name]: value
			}
		}));
	}

	publishStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState(
				{
					isHydrating: true,
					error: null,
					validationErrors: null
				},
				() => this.publishProcess()
			);
		}
	}

	publishProcess() {
		const { temporaryForm } = this.state;

		axios
			.post(config.url + "/contact", temporaryForm)
			.then(this.publishSuccess)
			.catch(this.publishFail);
	}

	publishSuccess() {
		this.setState({
			isHydrating: false,
			isSended: true
		});
	}

	publishFail(error) {
		if (error) {
			const { response } = error;
			if (response) {
				if (response.status) {
					if (response.status === 422) {
						return this.handleValidationError(response.data.errors);
					}
					return this.handleError(response.data);
				}
				return this.handleError({
					message:
						"Неизвестная ошибка сервера. Попробуйте отправить свой заказ чуть позже"
				});
			}
		}
		return this.handleError({
			message:
				"Неизвестная ошибка клиента. Попробуйте обновить страницу и отправить форму ещё раз"
		});
	}

	handleValidationError(errors) {
		this.setState({
			isHydrating: false,
			validationErrors: errors
		});
	}

	handleError(error) {
		this.setState({
			error,
			isHydrating: false
		});
	}

	dismissError() {
		this.setState({ error: null });
	}

	renderError(field) {
		const { validationErrors } = this.state;

		if (validationErrors && validationErrors[field]) {
			return (
				<Fade>
					<Message negative>
						<p>{validationErrors[field].msg}</p>
					</Message>
				</Fade>
			);
		}

		return null;
	}

	render() {
		const {
			temporaryForm,
			isHydrating,
			validationErrors,
			error,
			isSended
		} = this.state;

		const { withTitle } = this.props;

		if (isSended) {
			return (
				<Container text className={styles.successWrapper}>
					<Fade>
						<Header
							textAlign="center"
							as="h2"
							className={styles.success}
							inverted
						>
							Ваше сообщение отправлено
							<Header.Subheader>
								Наши менеджеры получили ваше сообщение. Мы постараемся вам
								ответить как можно скорее. Спасибо за вашу обратную связь!
							</Header.Subheader>
						</Header>
						<Link to="/">
							<Button primary>Вернуться на главную</Button>
						</Link>
					</Fade>
				</Container>
			);
		}

		return (
			<Container text>
				<Fade>
					<div className={styles.wrapper}>
						{withTitle && (
							<div className={styles.title}>
								<Header as="h1" inverted>
									Обратная связь
								</Header>
								<p className={styles.description}>
									Оставьте свое пожелание или отзыв, заполнив форму обратной
									связи. Если вы хотите получить ответ, обязательно укажите
									контактный E-mail адрес
								</p>
							</div>
						)}
						{error && (
							<Fade>
								<Message
									className={styles.error}
									negative
									onDismiss={this.dismissError}
								>
									<Message.Header>Непредвиденная ошибка</Message.Header>
									<p>{error.message}</p>
								</Message>
							</Fade>
						)}
						<Form size="large" error={!!validationErrors}>
							<Form.Field className={styles.field}>
								<label>Ваше имя</label>
								<Form.Input
									className={styles.input}
									error={validationErrors && !!validationErrors.name}
									disabled={isHydrating}
									onChange={this.handleTemporaryForm}
									value={temporaryForm.name}
									placeholder="Как к вам обращаться?"
									name="name"
								/>
								{this.renderError("name")}
							</Form.Field>
							<Form.Field className={styles.field}>
								<label>E-mail адрес для ответа</label>
								<Form.Input
									type="email"
									className={styles.input}
									error={validationErrors && !!validationErrors.email}
									disabled={isHydrating}
									onChange={this.handleTemporaryForm}
									value={temporaryForm.email}
									placeholder="Введите ваш E-mail адрес"
									name="email"
								/>
								{this.renderError("email")}
							</Form.Field>
							<Form.Field className={styles.field}>
								<label>Ваше сообщение</label>
								<Form.TextArea
									className={styles.input}
									onChange={this.handleTemporaryForm}
									disabled={isHydrating}
									error={validationErrors && !!validationErrors.message}
									value={temporaryForm.message}
									placeholder="Начните писать ваше сообщение в этом текстовом поле"
									name="message"
								/>
								{this.renderError("message")}
							</Form.Field>
							<Form.Field>
								<Button
									loading={isHydrating}
									size="large"
									onClick={this.publishStart}
									primary
								>
									Отправить
								</Button>
							</Form.Field>
						</Form>
					</div>
				</Fade>
			</Container>
		);
	}
}

ContactForm.propTypes = {
	refreshCart: PropTypes.func.isRequired,
	cart: PropTypes.arrayOf(PropTypes.shape({})),
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	promo: PropTypes.shape({
		discount: PropTypes.number,
		code: PropTypes.string
	}),
	withTitle: PropTypes.bool
};

ContactForm.defaultProps = {
	cardIds: [],
	withTitle: false,
	promo: {
		discount: null,
		code: null
	}
};

export default ContactForm;
