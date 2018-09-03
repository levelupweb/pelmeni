import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import axios from "axios";
import config from "@utils/config";
import { ShopContext } from "../../context";
import styles from "./styles.less";

import {
  PURCHASE_ITEMS,
  PURCHASE_PROMO,
  PURCHASE_AGREEMENT,
  PURCHASE_ITEMS_ITEM,
  PURCHASE_ITEMS_AMOUNT
} from "@consts/purchase";

import {
  USER_NAME,
  USER_EMAIL,
  USER_DOSTAVKA,
  USER_MESSAGE,
  USER_PHONE
} from "@consts/user";

import { Form, Container, Button, Message } from "semantic-ui-react";

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleTemporaryForm = this.handleTemporaryForm.bind(this);
    this.createPurchaseStart = this.createPurchaseStart.bind(this);
    this.createPurchaseProcess = this.createPurchaseProcess.bind(this);
    this.createPurchaseSuccess = this.createPurchaseSuccess.bind(this);
    this.createPurchaseFail = this.createPurchaseFail.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.state = {
      temporaryForm: {},
      isHydrating: null,
      error: null,
      validationErrors: null
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

  handleCheckbox(_, { checked }) {
    this.setState(state => ({
      temporaryForm: {
        ...state.temporaryForm,
        [PURCHASE_AGREEMENT]: checked
      }
    }));
  }

  createPurchaseStart() {
    const { isHydrating } = this.state;

    if (!isHydrating) {
      this.setState(
        {
          isHydrating: true,
          error: null,
          validationErrors: null
        },
        () => this.createPurchaseProcess()
      );
    }
  }

  createPurchaseProcess() {
    const { temporaryForm } = this.state;
    const { promo, cart } = this.props;

    axios
      .post(
        config.url + "/buying/buy",
        {
          ...temporaryForm,
          [PURCHASE_PROMO]: promo ? promo._id : undefined,
          [PURCHASE_ITEMS]: cart
        },
        {
          timeout: 10000
        }
      )
      .then(this.createPurchaseSuccess)
      .catch(this.createPurchaseFail);
  }

  createPurchaseSuccess() {
    const { refreshCart, history } = this.props;

    this.setState(
      {
        isHydrating: false
      },
      () => {
        history.push("/shop/success");
        refreshCart();
      }
    );
  }

  createPurchaseFail(error) {
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
        <Message negative>
          <p>{validationErrors[field].msg}</p>
        </Message>
      );
    }

    return null;
  }

  render() {
    const { temporaryForm, isHydrating, validationErrors, error } = this.state;

    return (
      <Container text>
        <div className={styles.wrapper}>
          {error && (
            <Message
              className={styles.error}
              negative
              onDismiss={this.dismissError}
            >
              <Message.Header>Непредвиденная ошибка</Message.Header>
              <p>{error.message}</p>
            </Message>
          )}
          <Form size="large" error={!!validationErrors}>
            <Form.Field className={styles.field}>
              <label>Ваше имя</label>
              <Form.Input
                className={styles.input}
                error={validationErrors && !!validationErrors[USER_NAME]}
                disabled={isHydrating}
                onChange={this.handleTemporaryForm}
                value={temporaryForm[USER_NAME]}
                placeholder="Как к вам обращаться?"
                name={USER_NAME}
              />
              {this.renderError(USER_NAME)}
            </Form.Field>
            <Form.Field className={styles.field}>
              <label>E-mail адрес</label>
              <Form.Input
                type="email"
                className={styles.input}
                error={validationErrors && !!validationErrors[USER_EMAIL]}
                disabled={isHydrating}
                onChange={this.handleTemporaryForm}
                value={temporaryForm[USER_EMAIL]}
                placeholder="Введите ваш E-mail адрес"
                name={USER_EMAIL}
              />
              {this.renderError(USER_EMAIL)}
            </Form.Field>
            <Form.Field className={styles.field}>
              <label>Адрес доставки заказа</label>
              <Form.Input
                className={styles.input}
                onChange={this.handleTemporaryForm}
                error={validationErrors && validationErrors[USER_DOSTAVKA]}
                disabled={isHydrating}
                value={temporaryForm[USER_DOSTAVKA]}
                placeholder="Куда доставить ваш заказ?"
                name={USER_DOSTAVKA}
              />
              {this.renderError(USER_DOSTAVKA)}
            </Form.Field>
            <Form.Field className={styles.field}>
              <label>Контактный телефон *</label>
              <Form.Input
                type="tel"
                className={styles.input}
                error={validationErrors && !!validationErrors[USER_PHONE]}
                onChange={this.handleTemporaryForm}
                disabled={isHydrating}
                value={temporaryForm[USER_PHONE]}
                placeholder="Обязательное поле"
                name={USER_PHONE}
              />
              {this.renderError(USER_PHONE)}
            </Form.Field>
            <Form.Field className={styles.field}>
              <label>Примечание к заказу</label>
              <Form.TextArea
                className={styles.input}
                onChange={this.handleTemporaryForm}
                disabled={isHydrating}
                error={validationErrors && !!validationErrors[USER_MESSAGE]}
                value={temporaryForm[USER_MESSAGE]}
                placeholder="Добавьте примечание к своему заказу здесь.."
                name={USER_MESSAGE}
              />
              {this.renderError(USER_MESSAGE)}
            </Form.Field>
            <Form.Field>
              <Form.Field className={styles.field}>
                <Form.Checkbox
                  label="Я соглашаюсь с условиями обработки и хранения персональных данных"
                  name="agreement"
                  disabled={isHydrating}
                  error={
                    validationErrors && !!validationErrors[PURCHASE_AGREEMENT]
                  }
                  onChange={this.handleCheckbox}
                  checked={temporaryForm[PURCHASE_AGREEMENT]}
                />
                {this.renderError(PURCHASE_AGREEMENT)}
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
  cart: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  promo: PropTypes.shape({
    discount: PropTypes.number,
    code: PropTypes.string
  })
};

FormWrapper.defaultProps = {
  cardIds: [],
  promo: {
    discount: null,
    code: null
  }
};

const EnhancedFormWrapper = ({ history }) => (
  <ShopContext.Consumer>
    {({ refreshCart, promo, cart }) => (
      <FormWrapper
        refreshCart={refreshCart}
        promo={promo}
        history={history}
        cart={cart.map(item => ({
          [PURCHASE_ITEMS_ITEM]: item.id,
          [PURCHASE_ITEMS_AMOUNT]: item.amount
        }))}
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
