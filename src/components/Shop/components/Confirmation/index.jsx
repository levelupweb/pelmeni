import React, { Component } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../../context";
import { Link } from "react-router-dom";
import PromoInput from "@components/PromoInput";
import AmountChanger from "@components/AmountChanger";
import { ITEM_ID, ITEM_PRICE, ITEM_WEIGHT } from "@consts/item";
import { PURCHASE_ITEMS_AMOUNT } from "@consts/purchase";
import styles from "./styles.less";

import {
	Table,
	Header,
	List,
	Button,
	Accordion,
	Icon,
	Grid,
	Segment
} from "semantic-ui-react";

class Confirmation extends Component {
	state = {
		activeIndex: 0
	}

	handleIndex = (_, { index }) => {
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	}

	render() {
		const {
			cart,
			removeFromCart,
			updateAmount,
			getTotalSumm,
			promo,
			getTotalSummWithDiscount
		} = this.props;

		const { activeIndex } = this.state;

		return (
			<div className={styles.wrapper}>
				<Segment inverted>
					<Table basic="very" inverted size="large" celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Наименование</Table.HeaderCell>
								<Table.HeaderCell>Кол-во</Table.HeaderCell>
								<Table.HeaderCell>Цена за шт.</Table.HeaderCell>
								<Table.HeaderCell>Вес за шт.</Table.HeaderCell>
								<Table.HeaderCell>Общий вес</Table.HeaderCell>
								<Table.HeaderCell>Сумма</Table.HeaderCell>
								<Table.HeaderCell />
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{cart &&
								cart.map((item, i) =>
									<Table.Row key={i}>
										<Table.Cell>
											<b>
												{item.title}
											</b>
										</Table.Cell>
										<Table.Cell>
											<AmountChanger
												amount={item[PURCHASE_ITEMS_AMOUNT]}
												onChange={amount => updateAmount(item[ITEM_ID], amount)}
											/>
										</Table.Cell>
										<Table.Cell>
											{item[ITEM_PRICE]} руб.
										</Table.Cell>
										<Table.Cell>
											{item[ITEM_WEIGHT]} гр.
										</Table.Cell>
										<Table.Cell>
											{item[ITEM_WEIGHT] * item[PURCHASE_ITEMS_AMOUNT]} гр.
										</Table.Cell>
										<Table.Cell>
											<b>
												{item[ITEM_PRICE] * item[PURCHASE_ITEMS_AMOUNT]}
											</b>{" "}
											руб.
										</Table.Cell>
										<Table.Cell>
											<Button
												icon
												onClick={() => removeFromCart(item[ITEM_ID])}
											>
												<Icon name="close" />
											</Button>
										</Table.Cell>
									</Table.Row>
								)}
						</Table.Body>
					</Table>
				</Segment>
				<Grid relaxed stackable reversed="mobile" className={styles.footer}>
					<Grid.Row>
						<Grid.Column width={10} className={styles.disclaimer}>
							<Accordion fluid>
								<Accordion.Title
									active={activeIndex === 0}
									onClick={this.handleIndex}
									index={0}
								>
									<Header inverted as="h2">
										<Icon name="dropdown" /> Условия доставки
									</Header>
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 0}>
									<Segment inverted>
										<List inverted bulleted size="large">
											<List.Item>
												Доставка заказа в пределах г. Кострома{" "}
												<strong>100р</strong>
											</List.Item>
											<List.Item>
												Заказ от 1000р доставка по г. Кострома{" "}
												<strong>Бесплатно</strong>
											</List.Item>
											<List.Item>
												Доставка заказа за пределы г. Кострома – обсуждается
												индивидуально по телефону
											</List.Item>
										</List>
									</Segment>
								</Accordion.Content>
								<Accordion.Title
									active={activeIndex === 1}
									onClick={this.handleIndex}
									index={1}
								>
									<Header inverted as="h2">
										<Icon name="dropdown" /> Время доставки
									</Header>
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 1}>
									<Segment inverted>
										<List inverted bulleted size="large">
											<List.Item>
												Интернет магазин «Классные ПФ из Костромы» работает с
												понедельника по четверг с 8-00 до 17-00, пятница с 8-00
												до 16-00.
											</List.Item>
											<List.Item>
												Все заказы, оформленные на сайте в выходные и
												праздничные дни, обрабатываются в первый рабочий день
												после выходных.
											</List.Item>
											<List.Item>
												Доставка осуществляется в рабочие дни с 10-00 до 20-00.
												В субботу с 10-00 до 14-00.
											</List.Item>
											<List.Item>
												Условия поставки: При заказе на сайте или по телефону до
												14-00 – доставка с 16-00 до 20-00, либо на следующий
												день в удобное время для покупателя с 10-00 до 20-00.
											</List.Item>
											<List.Item>
												При заказе на сайте или по телефону после 14-00 -
												доставка на следующий день с 10-00 до 20-00.
											</List.Item>
										</List>
									</Segment>
								</Accordion.Content>
								<Accordion.Title
									active={activeIndex === 2}
									onClick={this.handleIndex}
									index={2}
								>
									<Header inverted as="h2">
										<Icon name="dropdown" /> Наши партнеры
									</Header>
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 2}>
									<Segment inverted>
										<List inverted bulleted size="large">
											<List.Item>Магнит</List.Item>
											<List.Item>Лента</List.Item>
											<List.Item>Пятерочка</List.Item>
											<List.Item>Глобус</List.Item>
											<List.Item>Десяточка</List.Item>
											<List.Item>Высшая Лига</List.Item>
											<List.Item>Гулливер</List.Item>
											<List.Item>Лидер</List.Item>
											<List.Item>Столбы</List.Item>
											<List.Item>Лотос</List.Item>
											<List.Item>Риат</List.Item>
										</List>
									</Segment>
								</Accordion.Content>
							</Accordion>
						</Grid.Column>
						<Grid.Column width={6} className={styles.total}>
							<Segment inverted>
								{promo
									? <React.Fragment>
										<Header inverted as="h2">
												Итого:{" "}
											<span className={styles.througth}>
												{getTotalSumm()}
											</span>{" "}
											{getTotalSummWithDiscount()} руб.
											<Header.Subheader>
													Ваша скидка составила {promo.discount} %
											</Header.Subheader>
										</Header>
										{getTotalSumm() > 1000
											? <p>
														Доставка в пределах г. Кострома - бесплатно (заказ
														на сумму более 1000 руб.)
											</p>
											: <p>
														Доставка в пределах г. Кострома - 100 руб. При
														заказе на сумму от 1000 руб., доставка - бесплатно
											</p>}
									</React.Fragment>
									: <React.Fragment>
										<Header as="h2">
												Итого: {getTotalSumm()} руб.
										</Header>
										{getTotalSumm() > 1000
											? <p>
														Доставка в пределах г. Кострома - бесплатно (заказ
														на сумму более 1000 руб.)
											</p>
											: <p>
														Доставка в пределах г. Кострома - 100 руб. При
														заказе на сумму от 1000 руб., доставка - бесплатно
											</p>}
									</React.Fragment>}
								<Link to="/shop/form">
									<Button fluid primary size="large">
										Оформить заказ
									</Button>
								</Link>
								{(!promo || !promo.code) &&
									<React.Fragment>
										<Header inverted as="h2">
											Промо-код
											<Header.Subheader>
												Если у вас есть промо-код, введите его в это поле, чтобы
												получить скидку
											</Header.Subheader>
										</Header>
										<PromoInput />
									</React.Fragment>}
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

Confirmation.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			_id: PropTypes.string,
			price: PropTypes.number,
			weight: PropTypes.number,
			category: PropTypes.string
		})
	),
	removeFromCart: PropTypes.func.isRequired,
	updateAmount: PropTypes.func.isRequired,
	getTotalSumm: PropTypes.func.isRequired,
	promo: PropTypes.shape({
		_id: PropTypes.string,
		discount: PropTypes.number,
		code: PropTypes.string
	}),
	getTotalSummWithDiscount: PropTypes.func.isRequired
};

Confirmation.defaultProps = {
	cart: [],
	promo: null
};

const EnhancedConfirmation = () =>
	<ShopContext.Consumer>
		{({
			cart,
			removeFromCart,
			updateAmount,
			getTotalSumm,
			promo,
			getTotalSummWithDiscount
		}) =>
			<Confirmation
				cart={cart}
				removeFromCart={removeFromCart}
				updateAmount={updateAmount}
				getTotalSumm={getTotalSumm}
				getTotalSummWithDiscount={getTotalSummWithDiscount}
				promo={promo}
			/>}
	</ShopContext.Consumer>;

export default EnhancedConfirmation;
