import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "@components/Form";
import Image from "@components/Image";
import Fade from "react-reveal/Fade";
import styles from "./src/styles.less";
import "./src/styles.less";

import { Segment, Container, Header, Grid } from "semantic-ui-react";

class IndexPage extends React.Component {
	componentDidMount() {
		require("./src/script").default();
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<svg style={{visibility: "hidden", position: "absolute"}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
					<defs>
						<filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
							<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
							<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
						</filter>
					</defs>
				</svg>
				<Segment inverted className={styles.one}>
					<div className={styles.content}>
						<div className={styles.visuals}>
							<div className={styles.visual}>
								<Fade>
									<img
										src={require("./src/img/goroshek.png")}
										className={styles.visualOne}
									/>
								</Fade>
							</div>
							<div className={styles.visual}>
								<Fade delay={200}>
									<img
										src={require("./src/img/zelenka.png")}
										className={styles.visualTwo}
									/>
								</Fade>
							</div>
							<div className={styles.visual}>
								<Fade delay={400}>
									<img
										src={require("./src/img/section-2-chapter-1.png")}
										className={styles.visualThree}
									/>
								</Fade>
							</div>
							<div className={styles.visual}>
								<Fade delay={600}>
									<img
										src={require("./src/img/section-2-chapter-1.png")}
										className={styles.visualFour}
									/>
								</Fade>
							</div>
							<div className={styles.visual}>
								<Fade delay={800}>
									<img
										src={require("./src/img/section-2-chapter-1.png")}
										className={styles.visualFive}
									/>
								</Fade>
							</div>
						</div>
						<Container className={styles.jumbotron}>
							<Fade bottom>
								<div className={styles.logo}>
									<img
										src={require("./src/img/logo-1.png")}
										alt="Замороженные полуфабрикаты с доставкой на дом"
									/>
									<img
										className={styles.chief}
										src={require("./src/img/logo-2.png")}
										alt="Замороженные полуфабрикаты с доставкой на дом"
									/>
								</div>
							</Fade>
							<Fade bottom>
								<div className={styles.titleWrapper}>
									<Header inverted as="h1" className={styles.primary}>
									Замороженные полуфабрикаты с доставкой на дом
									</Header>
								</div>
							</Fade>
						</Container>
					</div>
				</Segment>

				<Segment inverted className={styles.two}>
					<div className={styles.visuals}>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./src/img/pelmeni-2-shadow.png")}
									className={styles.visualOne}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-2.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className={styles.visualThree}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className={styles.visualFour}
								/>
							</Fade>
						</div>
					</div>
					<div className={styles.content}>
						<Container>
							<Grid stackable>
								<Grid.Row columns="equal">
									<Grid.Column>
										<Fade bottom>
											<Header as="h1" inverted className={styles.primary}>
												Качество
											</Header>
											<p className="lead small">
												Мы производим полуфабрикаты исключительно из натуральных
												ингредиентов. Наша компания никогда не использовала в
												производстве добавки и консерванты!
											</p>
											<Header as="h1" className={styles.primary} inverted>
												Вкус
											</Header>
											<p className="lead small">
												Натуральность и качество продуктов используемых при
												производстве, обеспечивают высочайшие вкусовые качества
												наших полуфабрикатов.
											</p>
										</Fade>
									</Grid.Column>
									<Grid.Column>
										<div className={styles.images}>
											<Fade bottom cascade>
												<div className={styles.imageOne}>
													<Image
														src={require("./src/img/section-2-1.png")}
														srcThumbnail={require("./src/img/thumbnail/section-2-1.png")}
														fluid
														alt="Качество продукции"
													/>
												</div>
												<div className={styles.imageTwo}>
													<Image
														src={require("./src/img/section-2.png")}
														srcThumbnail={require("./src/img/thumbnail/section-2.png")}
														fluid
														alt="Качество продукции"
													/>
												</div>
											</Fade>
										</div>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					</div>
				</Segment>
				<div className="ui inverted vertical segment section-3">
					<div className="visuals-head desktop-only visuals-3" id="scene-3">
						<div className="visual visual-custom-1 layer" data-depth="0">
							<img
								src={require("./src/img/section-3-chapter-1.jpg")}
								className="visual-1"
								height="50%"
								alt=""
							/>
						</div>
						<div className="visual visual-custom-5 layer" data-depth="0.5">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-8.png")}
									className="visual-3"
									width="30%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-3 layer" data-depth="0.1">
							<Fade bottom>
								<img
									src={require("./src/img/section-3-chapter-3.png")}
									className="visual-4"
									width="30%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-6 layer" data-depth="0.1">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-8.png")}
									className="visual-5"
									width="35%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-4 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-6.png")}
									className="visual-6"
									width="35%"
									alt=""
								/>
							</Fade>
						</div>
					</div>
					<div className="section-content">
						<div className="ui text container">
							<h1 style={{ marginTop: "100px" }} className="ui header inverted">
								Свежесть
							</h1>
							<p className="lead">
								Свежее, только охлажденное мясо фермерских хозяйств, натуральное
								яйцо, лук, картошка, творог делают нашу продукцию вкусной,
								безопасной и полезной.
							</p>
							<Image
								className="mobile-only"
								src={require("./src/img/section-3-chapter-2.jpg")}
								srcThumbnail={require("./src/img/thumbnail/section-3-chapter-2.jpg")}
								fluid
								alt="Качество продукции"
							/>
						</div>
					</div>
				</div>

