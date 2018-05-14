import React from "react";
import axios from "axios";

const defaultForm = {
  name: "",
  email: "",
  phone: "",
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.state = {
      form: defaultForm,
      errors: [],
      isHydrating: false,
    }
  }

  handleForm(e) {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({
      form: Object.assign({}, this.state.form, {
        [field]: value,
      })
    })
  }

  checkForm() {
    const { name, phone, email } = this.state.form;
    return (phone.length > 1);
  }

  sendForm(e) {
    const { form } = this.state;
    const { onSuccess, cart } = this.props;

    e.preventDefault();

    this.setState({ isHydrating: true, })

    if (this.checkForm()) {
      return axios
        .post("/send", Object.assign({}, form, { items: cart }))
        .then(() => onSuccess())
        .then(() => this.setState({ isHydrating: false }))
        .catch((err) => this.handleServerErrors(err));
    } else {
      return this.handleErrors(["Пожалуйста, заполните обязательное поле - номер телефона"]);
    }
  }

  handleServerErrors(err) {
    if (!err.response) return this.handleErrors(["Произошла ошибка во время отправки заказа. Повторите позже"]);
    if (err.response.status === 422) return this.handleErrors(err.response.data);
    if (err.response.status >= 400) return this.handleErrors(["Произошла непредвиденная ошибка на сервере. Попробуйте позже"]);
  }

  handleErrors(errors) {
    this.setState({ errors, isHydrating: false })
  }

  render() {
    const { form, errors, isHydrating } = this.state;
    const { name, phone, email } = form;

    return (
      <div className="ui container text">
        {errors.length > 0 &&
          <div className="ui error message">
            <i className="close icon"></i>
            <div className="header">
              В ходе выполнения операции возникли следующие ошибки
            </div>
            <ul className="list">
              {errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
          </div>
        }
        <form onSubmit={this.sendForm} className={`ui form inverted big ${isHydrating && "loading"}`} >
          <div className="field">
            <label>Ваше имя</label>
            <input value={name} onChange={this.handleForm} type="text" name="name" placeholder="Иван Иванов" />
          </div>
          <div className="field">
            <label>E-mail адрес</label>
            <input value={email} onChange={this.handleForm} type="email" name="email" placeholder="inbox@mail.ru" />
          </div>
          <div className="field">
            <label>Контактный телефон</label>
            <input value={phone} onChange={this.handleForm} type="tel" name="phone" placeholder="+7" />
          </div>
          <button className="ui button big" type="submit">Отправить</button>
        </form>
      </div>
    )
  }
}