import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router"
import Fade from "react-reveal/Fade";
import axios from "axios";
import "./styles.css";


class ShopForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleServerErrors = this.handleServerErrors.bind(this);

    this.state = {
      form: {},
      errors: [],
      isHydrating: false,
      isSended: false,
    }
  }
 
  componentDidMount() {
    require("jquery");
    require("../../../semantic/semantic/dist/components/checkbox");

    $('.ui.checkbox')
      .checkbox()
    ;
  }

  handleForm({ target }) {
    const { name, value } = target;

    this.setState({
      form: Object.assign({}, this.state.form, {
        [name]: value,
      })
    })
  }

  handleSuccess() {
    const { onSuccess, cart, shopRefresh } = this.props;
    
    this.setState({
      form: {},
      isHydrating: false,
      isSended: true,
    }, () => {
      this.props.history.push(this.props.location.pathname + "#success");
      shopRefresh()
    })
  }

  submitForm() {
    const { form } = this.state;
    const { cart } = this.props;
    
    const result = Object.assign({}, form, { items: cart });

    this.setState({ isHydrating: true }, () => {
      axios.post("/post", result)
        .then(this.handleSuccess)
        .catch(this.handleServerErrors);
    })
  }

  handleServerErrors(err) {
    if (err.response) {
      if (err.response.status === 422) {
        this.setState({
          isHydrating: false,
          errors: Object.values(err.response.data.errors)
        });
      } else {
        this.setState({
          isHydrating: false,
          errors: ["Произошла непредвиденная ошибка на сервере. Попробуйте позже"],
        });
      }
    } else {
      this.setState({
        isHydrating: false,
        errors: ["Произошла ошибка во время отправки заказа. Повторите позже"]
      })
    }
  }

  handleErrors(errors) {
    this.setState({ errors, isHydrating: false })
  }

  renderErrors() {
    const { errors } = this.state;

    if (errors.length > 0) {
      return (
        <ul className="ui list inverted">
          {errors.map((err, i) => <li style={{color: "#fff"}} className="item" key={i}>{err.msg ? err.msg : err}</li>)}
        </ul>
      )
    }

    return null;
  }

  render() {
    const { form, isHydrating, isSended } = this.state;

    if (isSended) {
      return (
        <div className="ui container text">
          <Fade bottom cascade>
            <h1 className="header ui inverted">
              Готово!
            </h1>
            <p className="lead small" style={{color: "#fff"}}>
              Ваш заказ успешно подтвержден! Мы свяжемся с{" "}
              вами в течение 15 минут! Оплата производится при получении{" "}
              заказа наличными деньгами или банковской картой.{" "}
              Спасибо, что выбираете нашу продукцию!
            </p>
            <Link to="/">
              <button className="ui button primary">
                Вернуться на главную
              </button>
            </Link>
          </Fade>
        </div>
      );
    }

    return (
      <div className="ui container text contact-form">
        {this.renderErrors()}
        <div className={`ui form inverted big ${isHydrating && "loading"}`}>
          <Fade bottom>
            <div className="field">
              <label>Ваше имя</label>
              <input 
                value={form.name} 
                onChange={this.handleForm} 
                type="text" 
                name="name" 
                placeholder="Иван Иванов" 
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="field">
              <label>Контактный телефон</label>
              <input 
                value={form.phone} 
                onChange={this.handleForm} 
                type="text" 
                name="phone" 
                placeholder="Телефон должен начинаться с +7" 
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="field">
              <label>E-mail адрес</label>
              <input 
                value={form.email} 
                onChange={this.handleForm} 
                type="email" 
                name="email" 
                placeholder="В формете noreply@mail.ru" 
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="field">
              <label>Адрес доставки</label>
              <input 
                value={form.dostavka} 
                onChange={this.handleForm} 
                type="text" 
                name="dostavka" 
                placeholder="Укажите, если хотите ускорить процесс" 
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="field">
              <label>Ваше сообщение или вопрос</label>
              <textarea 
                value={form.message} 
                onChange={this.handleForm} 
                name="message" 
                placeholder="Здесь вы можете оставить дополнительное сообщение к заказу" 
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="field">
              <div class="ui checkbox">
                <label>Соглашаюсь с условиями обработки и хранения персональных данных</label>
                <input type="checkbox" tabIndex="0" className="hidden" />
              </div>
            </div>
          </Fade> 
          <Fade bottom>
            <button 
              className="ui button big basic inverted" 
              type="submit"
              onClick={this.submitForm}
            >
              Отправить
            </button>
          </Fade>
        </div>
      </div>
    );
  }
}

export default ShopForm;