				<div className="ui inverted vertical segment section-4">
					<div className="visuals-head visuals-4" id="scene-4">
						<div className="visual visual-custom-2 layer" data-depth="0">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-1"
									width="50%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-3 layer" data-depth="0">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-2"
									width="40%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-1 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/section-4-chapter-4.png")}
									className="visual-3"
									width="35%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-4 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-8.png")}
									className="visual-4"
									width="32%"
									alt=""
								/>
							</Fade>
						</div>
					</div>
					<div className="section-content">
						<div className="ui middle aligned stackable grid container">
							<div className="row">
								<div className="eight wide column">
									<h1 className="ui header inverted">
										Натуральность продуктов
									</h1>
									<p className="lead small">
										Тесто из муки высшего сорта замешанное на свежем яйце, его
										эластичность и вкусовые качества не оставят вас
										равнодушными.
									</p>
								</div>
								<div className="eight wide right floated column">
									<div className="images">
										<div className="image-1">
											<img
												className="image-1-1 animated"
												src={require("./src/img/section-4-chapter-1.jpg")}
												width="60%"
												alt="Натуральность продуктов"
											/>
										</div>
										<div className="image-2">
											<Image
												src={require("./src/img/section-4-chapter-3.jpg")}
												srcThumbnail={require("./src/img/thumbnail/section-4-chapter-3.jpg")}
												fluid
												alt="Натуральность продуктов"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="ui inverted vertical segment section-5">
					<div className="visuals-head visuals-5" id="scene-5">
						<div className="visual visual-custom-2 layer" data-depth="0.1">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-8.png")}
									className="visual-2"
									width="35%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-3 layer" data-depth="0.1">
							<Fade bottom>
								<img
									src={require("./src/img/background-main-chapter-8.png")}
									className="visual-3"
									width="35%"
									alt=""
								/>
							</Fade>
						</div>
					</div>
					<div className="section-content" style={{ position: "relative" }}>
						<div className="ui middle aligned stackable grid container">
							<div className="row">
								<div className="eight wide right floated column">
									<div className="images">
										<div className="image-1">
											<Image
												src={require("./src/img/section-5-chapter-3.png")}
												srcThumbnail={require("./src/img/thumbnail/section-5-chapter-3.png")}
												fluid
												alt="Гарантия"
											/>
										</div>
										<div className="image-2">
											<Image
												src={require("./src/img/section-5-chapter-2.png")}
												srcThumbnail={require("./src/img/thumbnail/section-5-chapter-2.png")}
												fluid
												alt="Гарантия"
											/>
										</div>
									</div>
								</div>
								<div className="eight wide column">
									<h1 className="ui header inverted">Гарантия</h1>
									<p className="lead small">
										Мы гордимся своей продукцией, ее едят наши внуки, дети и мы
										сами. Это главная гарантия нашего качества.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="ui inverted vertical segment section-6">
					<div className="ui container fluid">
						<div className="image-with-description">
							<div id="video-container" className="player cover-container" />
							<div className="description">
								<h1 className="ui header inverted">Попробуйте сами!</h1>
								<p className="lead small" style={{ maxWidth: "650px" }}>
									Закажите нашу продукцию онлайн, оформив заказ прямо на нашем
									сайте!
								</p>
								<Link to="/shop" className="ui button default big">
									Купить продукцию
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="ui vertical segment with-rotated-head section-contact">
					<div className="visuals-head visuals-6" id="scene-6">
						<div className="visual visual-default layer" data-depth="0.1">
							<Fade bottom>
								<img src={require("./src/img/geometry-1.png")} alt="" />
							</Fade>
						</div>
						<div className="visual visual-rotation layer" data-depth="0.4">
							<Fade bottom>
								<img
									src={require("./src/img/pelmeni-4.png")}
									className="visual-1"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-1 layer" data-depth="0">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-2.png")}
									className="visual-2"
									width="200px"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-2 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-3"
									width="700px"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-2 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-4"
									width="500px"
									alt=""
								/>
							</Fade>
						</div>
					</div>
					<div className="section-content">
						<ContactForm withTitle />
					</div>
				</div>
			</div>
		);
	}
}

export default IndexPage;
