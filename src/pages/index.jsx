import React from "react";
import Helmet from "react-helmet";
import { Switch, Route, withRouter } from "react-router";
import Index from "./index/index.jsx";
import Dostavka from "./dostavka";
import Phone from "../components/Phone";
import Shop from "./shop";
import Catalog from "./catalog";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SidebarMenu from "../components/SidebarMenu";
import Contact from "./contact";
import { ShopProvider } from "../components/Shop/context";
import NotFound from "./404";
import "../common/styles.css";

const createImage = (url) => {
  const image = new Image();
  image.src = url;
  return image;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackground = this.handleBackground.bind(this);
    this.state = { background: false, }
    this.backgroundUrl = require("../common/background.jpg");
  }

  componentDidMount() {
    this.loadBackground();
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  loadBackground() {
    const { background } = this.state;

    if (!background) {
      createImage(this.backgroundUrl)
        .onload = this.handleBackground(); 
    }
  }

  handleBackground() {
    this.setState({ 
      background: true 
    });
  }

  render() {
    const { background } = this.state;

    return (
      <div className="site">
        <Helmet>
          <title>Пельмени Классные. Онлайн-доставка пельменей</title>
        </Helmet>
        <SidebarMenu />
        <Phone />
        <ShopProvider>
          <React.Fragment>
            <div className="pusher" style={{backgroundImage: `url(${background && this.backgroundUrl})`}}>
              <Menu />
              <div className="pusher-content">
              <Switch>
                <Route exact path='/' component={Index}/>
                <Route path='/dostavka' component={Dostavka}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/contact' component={Contact}/>
                <Route component={NotFound} />
              </Switch>
              <Footer />
              </div>
            </div>
            <div className={`ui dimmer ${!background && "active"}`}>
              <div className="content">
                <h2 className="ui inverted icon header">
                  <i className="heart icon"></i>
                  <div className="ui loader active" />
                </h2>
              </div>
            </div>
          </React.Fragment>
        </ShopProvider>
      </div>
    )
  }
};

export default withRouter(App);