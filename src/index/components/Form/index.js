import React from "react";
import axios from "axios";

const defaultForm = {
  name: "",
  email: "",
  message: "",
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
      isSended: false,
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
    const { name, email, message } = this.state.form;
    return (name.length > 1 && email.length > 1 && message.length > 1);
  }

  sendForm(e) {
    const { form } = this.state;
    const { onSuccess } = this.props;

    e.preventDefault();

    this.setState({ isHydrating: true, })

    if (this.checkForm()) {
      return axios
        .post("/feedback", form)
        .then(() => this.setState({ form: defaultForm }))
        .then(() => this.setState({ isHydrating: false, }))
        .then(() => this.setState({ isSended: true }))
        .catch((err) => { this.handleServerErrors(err) });
    } else {
      return this.handleErrors(["Пожалуйста, заполните все поля правильно"]);
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
    const { form, errors, isHydrating, isSended } = this.state;
    const { name, email, message } = form;

    if (isSended) {
      return (
        <div className="ui container text">
          <h1 className="header ui inverted">Поздравляем!</h1>
          <p className="lead small" style={{color: "#fff"}}>Ваше сообщение было успешно отправлено. Совсем скоро наши менеджеры смогут вам ответить письмом на почту, которую вы указали в форме</p>
        </div>
      );
    }

    return (
      <div className="ui container text">
        <h1 className="header ui inverted">Обратная связь</h1>
        <p className="lead small" style={{color: "#fff"}}>Отправьте нам свое сообщение или вопрос, на который хотите получить ответ при помощи данной формы</p>
          {errors.length > 0 &&
            <div className="ui error message">
              <i className="close icon"></i>
              <div className="header">
                В ходе выполнения операции возникли следующие ошибки. Попробуйте ещё раз
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
            <label>E-mail адрес для ответа</label>
            <input value={email} onChange={this.handleForm} type="email" name="email" placeholder="inbox@mail.ru" />
          </div>
          <div className="field">
            <label>Ваше сообщение или вопрос</label>
            <textarea value={message} onChange={this.handleForm} name="message" placeholder="Здравствуйте, я бы хотел.." />
          </div>
          <button className="ui button big" type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}