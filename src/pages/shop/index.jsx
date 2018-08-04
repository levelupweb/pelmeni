import React from "react";
import Shop from "../../components/Shop";

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