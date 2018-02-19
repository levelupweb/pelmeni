import React from "react";
import styles from "./styles";
import Card from "../Card";

const checkIsAdded = (cart, id) => cart.filter((item) => item.id === id)[0];

export default class CardList extends React.Component {

  renderCards() {
    const { data, onAdd, cart } = this.props;

    return data.map((item, i) => 
      <Card 
        isAdded={checkIsAdded(cart, item.id)} 
        key={i} 
        onAdd={onAdd} 
        data={item} 
      />
    )
  }
  render() {
    const { columns } = this.props;

    return (
      <div className="ui container">
        <div className={`ui ${columns} column grid stackable `} style={styles.grid}>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}