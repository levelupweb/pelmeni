import React from "react";
import { CardContext } from "../../context";

const Submit = () => (
    <CardContext.Consumer>
        {({ category }) => (
            <button
                onClick={() => {}} 
                className={`ui fluid button positive`} 
            >
                В корзину
            </button>
        )}
    </CardContext.Consumer>
);

export default Submit;