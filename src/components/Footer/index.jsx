import React from "react";
import styles from "./styles.less";
import scrollToBottom from "@utils/scrollToBottom";
import config from "@utils/config";

import { Container, Grid, Header, Button, List } from "semantic-ui-react";

import { YMaps, Map, Placemark } from "react-yandex-maps";

const linkProps = {
	rel: "noopener norefferrer",
	target: "_blank"
};

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.handleMap = this.handleMap.bind(this);
		this.state = {
			displayYandexMap: false
		};
	}

	handleMap() {
		const { displayYandexMap } = this.state;

		this.setState(
			{
				displayYandexMap: !displayYandexMap
			},
			scrollToBottom
		);
	}

	render() {
		const { displayYandexMap } = this.state;

		return (
			<React.Fragment>
				<div className={styles.wrapper}>
					<Container>
						<Grid stackable columns={3}>
							<Grid.Column>
								<Header inverted as="h2">
									ИП Бондаренко А.А.
									<Header.Subheader>Copyright, 2018</Header.Subheader>
								</Header>
								<p className={styles.disclaimer}>
									Все права защищены, все материалы, размещенные на сайте
									принадлежат ИП Бондаренко А.А.
								</p>
								<div className={styles.socialLinks}>
									<a {...linkProps} href={config.social.vk}>
										<Button inverted circular icon="vk" />
									</a>
									<a {...linkProps} href={config.social.odnoklassniki}>
										<Button inverted circular icon="odnoklassniki" />
									</a>
									<a {...linkProps} href={config.social.facebook}>
										<Button inverted circular icon="facebook" />
									</a>
									<a {...linkProps} href={config.social.instagram}>
										<Button inverted circular icon="instagram" />
									</a>
								</div>
							</Grid.Column>
							<Grid.Column>
								<div className={styles.contact}>
									<Header as="h3" inverted>
										Наши контакты
									</Header>
									<List vertical>
										<List.Item
											icon="marker"
											content="156012, г. Кострома, п. Новый, д. 3"
										/>
										<List.Item
											icon="mail"
											content={
												<a href="mailto:pfklassnye@rambler.ru">
													pfklassnye@rambler.ru
												</a>
											}
										/>
										<List.Item
											icon="phone"
											content={
												<a href="tel:+79610080166">+7 (961) 008-01-66</a>
											}
										/>
									</List>
								</div>
							</Grid.Column>
							<Grid.Column>
								<Header inverted as="h3">
									Разработка
								</Header>
								<p>
									Разработано в{" "}
									<a href={config.createdAt} {...linkProps}>
										Levelup Web
									</a>
									<br />
									<a href="mailto:web@levelupworlds.com">
										web@levelupworlds.com
									</a>
								</p>
							</Grid.Column>
						</Grid>
					</Container>
				</div>

				{displayYandexMap && (
					<YMaps>
						<Map
							width="100%"
							height="600px"
							state={{ center: [57.8, 41.01], zoom: 14 }}
						>
							<Placemark
								geometry={{
									coordinates: [57.79939, 41.004859]
								}}
								properties={{
									hintContent: "Наш офис в Костроме",
									balloonContent: "Пельмени Классные. Офис в г. Костроме"
								}}
							/>
						</Map>
					</YMaps>
				)}
			</React.Fragment>
		);
	}
}

export default Footer;
