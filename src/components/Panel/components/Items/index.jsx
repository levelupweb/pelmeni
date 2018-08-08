import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { PanelContext } from "@components/Panel/context";
import config from "@utils/config";
import EditModal from "./components/EditModal";
import parseError from "@utils/parseError";
import Item from "./components/Item";
import { PanelItemProvider } from "./context";
import { Loader, Card } from "semantic-ui-react";

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.fetchItemsStart = this.fetchItemsStart.bind(this);
		this.fetchItemsStartProcess = this.fetchItemsStartProcess.bind(this);
		this.fetchItemsSuccess = this.fetchItemsSuccess.bind(this);
		this.fetchItemsFail = this.fetchItemsFail.bind(this);
		this.state = {
			isHydrating: false,
			error: null
		};
	}
	componentDidMount() {
		this.fetchItemsStart();
	}

	fetchItemsStart() {
		const { isHydrating } = this.state;

		if (!isHydrating) {
			this.setState({ isHydrating: true }, () => this.fetchItemsStartProcess());
		}
	}

	fetchItemsStartProcess() {
		axios
			.get(config.url + "/category/all")
			.then(this.fetchItemsSuccess)
			.catch(this.fetchItemsFail);
	}

	fetchItemsSuccess({ data }) {
		const { handleItems } = this.props;

		if (data && data.length > 0) {
			handleItems(data);
		}
	}

	fetchItemsFail(reason) {
		const error = parseError(reason);

		this.setState({
			isHydrating: false,
			error
		});
	}

	render() {
		const { items } = this.props;

		if (!items) {
			return (
				<Loader active inline centered>
					Загружаем товары...
				</Loader>
			);
		}

		return (
			<React.Fragment>
				<EditModal />
				<Card.Group itemsPerRow={4} stackable>
					{items.map(item => <Item key={item._id} data={item} />)}
				</Card.Group>
			</React.Fragment>
		);
	}
}

Items.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			items: PropTypes.arrayOf(
				PropTypes.shape({
					price: PropTypes.number,
					weight: PropTypes.number,
					category: PropTypes.string
				})
			)
		})
	),
	handleItems: PropTypes.func.isRequired
};

const EnhancedItems = () => (
	<PanelItemProvider>
		<PanelContext.Consumer>
			{({ items, handleItems }) => (
				<Items items={items} handleItems={handleItems} />
			)}
		</PanelContext.Consumer>
	</PanelItemProvider>
);

export default EnhancedItems;
