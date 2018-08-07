import React from "react";
import PropTypes from "prop-types";

import {
	Icon,
	Button
} from "semantic-ui-react";

const AmountChanger = ({ onChange, amount, size }) => (
	<Button.Group size={size}>
    <Button
      onClick={() => amount > 1 && onChange(amount - 1)}
      icon
    >
      <Icon name="minus" />
    </Button>
    <Button
      icon
    >
      <strong>{amount}</strong> шт.
    </Button>
    <Button
      icon
      onClick={() => onChange(amount + 1)}
    >
      <Icon name="plus" />
    </Button>
  </Button.Group>
);

AmountChanger.propTypes = {
	onChange: PropTypes.func.isRequired,
	amount: 0,
	size: PropTypes.string,
};

AmountChanger.defaultProps = {
	size: "small",
}

export default AmountChanger;