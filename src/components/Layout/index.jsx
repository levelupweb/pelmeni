import React from "react";
import Phone from "../Phone";
import Footer from "../Footer";
import Menu from "../Menu";
import SidebarMenu from "../SidebarMenu";
import { ShopProvider } from "../Shop/context";
import styles from "./styles.less";

import { 
	Dimmer
} from "semantic-ui-react";

import { 
	LayoutProvider,
	LayoutContext 
} from "./context";

const Layout = ({ children }) => (
	<React.Fragment>
		<Phone />
		<LayoutContext.Consumer>
			{({ isExpanded }) => (
				<div>
					<Menu />
					<SidebarMenu />
					<Dimmer.Dimmable dimmed={isExpanded}>
						<div className={styles.inner}>
							{children}
							<Footer />
						</div>
						<Dimmer active={isExpanded} />
					</Dimmer.Dimmable>
				</div>
			)}
		</LayoutContext.Consumer>
	</React.Fragment>
);

const EnhancedLayout = ({ children }) => (
	<LayoutProvider>
		<ShopProvider>
			<Layout>
				{children}
			</Layout>
		</ShopProvider>
	</LayoutProvider>
);

export default EnhancedLayout;