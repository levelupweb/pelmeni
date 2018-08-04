import React from "react";
import { CardContext } from "../../context";

const Amount = () => (
    <CardContext.Consumer>
        {({ amount, handleAmount }) => (
            <div className="ui buttons">
                <button
                    onClick={() => handleAmount(amount - 1)} 
                    className={`ui button small icon ${amount === 1 && "disabled"}`} 
                >
                    <i className="ui icon minus" />
                </button>
                <button
                    className="ui button small icon" 
                >
                    {amount} шт.
                </button>
                <button
                    onClick={() => handleAmount(amount + 1)} 
                    className={`ui button small icon`} 
                >
                    <i className="ui icon plus" />
                </button>
            </div>
        )}
    </CardContext.Consumer>
);

export default Amount;