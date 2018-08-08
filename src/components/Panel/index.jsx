import React from "react";
import withAuth from "@HOC/withAuth";
import { Segment, Header, Divider } from "semantic-ui-react";
import { PanelProvider } from "./context";
import Items from "./components/Items";
import Promos from "./components/Promos";
import styles from "./styles.less";

class Panel extends React.Component {
	render() {
		return (
			<Segment padded className={styles.wrapper}>
				<Header textAlign="center" as="h2">
					Админ-панель
					<Header.Subheader>
						В этом разделе вы можете редактировать товары и промо-акции
					</Header.Subheader>
				</Header>
				<Divider className={styles.divider} horizontal>
					Редактирование товаров
				</Divider>
				<Items />
				<Divider className={styles.divider} horizontal>
					Редактирование промо-акций
				</Divider>
				<Promos />
			</Segment>
		);
	}
}

const EnhancedPanel = () => (
	<PanelProvider>
		<Panel />
	</PanelProvider>
);

export default withAuth(EnhancedPanel);
