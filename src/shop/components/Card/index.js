import React from "react";
import styles from "./styles";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleCount = this.handleCount.bind(this);
    this.state = {
      count: 1,
    }
  }

  handleCount(e) {
    const newValue = e.target.value;
    this.setState({
      count: newValue,
    })
  } 

  addToCart() {
    const { data, onAdd } = this.props;
    const { count } = this.state;

    onAdd({
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      weight: data.weight,
      price: data.price,
      amount: count,
      total: count * data.price,
    }, () => {
      this.setState({
        count: 1,
      })
    })
  }

  render() {
    const { data, onAdd, isAdded } = this.props;
    const { count } = this.state;

    return (<div className="column inverted">
      <div className="ui fluid card inverted" style={styles.card}>
        <div className="image">
          <img src={data.image} width="100%" />
        </div>
        <div className="content" style={styles.content}>
          <h2 className="ui header">{data.title}
            <div className="sub header">{data.weight} гр.</div>
          </h2>
          <p className="lead small">{data.description}</p>
        </div>
        <div className="extra content">
          <span className="right floated price">
            {data.price} руб.
          </span>
          <span>
            <div className="field">
              <input onChange={this.handleCount} type="number" value={count} max="100" min="1" name="amount" placeholder="Количество кг" />
              <label className="amount">Выберите количество</label>
            </div>
          </span>
        </div>
        <div className="extra content">
          <button onClick={() => this.addToCart()} className="ui animated fade button fluid big" tabIndex="0">
            <div className="visible content">{isAdded ? "Добавить ещё" : "Добавить в корзину"}</div>
            <div className="hidden content">
            {isAdded ? "Добавить ещё" : "Добавить"} <i className="right arrow icon"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
    )
  }
}