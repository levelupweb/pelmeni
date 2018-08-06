import React from "react";
import PropTypes from "prop-types";
import Slider from "./components/Slider";
import Title from "./components/Title";
import Weight from "./components/Weight";
import Amount from "./components/Amount";
import Submit from "./components/Submit";
import Price from "./components/Price";
import { CardProvider } from "./context";
import styles from "./styles.less";

import {
  Grid,
  Card,
  Image
} from "semantic-ui-react";
 
const CardWrapper = ({ category }) => (
  <Grid.Column>
    <Card className={styles.wrapper} fluid inverted>
      <Image>
        <Slider />
      </Image>
      <Card.Content className={styles.content}>
        <div className={styles.title}>
          <Title />
        </div>
        <div className={styles.price}>
          <Price />
        </div>
        <div className={styles.bar}>
          <div className={styles.weight}>
            <Weight />
          </div>
          <div className={styles.amount}>
            <Amount />
          </div>
          <div className={styles.submit}>
            <Submit />
          </div>
        </div>
      </Card.Content>
    </Card>
  </Grid.Column>
);

CardWrapper.propTypes = {
  category: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(({
      weight: PropTypes.number,
      price: PropTypes.number,
      category: PropTypes.string,
    })))
  }),
  title: PropTypes.string,
  description: PropTypes.string,
}

CardWrapper.defaultProps = {
  category: null,
}

const EnhancedCard = (props) => props.category &&  (
  <CardProvider category={props.category}>
    <CardWrapper {...props} />
  </CardProvider>
);

export default EnhancedCard;
