import React from "react";
import Fade from "react-reveal/Fade"
import axios from "axios";
import "./styles.css";


class Form extends React.Component {
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

  handleForm({ target }) {
    const { name, value } = target;

    this.setState({
      form: Object.assign({}, this.state.form, {
        [name]: value,
      })
    })
  }

  handleSuccess() {
    this.setState({
      form: defaultForm,
      isHydrating: false,
      isSended: true,
    })
  }

  submitForm() {
    const { form } = this.state;

    this.setState({ isHydrating: true }, () => {
      axios.post("/send", form)
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
        <ul className="ui list inverted bulleted">
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
              Поздравляем!
            </h1>
            <p className="lead small" style={{color: "#fff"}}>
              Ваше сообщение было успешно отправлено. Совсем скоро наши менеджеры смогут вам{" "}
              ответить письмом на почту, которую вы указали в форме
            </p>
          </Fade>
        </div>
      );
    }

    return (
      <div className="ui container text contact-form">
        <Fade top>
          <h1 className="header ui inverted">
            Обратная связь
          </h1>
        </Fade>
        <Fade top>
          <p className="lead small" style={{color: "#fff"}}>
            Отправьте нам свое сообщение или вопрос, на который хотите{" "}
            получить ответ при помощи данной формы
          </p>
        </Fade>
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
              <label>E-mail адрес для ответа</label>
              <input 
                value={form.email} 
                onChange={this.handleForm} 
                type="text" 
                name="email" 
                placeholder="inbox@mail.ru" 
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
                placeholder="Здесь вы можете задать свой вопрос или написать нам пожелание" 
              />
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

export default Form;