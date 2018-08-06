import React from "react";
import Index from "./index/index.jsx";
import Dostavka from "./dostavka";
import Shop from "./shop";
import Contact from "./contact";
import Catalog from "./catalog";
import Layout from "../components/Layout";
import NotFound from "./404";
import "../common/styles.css";

import { 
  Switch, 
  Route, 
  withRouter 
} from "react-router";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/dostavka" component={Dostavka}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/contact" component={Contact}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    )
  }
};

export default withRouter(App);