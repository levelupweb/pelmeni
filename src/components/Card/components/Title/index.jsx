import React from "react";
import { CardContext } from "../../context";

const renderWeights = (items) => items.map((item, i) => (
    `${item.weight} гр.${i !== items.length - 1 ? "," : ""} `
))

const Title = () => (
    <CardContext.Consumer>
        {({ category }) => (
            <React.Fragment>
              <h2 className="ui header inverted card-title">
                {category.title}
                <div className="sub header">{renderWeights(category.items)}</div>
              </h2>
              <p className="card-description">
                {category.description}
              </p>
            </React.Fragment>
        )}
    </CardContext.Consumer>
);

export default Title;