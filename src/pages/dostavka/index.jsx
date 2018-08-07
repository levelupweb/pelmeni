import React from "react";
import Page from "@components/Page";
import { List, Divider } from "semantic-ui-react";

class Dostavka extends React.Component {
	render() {
		return (
			<Page
				text
				title="Условия доставки"
				description="Условия работы нашего интернет-магазина"
			>
				<div>
					<List bulleted size="large">
						<List.Item>
							Доставка заказа в пределах г. Кострома <strong>100р</strong>
						</List.Item>
						<List.Item>
							Заказ от 1000р доставка по г. Кострома <strong>Бесплатно</strong>
						</List.Item>
						<List.Item>
							Доставка заказа за пределы г. Кострома – обсуждается индивидуально
							по телефону
						</List.Item>
					</List>
					<br />
					<Divider horizontal inverted>
						Время доставки
					</Divider>
					<br />
					<List bulleted size="large">
						<List.Item>
							Интернет-магазин работает с понедельника по четверг с 8-00 до
							17-00, пятница с 8-00 до 16-00.
						</List.Item>
						<List.Item>
							Все заказы, оформленные на сайте в выходные и праздничные дни,
							обрабатываются в первый рабочий день после выходных.
						</List.Item>
						<List.Item>
							Доставка осуществляется в рабочие дни с 10-00 до 20-00. В субботу
							с 10-00 до 14-00.
						</List.Item>
						<List.Item>
							При заказе на сайте или по телефону до 14-00 – доставка с 16-00 до
							20-00, либо на следующий день в удобное время для покупателя с
							10-00 до 20-00.
						</List.Item>
						<List.Item>
							При заказе на сайте или по телефону после 14-00 - доставка на
							следующий день с 10-00 до 20-00.
						</List.Item>
					</List>
					<br />
					<Divider horizontal inverted>
						Наши партнеры
					</Divider>
					<br />
					<List horizontal size="large" inverted>
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
				</div>
			</Page>
		);
	}
}

export default Dostavka;
