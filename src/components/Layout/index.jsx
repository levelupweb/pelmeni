import React from "react";
import PropTypes from "prop-types";
import Phone from "../Phone";
import Footer from "../Footer";
import Menu from "../Menu";
import SidebarMenu from "../SidebarMenu";
import { ShopProvider } from "../Shop/context";
import styles from "./styles.less";

import { Dimmer, Loader } from "semantic-ui-react";

import { LayoutProvider, LayoutContext } from "./context";

const Layout = ({ children, isLoaded }) => (
	<Dimmer.Dimmable dimmed={!isLoaded}>
		<Dimmer page active={!isLoaded}>
			<Loader>Идет загрузка..</Loader>
		</Dimmer>
		<Phone />
		<LayoutContext.Consumer>
			{({ isExpanded }) => (
				<React.Fragment>
					<Menu />
					<SidebarMenu />
					<Dimmer.Dimmable dimmed={isExpanded}>
						<div
							style={{
								background: `url(${require("@src/common/background.jpg")})`
							}}
							className={styles.inner}
						>
							{children}
							<Footer />
						</div>
						<Dimmer active={isExpanded} />
					</Dimmer.Dimmable>
				</React.Fragment>
			)}
		</LayoutContext.Consumer>
	</Dimmer.Dimmable>
);

Layout.propTypes = {
	isLoaded: PropTypes.bool,
	children: PropTypes.element.isRequired
};

Layout.defaultProps = {
	isLoaded: false
};

const EnhancedLayout = ({ children, isLoaded }) => (
	<LayoutProvider>
		<ShopProvider>
			<Layout isLoaded={isLoaded}>{children}</Layout>
		</ShopProvider>
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
