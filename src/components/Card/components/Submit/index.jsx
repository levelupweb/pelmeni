import React from "react";
import { CardContext } from "../../context";
import { ShopContext } from "../../../Shop/context";

const Submit = () => (
    <ShopContext.Consumer>
        {({ addToCart }) => (
            <CardContext.Consumer>
                {({ currentItem, amount, category }) => (
                    <button
                        onClick={() => 
                            addToCart({
                                ...currentItem,
                                id: currentItem._id,
                                title: category.title,
                                amount,
                            })
                        } 
                        className="ui fluid button primary" 
                    >
                        В корзину
                    </button>
                )}
            </CardContext.Consumer>
        )}
    </ShopContext.Consumer>
);

export default Submit;