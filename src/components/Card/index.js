import React from "react";
import randomstring from "randomstring";
import Carousel from "nuka-carousel";
import "./styles.css";

const isArray = array => Array.isArray(array);

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleDimensions = this.handleDimensions.bind(this);

    const { weight, price } = props.data;

    this.state = {
      amount: 1,
      price: price[price.length - 1],
      weight: weight[price.length - 1],
    }
  }

  handleDimensions() {
    if (this.carousel) {
      this.carousel.setDimensions();
    }
  }

  handleAmount(value) {
    this.setState({
      amount: value,
    })
  } 

  handleWeight(value) {
    const { price, weight } = this.props.data;

    this.setState({
      weight: value,
      price: price[weight.indexOf(value)],
    })
  } 

  addToCart() {
    const { 
      data, 
      onAdd 
    } = this.props;
    
    const { 
      amount, 
      weight, 
      price 
    } = this.state;

    if (data && onAdd) {
      onAdd({
        id: randomstring.generate(),
        title: data.title,
        description: data.description,
        image: data.image,
        weight: weight,
        price: price,
        amount: amount,
        total: amount * price,
      }, () => {
        this.setState({
          amount: 1,
        })
      })
    }
  }

  renderWeights() {
    const { weight } = this.props.data;
    
    return weight.map((item) => <span>{item} гр., </span>);
  }

  renderWeightSelector() {
    const { weight } = this.props.data;

    if (weight && weight.map) {
      return weight.map((item) => (
        <button 
          onClick={() => this.handleWeight(item)} 
          class={`ui button ${this.state.weight === item && "active"}`}
        >
          {item} гр.
        </button>
      ));
    }

    return null;
  }

  renderOptions() {
    const { weight } = this.props.data;
    
    if (weight && weight.map) {
      return weight.map((item) => <option value={item}>{item}</option>)
    }

    return null;
  }

  renderPrice() {
    const { 
      weight, 
      price,
    } = this.props.data;

    if (weight && price && weight.indexOf) {
      return price[weight.indexOf(this.state.weight)] * this.state.amount
    }
  }

  renderAmountChanger() {
    const { amount } = this.state;
    
    return (
      <div className="ui buttons">
        <button
          onClick={() => this.handleAmount(amount - 1)} 
          className={`ui button small icon ${amount === 1 && "disabled"}`} 
        >
          <i className="ui icon minus" />
        </button>
        <button
          className="ui button small icon" 
        >
          {amount} шт.
        </button>
        <button
          onClick={() => this.handleAmount(amount + 1)} 
          className={`ui button small icon`} 
        >
          <i className="ui icon plus" />
        </button>
      </div>
    )
  }

  renderAction() {
    const { isAdded } = this.state;

    return (
      <button 
        onClick={this.addToCart} 
        className="ui animated fade button positive" 
        tabIndex="0"
      >
        <div className="visible content">
          {isAdded ? "Добавить ещё" : "Добавить в корзину"}
        </div>
        <div className="hidden content">
          Добавить <i className="right arrow icon"></i>
        </div>
      </button>
    );
  }

  renderSlider() {
    const { image, title } = this.props.data;

    if (image && image.map) {
      return (
        <Carousel
          ref={c => this.carousel = c}
          heightMode="first"
          width="100%"
          initialSlideWidth="100%"
          renderCenterLeftControls={({ previousSlide }) => (
            <button className={`ui button icon ${!previousSlide && "disabled"}`} onClick={previousSlide}>
              <i className="ui icon angle left" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button className={`ui button icon ${!nextSlide && "disabled"}`} onClick={nextSlide}>
              <i className="ui icon angle right" />
            </button>
          )}
        >
          {image.map((image, i) => (
            <img width="100%" onLoad={this.handleDimensions} src={image} alt={`${title}. Изображение ${i}`} />
          ))}
        </Carousel>
      )
    }
  }
 
  render() {
    const { 
      data, 
      onAdd, 
      isAdded
    } = this.props;

    const { 
      amount 
    } = this.state;

    return (
      <div className="column inverted">
        <div className="ui fluid card inverted shop-card">
          <div className="image">
            {this.renderSlider()}
          </div>
          <div className="content">
            <h2 className="ui header inverted card-title">
              {data.title}
              <div className="sub header">{this.renderWeights()}</div>
            </h2>
            <p className="card-description">
              {data.description}
            </p>
          </div>
          <div className="extra content">
            <div className="card-weights">
              <div class="ui buttons fluid">
                {this.renderWeightSelector()}
              </div>
            </div>
            <div className="card-amount-changer">
              {this.renderAmountChanger()}
              <div className="card-price">
                {this.renderPrice()} руб.
                <span>{this.renderPrice() * 1.3} цена в магазинах</span>
              </div>
              <div className="card-primary-action">
                {this.renderAction()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}