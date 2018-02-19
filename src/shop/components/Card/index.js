import React from "react";
import styles from "./styles";

const isArray = array => Array.isArray(array);

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    const { weight } = props.data;
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.state = {
      amount: 1,
      weight: isArray(weight) ? weight[0] : weight,
    }
  }

  handleAmount(e) {
    const newValue = e.target.value;
    this.setState({
      amount: newValue,
    })
  } 

  handleWeight(e) {
    const newValue = e.target.value;
    this.setState({
      weight: newValue,
    })
  } 

  addToCart() {
    const { data, onAdd } = this.props;
    const { amount, weight } = this.state;

    onAdd({
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      weight: weight,
      price: data.price,
      amount: amount,
      total: amount * data.price,
    }, () => {
      this.setState({
        amount: 1,
      })
    })
  }

  renderWeights() {
    const { weight } = this.props.data;
    
    if (isArray(weight)) return weight.map((item) => <span>{item}, </span>)
    return weight
  }

  renderOptions() {
    const { weight } = this.props.data;

    return weight.map((item) => <option value={item}>{item}</option>)
  }

  render() {
    const { data, onAdd, isAdded } = this.props;
    const { amount } = this.state;

    return (
      <div className="column inverted">
        <div className="ui fluid card inverted" style={styles.card}>
          <div className="image">
            <img src={data.image} width="100%" alt={data.title} />
          </div>
          <div className="content" style={styles.content}>
            <h2 className="ui header">{data.title}
              <div className="sub header">{this.renderWeights()}</div>
            </h2>
            <p className="lead small">{data.description}</p>
          </div>
          <div className="extra content">
            <span className="right floated price">
              {data.price} руб.
            </span>
            <span>
              <div style={styles.left}>
                {isArray(data.weight) && <div class="field" style={styles.weightField}>
                  <select style={styles.input} onChange={this.handleWeight}>
                    {this.renderOptions()}
                  </select>
                </div> }
              </div>
              <div className="field">
                <input 
                  onChange={this.handleAmount} 
                  type="number" 
                  value={amount}
                  max="100" 
                  min="1" 
                  name="amount" 
                  placeholder="Количество кг" 
                />
                <label className="amount">Количество</label>
              </div>
            </span>
          </div>
          <div className="extra content">
            <button onClick={() => this.addToCart()} className="ui animated fade button fluid big" tabIndex="0">
              <div className="visible content">{isAdded ? "Добавить ещё" : "Добавить в корзину"}</div>
              <div className="hidden content">Добавить <i className="right arrow icon"></i></div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}