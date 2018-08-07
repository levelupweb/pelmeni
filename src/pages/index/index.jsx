import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "@components/Form";
import Image from "@components/Image";
import Fade from "react-reveal/Fade";
import "./src/styles.css";

class IndexPage extends React.Component {
	componentDidMount() {
		require("./src/script").default();
	}

	render() {
		return (
			<div className="index-page">
				<div className="ui inverted vertical segment section-1">
					<div className="section-content flex-column-start">
						<div className="visuals-head visuals-1" id="scene-1">
							<div className="visual visual-custom-0 layer" data-depth="0.2">
								<Fade bottom>
									<img
										src={require("./src/img/goroshek.png")}
										className="visual-1"
										alt=""
									/>
								</Fade>
							</div>
							<div className="visual visual-custom-1 layer" data-depth="0.1">
								<Fade top>
									<img
										src={require("./src/img/zelenka.png")}
										className="visual-2"
										alt=""
									/>
								</Fade>
							</div>
							<div className="visual visual-custom-3 layer" data-depth="0.3">
								<Fade bottom>
									<img
										src={require("./src/img/section-2-chapter-1.png")}
										className="visual-3"
										width="50%"
										alt=""
									/>
								</Fade>
							</div>
							<div className="visual visual-custom-4 layer" data-depth="0.4">
								<Fade top>
									<img
										src={require("./src/img/section-2-chapter-1.png")}
										className="visual-4"
										width="50%"
										alt=""
									/>
								</Fade>
							</div>
						</div>
						<div className="ui container jumbotron">
							<Fade bottom>
								<div className="logo">
									<img
										src={require("./src/img/logo-1.png")}
										className="logo-background"
										alt="Замороженные полуфабрикаты с доставкой на дом"
									/>
									<img
										className="logo-chief chief-animated"
										src={require("./src/img/logo-2.png")}
										alt="Замороженные полуфабрикаты с доставкой на дом"
									/>
								</div>
							</Fade>
							<Fade bottom>
								<h1 className="logo-header">
									Замороженные полуфабрикаты с доставкой на дом
								</h1>
							</Fade>
						</div>
					</div>
				</div>

				<div className="ui inverted vertical segment section-2">
					<div className="visuals-head visuals-2" id="scene-2">
						<div className="visual visual-rotation layer" data-depth="0.4">
							<Fade bottom>
								<img
									src={require("./src/img/pelmeni-2-shadow.png")}
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
									width="12%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-2 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-3"
									width="50%"
									alt=""
								/>
							</Fade>
						</div>
						<div className="visual visual-custom-3 layer" data-depth="0.2">
							<Fade bottom>
								<img
									src={require("./src/img/section-2-chapter-1.png")}
									className="visual-4"
									width="50%"
									alt=""
								/>
							</Fade>
						</div>
					</div>

					<div className="section-content">
						<div className="ui middle aligned stackable grid container">
							<div className="row">
								<div className="eight wide column">
									<Fade bottom>
										<h1 className="ui header inverted">Качество</h1>
										<p className="lead small">
											Мы производим полуфабрикаты исключительно из натуральных
											ингредиентов. Наша компания никогда не использовала в
											производстве добавки и консерванты!
										</p>
										<h1 className="ui header inverted">Вкус</h1>
										<p className="lead small">
											Натуральность и качество продуктов используемых при
											производстве, обеспечивают высочайшие вкусовые качества
											наших полуфабрикатов.
										</p>
									</Fade>
								</div>
								<div className="eight wide right floated column">
									<div className="images">
										<Fade bottom cascade>
											<div className="image-1">
												<Image
													src={require("./src/img/section-2-1.png")}
													srcThumbnail={require("./src/img/thumbnail/section-2-1.png")}
													fluid
													alt="Качество продукции"
												/>
											</div>
											<div className="image-2">
												<Image
													src={require("./src/img/section-2.png")}
													srcThumbnail={require("./src/img/thumbnail/section-2.png")}
													fluid
													alt="Качество продукции"
												/>
											</div>
										</Fade>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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
