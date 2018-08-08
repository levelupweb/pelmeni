import React from "react";
import PropTypes from "prop-types";
import { PromosProvider, PromosContext } from "./context";
import Item from "./components/Item";
import RemoveModal from "./components/RemoveModal";
import CreateButton from "./components/CreateButton";
import AddingModal from "./components/AddingModal";
import { Loader, Card, Message, Header } from "semantic-ui-react";

const Promos = ({ list: { isHydrating, error, items } }) => {
	if (error) {
		return (
			<Message negative>
				<Message.Header>Упс. Что-то пошло не так</Message.Header>
				<p>{error.message || "Неизвестная ошибка"}</p>
			</Message>
		);
	}

	if (!items || isHydrating) {
		return (
			<Loader active inline centered>
				Загружаем товары...
			</Loader>
		);
	}

	return (
		<React.Fragment>
			<RemoveModal />
			<AddingModal />
			<CreateButton />
			{items.length !== 0 ? (
				<Card.Group itemsPerRow={4} stackable>
					{items.map(item => <Item key={item._id} promo={item} />)}
				</Card.Group>
			) : (
				<Header as="h2" textAlign="center">
					Вы не добавили еще ни одного промо-кода
					<Header.Subheader>
						Нажмите на кнопку {"Добавить новый"}, чтобы создать первый промо-код
					</Header.Subheader>
				</Header>
			)}
		</React.Fragment>
	);
};

Promos.propTypes = {
	list: PropTypes.shape({
		isHydrating: PropTypes.bool,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				code: PropTypes.string,
				discount: PropTypes.number
			})
		),
		error: PropTypes.shape({
			message: PropTypes.string
		})
	})
};

Promos.defaultProps = {
	isLoadingStarted: true,
	list: {
		isHydrating: false,
		error: null,
		items: null
	}
};

const EnhancedPromos = () => (
	<PromosProvider>
		<PromosContext.Consumer>
			{({ list }) => <Promos list={list} />}
		</PromosContext.Consumer>
	</PromosProvider>
);

export default EnhancedPromos;
