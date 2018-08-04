import React from "react";
import { CardContext } from "../../context";

const Price = () => (
    <CardContext.Consumer>
        {({ currentItem, amount }) => (
            <React.Fragment>
                <p className="site-price">
                    {currentItem.price * amount} руб.
                </p>
                <p className="in-markets">
                    <span>
                        Цена в магазинах за ед.
                    </span>
                    <span>
                        {currentItem.price * 1.3} руб.
                    </span>
                </p>
            </React.Fragment>
        )}
    </CardContext.Consumer>
);

export default Price;