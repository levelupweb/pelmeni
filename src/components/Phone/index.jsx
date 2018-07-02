import React from "react";
import "./styles.css";

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  handleToggle(isActive) {
    this.setState({
      isActive
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <div className="phone-overlay">
        <button 
          className="phone-overlay-button" 
          onClick={this.handleToggle.bind(this, !isActive)}
        >
          <i class="phone icon"></i>
        </button>
        {isActive &&
          <div className="phone-overlay-content">
            <div 
              onClick={this.handleToggle.bind(this, false)} 
              className="phone-overlay-content-close"
            >
              <i className="ui icon close"></i>
            </div>
            <h3 className="ui header">У вас есть вопрос?</h3>
            <p>Задайте его нашему менеджеру, позвонив по номеру</p>
            <a href="tel:+79038987736" className="phone-number">+7 (903) 898 77-36</a>
          </div>
        }
      </div>
    )
  }
}

export default Phone;