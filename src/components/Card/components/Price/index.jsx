import React from "react";
import { CardContext } from "../../context";

const Price = () => (
    <CardContext.Consumer>
        {({  }) => (
            <React.Fragment>
                <p className="site-price">
                    150 руб.
                </p>
                <p className="in-markets">
                    <span>
                        Цена в магазинах 
                    </span>
                    <span>
                        127.5 руб.
                    </span>
                </p>
            </React.Fragment>
        )}
    </CardContext.Consumer>
);

export default Price;