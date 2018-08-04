import React from "react";
import styles from "./styles";
import Card from "../Card";

const checkIsAdded = (cart, id) => 
  cart.filter((item) => item.id === id)[0];

class CardList extends React.Component {
  renderCards() {
    const { 
      items, 
      onAdd, 
      cart 
    } = this.props;

    return items.map((item, i) => 
      <Card 
        isAdded={checkIsAdded(cart, item.id)} 
        key={i} 
        onAdd={onAdd} 
        category={item} 
      />
    )
  }
  render() {
    const { 
      columns,
      items,
    } = this.props;
 
    if (!items) {
      return "loading.."
    }

    return (
      <div className="ui container">
        <div 
          className={`ui ${columns} column grid stackable`} 
          style={styles.grid}
        >
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default CardList;