import React from "react";
import PropTypes from "prop-types";
import Phone from "@components/Phone";
import Footer from "@components/Footer";
import Menu from "@components/Menu";
import SidebarMenu from "@components/SidebarMenu";
import { ShopProvider } from "@components/Shop/context";
import { AuthFormProvider } from "@components/AuthForm/context";
import styles from "./styles.less";

import { Dimmer, Loader, Segment, Header, Container } from "semantic-ui-react";

import { LayoutProvider, LayoutContext } from "./context";

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error) {
		this.setState({ hasError: true }, () =>
			console.error(error)
		);
	}
	
	render() {
		const { hasError } = this.state;
		const { children, isLoaded } = this.props;

		if (hasError) {
			return (
				<div className={styles.error}>
					<Container text>
						<div className={styles.inner}>
							<Segment>
								<Header as="h3">
									Непредвиденная ошибка
								</Header>
								<p>
									Если вы видите данное сообщение, обратитесь к администратору.
									Данный случай будет зафиксирован
								</p>
							</Segment>
						</div>
					</Container>
				</div>
			);
		}

		return (
			<Dimmer.Dimmable dimmed={!isLoaded}>
				<Dimmer page active={!isLoaded}>
					<Loader>Идет загрузка..</Loader>
				</Dimmer>
				<Phone />
				<LayoutContext.Consumer>
					{({ isExpanded }) => (
						<div className={styles.layout}>
							<Menu />
							<SidebarMenu />
							<Dimmer.Dimmable dimmed={isExpanded}>
								<div
									style={{
										background: `url('${require("@src/common/background.jpg")}')`,
										backgroundSize: "100%",
									}}
									className={styles.inner}
								>
									{children}
									<Footer />
								</div>
								<Dimmer active={isExpanded} />
							</Dimmer.Dimmable>
						</div>
					)}
				</LayoutContext.Consumer>
			</Dimmer.Dimmable>
		);
	}
}


Layout.propTypes = {
	isLoaded: PropTypes.bool,
	children: PropTypes.element.isRequired
};

Layout.defaultProps = {
	isLoaded: false
};

const EnhancedLayout = ({ children, isLoaded }) => (
	<LayoutProvider>
		<AuthFormProvider>
			<ShopProvider>
				<Layout isLoaded={isLoaded}>{children}</Layout>
			</ShopProvider>
		</AuthFormProvider>
	</LayoutProvider>
);

EnhancedLayout.propTypes = {
	isLoaded: PropTypes.bool,
	children: PropTypes.element.isRequired
};

EnhancedLayout.defaultProps = {
	isLoaded: false
};

export default EnhancedLayout;
