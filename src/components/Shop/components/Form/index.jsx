import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Form, Container, Button, Message } from "semantic-ui-react";
import { createPurchase } from "@API/purchase";
import withAsyncSetState from "@HOC/withAsyncSetState";
import parseError from "@utils/parseError";
import { ShopContext } from "../../context";
import { prepareCartForAPI, injectPromoId } from "./utils";
import * as userConsts from "@consts/user";
import * as purchaseConsts from "@consts/purchase";
import styles from "./styles.less";

class FormWrapper extends Component {
	state = {
		temporaryForm: {},
		isHydrating: null,
		error: null,
		validationErrors: null
	}

	handleTemporaryForm = ({ target: { value, name } }) => {
		this.setState(state => ({
			temporaryForm: {
				...state.temporaryForm,
				[name]: value
			}
		}));
	}

	handleCheckbox = (_, { checked }) => {
		this.setState(state => ({
			temporaryForm: {
				...state.temporaryForm,
				[purchaseConsts.PURCHASE_AGREEMENT]: checked
			}
		}));
	}

	createPurchaseStart = () => {
		const { isHydrating } = this.state;

		if (isHydrating) return;

		this.asyncSetState({
			validationErrors: null,
			isHydrating: true,
			error: null,
		})
			.then(this.createPurchaseProcess);
	}

	createPurchaseProcess = () => {
		const { temporaryForm } = this.state;
		const { promo, cart } = this.props;
		
		const purchase = {
			...temporaryForm,
			[purchaseConsts.PURCHASE_PROMO]: promo,
			[purchaseConsts.PURCHASE_ITEMS]: cart
		};

		createPurchase(purchase)
			.then(this.createPurchaseSuccess)
			.catch(this.createPurchaseFail);
	}

	createPurchaseSuccess = () => {
		const { refreshCart, history } = this.props;

		this.asyncSetState({ isHydrating: false })
			.then(() => {
				history.push("/shop/success");
				refreshCart();
			});
	}

	createPurchaseFail = (reason) => {
		const error = parseError(reason);

		if (error.message) {
			this.setState({
				error,
				isHydrating: false,
			});
		}

		this.setState({
			validationErrors: error,
			isHydrating: false,
		});
	}

	dismissError() {
		this.setState({ 
			error: null 
		});
	}

	renderError(field) {
		const { validationErrors } = this.state;

		if (!validationErrors || !validationErrors[field]) return;

		return (
			<Fade>
				<Message negative>
					<p>{validationErrors[field].msg}</p>
				</Message>
			</Fade>
		);
	}

	render() {
		const { temporaryForm, isHydrating, validationErrors, error } = this.state;

		return (
			<Container text>
				<div className={styles.wrapper}>
					{error && (
						<Fade>
							<Message
								className={styles.error}
								onDismiss={this.dismissError}
								negative
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
								error={validationErrors && !!validationErrors[userConsts.USER_NAME]}
								disabled={isHydrating}
								onChange={this.handleTemporaryForm}
								value={temporaryForm[userConsts.USER_NAME]}
								placeholder="Как к вам обращаться?"
								name={userConsts.USER_NAME}
							/>
							{this.renderError(userConsts.USER_NAME)}
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>E-mail адрес</label>
							<Form.Input
								type="email"
								className={styles.input}
								error={validationErrors && !!validationErrors[userConsts.USER_EMAIL]}
								disabled={isHydrating}
								onChange={this.handleTemporaryForm}
								value={temporaryForm[userConsts.USER_EMAIL]}
								placeholder="Введите ваш E-mail адрес"
								name={userConsts.USER_EMAIL}
							/>
							{this.renderError(userConsts.USER_EMAIL)}
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>Адрес доставки заказа</label>
							<Form.Input
								className={styles.input}
								onChange={this.handleTemporaryForm}
								error={validationErrors && validationErrors[userConsts.USER_DOSTAVKA]}
								disabled={isHydrating}
								value={temporaryForm[userConsts.USER_DOSTAVKA]}
								placeholder="Куда доставить ваш заказ?"
								name={userConsts.USER_DOSTAVKA}
							/>
							{this.renderError(userConsts.USER_DOSTAVKA)}
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>Контактный телефон *</label>
							<Form.Input
								type="tel"
								className={styles.input}
								error={validationErrors && !!validationErrors[userConsts.USER_PHONE]}
								onChange={this.handleTemporaryForm}
								disabled={isHydrating}
								value={temporaryForm[userConsts.USER_PHONE]}
								placeholder="Обязательное поле"
								name={userConsts.USER_PHONE}
							/>
							{this.renderError(userConsts.USER_PHONE)}
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>Примечание к заказу</label>
							<Form.TextArea
								className={styles.input}
								onChange={this.handleTemporaryForm}
								disabled={isHydrating}
								error={validationErrors && !!validationErrors[userConsts.USER_MESSAGE]}
								value={temporaryForm[userConsts.USER_MESSAGE]}
								placeholder="Добавьте примечание к своему заказу здесь.."
								name={userConsts.USER_MESSAGE}
							/>
							{this.renderError(userConsts.USER_MESSAGE)}
						</Form.Field>
						<Form.Field>
							<Form.Field className={styles.field}>
								<Form.Checkbox
									label="Я соглашаюсь с условиями обработки и хранения персональных данных"
									name="agreement"
									disabled={isHydrating}
									error={
										validationErrors && !!validationErrors[purchaseConsts.PURCHASE_AGREEMENT]
									}
									onChange={this.handleCheckbox}
									checked={temporaryForm[purchaseConsts.PURCHASE_AGREEMENT]}
								/>
								{this.renderError(purchaseConsts.PURCHASE_AGREEMENT)}
							</Form.Field>
						</Form.Field>
						<Form.Field>
							<Button
								loading={isHydrating}
								size="large"
								primary
								onClick={this.createPurchaseStart}
							>
								Отправить заказ
							</Button>
						</Form.Field>
					</Form>
				</div>
			</Container>
		);
	}
}

FormWrapper.propTypes = {
	refreshCart: PropTypes.func.isRequired,
	cart: PropTypes.arrayOf(PropTypes.shape({
		[purchaseConsts.PURCHASE_ITEMS_AMOUNT]: PropTypes.number,
		[purchaseConsts.PURCHASE_ITEMS_ITEM]: PropTypes.string,
	})),
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	promo: PropTypes.string,
};

FormWrapper.defaultProps = {
	cardIds: [],
	promo: undefined
};

const WithAsyncSetStateFormWrapper = withAsyncSetState(FormWrapper);

const EnhancedFormWrapper = ({ history }) => (
	<ShopContext.Consumer>
		{({ refreshCart, promo, cart }) => (
			<WithAsyncSetStateFormWrapper
				promo={injectPromoId(promo)}
				cart={prepareCartForAPI(cart)}
				refreshCart={refreshCart}
				history={history}
			/>
		)}
	</ShopContext.Consumer>
);

EnhancedFormWrapper.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default withRouter(EnhancedFormWrapper);
