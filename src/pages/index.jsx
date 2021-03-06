import React from "react";
import Index from "./index/index.jsx";
import Dostavka from "./dostavka";
import Shop from "./shop";
import Contact from "./contact";
import Auth from "./auth";
import Layout from "../components/Layout";
import Admin from "./admin";
import Promo from "../components/Promo";
import NotFound from "./404";
import loadImageAsync from "@utils/loadImageAsync";
import "../common/styles.css";

import { Switch, Route, withRouter } from "react-router";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.loadBackground = this.loadBackground.bind(this);
		this.loadBackgroundSuccess = this.loadBackgroundSuccess.bind(this);
		this.loadBackgroundFail = this.loadBackgroundFail.bind(this);
		this.state = {
			isLoaded: false
		};
	}

	componentDidMount() {
		this.loadBackground();
	}

	loadBackground() {
		loadImageAsync(require("@src/common/background.jpg"))
			.then(this.loadBackgroundSuccess)
			.catch(this.loadBackgroundFail);
	}

	loadBackgroundSuccess() {
		this.setState({
			isLoaded: true
		});
	}

	loadBackgroundFail() {
		this.setState({ isLoaded: true }, () =>
			console.warn("Не удалось загрузить фоновое изображение")
		);
	}

	displayPromo() {
		const currentDate = new Date();
		const last = new Date(1546290000 * 1000); // 1 jan 2019

		return currentDate < last;
	}

	render() {
		const { isLoaded } = this.state;

		return (
			<div>
				{this.displayPromo() && <Promo />}
				<Layout isLoaded={isLoaded}>
					<Switch>
						<Route exact path="/" component={Index} />
						<Route path="/dostavka" component={Dostavka} />
						<Route path="/shop" component={Shop} />
						<Route path="/contact" component={Contact} />
						<Route path="/admin" component={Admin} />
						<Route path="/auth" component={Auth} />
						<Route component={NotFound} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default withRouter(App);
