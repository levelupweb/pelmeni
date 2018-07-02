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
            <h3 className="ui header">У вас есть вопрос?</h3>
            <p>Задайте его нашему менеджеру, позвонив по номеру</p>
            <p className="phone-number">(4942) 51-53-07</p>
          </div>
        }
      </div>
    )
  }
}

export default Phone;