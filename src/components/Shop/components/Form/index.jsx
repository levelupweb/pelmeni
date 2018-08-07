import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import config  from "@utils/config";
import { ShopContext } from "../../context";
import styles from "./styles.less";

import {
	PURCHASE_ITEMS,
	PURCHASE_PROMO,
	PURCHASE_AGREEMENT
} from "@consts/purchase";

import {
	USER_NAME,
	USER_EMAIL,
	USER_DOSTAVKA,
	USER_MESSAGE,
	USER_PHONE,
} from "@consts/user";

import {
	Form,
	Container,
	TextArea,
	Checkbox,
	Button
} from "semantic-ui-react";

class FormWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.handleTemporaryForm = this.handleTemporaryForm.bind(this);
		this.createPurchaseStart = this.createPurchaseStart.bind(this);
		this.createPurchaseProcess = this.createPurchaseProcess.bind(this);
		this.createPurchaseSuccess = this.createPurchaseSuccess.bind(this);
		this.createPurchaseFail = this.createPurchaseFail.bind(this);
		this.state = {
			temporaryForm: {},
			isHydrating: null,
			error: null,
			validationErrors: [],
			isSended: false,
		}
	}

	handleTemporaryForm({ target: { value, name } }) {
		this.setState(state => ({
			temporaryForm: {
				...state.temporaryForm,
				[name]: value
			}
		}))
	}

	handleCheckbox(_, { checked }) {
		this.setState(state => ({
			temporaryForm: {
				...state.temporaryForm,
				[PURCHASE_AGREEMENT]: checked
			}
		}))
	}

	createPurchaseStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState({ isHydrating: true }, () =>
				this.createPurchaseProcess()
			)
		}
	}

	createPurchaseProcess() {
		const { temporaryForm } = this.state;

		const { 
			promo,
			cartIds
		} = this.props;

		axios.post(config.url + "/buying/buy", {
			...temporaryForm,
			[PURCHASE_PROMO]: promo.code,
			[PURCHASE_ITEMS]: cartIds
		})
			.then(this.createPurchaseSuccess)
			.catch(this.createPurchaseFail)
	}

	createPurchaseSuccess() {
		const { refreshCart } = this.props;

		this.setState({
			isHydrating: false,
			isSended: true
		}, () => refreshCart())
	} 

	createPurchaseFail({ response }) {
		console.log(response);
		if (response) {
			if (response.status) {
				if (response.status === 422) {
					return this.handleValidationError(response.data);
				}
				return this.handleError(response.data);
			}
			return this.handleError({
				message: "Неизвестная ошибка сервера"
			})
		}
		return this.handleError({
			message: "Неизвестная ошибка клиента"
		})
	}

	handleValidationError(errors) {
		this.setState({
			isHydrating: false,
			validationErrors: errors
		})
	}

	handleError(error) {
		this.setState({
			error,
			isHydrating: false
		})
	}

	render() {
		const { temporaryForm } = this.state;

		return (
			<Container text>
				<div className={styles.wrapper}>
					<Form size="large">
						<Form.Field className={styles.field}>
							<label>
								Ваше имя
							</label>
							<input
								onChange={this.handleTemporaryForm}
								value={temporaryForm[USER_NAME]}
								placeholder="Как к вам обращаться?"
								name={USER_NAME}
							/>
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>
								E-mail адрес
							</label>
							<input
							  type="email"
								onChange={this.handleTemporaryForm}
								value={temporaryForm[USER_EMAIL]}
								placeholder="Введите ваш E-mail адрес"
								name={USER_EMAIL}
							/>
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>
								Адрес доставки заказа
							</label>
							<input
								onChange={this.handleTemporaryForm}
								value={temporaryForm[USER_DOSTAVKA]}
								placeholder="Куда доставить ваш заказ?"
								name={USER_DOSTAVKA}
							/>
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>
								Контактный телефон
							</label>
							<input
								type="tel"
								onChange={this.handleTemporaryForm}
								value={temporaryForm[USER_PHONE]}
								placeholder="Обязательное поле"
								name={USER_PHONE}
							/>
						</Form.Field>
						<Form.Field className={styles.field}>
							<label>
								Примечание к заказу
							</label>
							<TextArea
								onChange={this.handleTemporaryForm}
								value={temporaryForm[USER_MESSAGE]}
								placeholder="Добавьте примечание к своему заказу здесь.."
								name={USER_MESSAGE}
							/>
						</Form.Field>
						<Form.Field>
							<Form.Field className={styles.field}>
								<Checkbox 
									label='Я соглашаюсь с условиями обработки и хранения персональных данных' 
									name="agreement"
									onChange={this.handleCheckbox}
									checked={temporaryForm[PURCHASE_AGREEMENT]}
								/>
							</Form.Field>
						</Form.Field>
						<Form.Field>
							<Button
								size="large"
								positive
								onClick={this.createPurchaseStart}
							>
								Отправить заказ
							</Button>
						</Form.Field>
					</Form>
				</div>
			</Container>
		)
	}
}

FormWrapper.propTypes = {
	refreshCart: PropTypes.func.isRequired,
	cartIds: PropTypes.arrayOf(PropTypes.string),
	promo: PropTypes.shape({
		discount: PropTypes.number,
		code: PropTypes.string
	})
}

FormWrapper.defaultProps = {
	cardIds: [],
	promo: {
		discount: null,
		code: null,
	}
}

const EnhancedFormWrapper = () => (
	<ShopContext.Consumer>
		{({ refreshCart, promo, cart }) => (
			<FormWrapper 
				refreshCart={refreshCart}
				promo={promo}
				cartIds={cart.map(item => item._id)}
			/>
		)}
	</ShopContext.Consumer>
)

export default EnhancedFormWrapper;