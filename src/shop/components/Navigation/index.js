import React from "react";

export default class Navigation extends React.Component {
  render() {
    const { onBack, onForward, step, cartLength } = this.props;
    return (
      <div className="navbar ui container">
        <div className="ui secondary inverted menu big">
          {(step > 1) && <a onClick={() => onBack()} className="ui button secondary big">Назад</a>}
          <span className="item">В корзине: {cartLength}</span>
          {(step < 3) && <div className="right menu">
            <a onClick={() => onForward()} className="ui button green big">Вперед</a>
          </div> }
        </div>
      </div>
    )
  }
}