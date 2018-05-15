import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";
import Shop from "../../components/Shop";
import Fade from "react-reveal/Fade";

class ShopPage extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui inverted shop-page vertical segment">
          <Shop />
        </div>
      </div>
    );
  }
}

export default ShopPage;