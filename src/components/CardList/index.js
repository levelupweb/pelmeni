import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import Card from "../Card";

class CardList extends React.Component {
  renderCards() {
    const { 
      itemsWithImages 
    } = this.props;

    return itemsWithImages
      .map((item, i) => 
        <Card 
          key={i} 
          category={item} 
        />
      );
  }

  render() {
    const { 
      columns,
      itemsWithImages,
    } = this.props;
 
    if (!itemsWithImages) {
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

CardList.propTypes = {
  itemsWithImages: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number,
    weight: PropTypes.number,
    image: PropTypes.shape({
      src: PropTypes.string,
      srcThumbnail: PropTypes.string
    }),
  }))
}

CardList.defaultProps = {
  itemsWithImages: null,
}

export default CardList;