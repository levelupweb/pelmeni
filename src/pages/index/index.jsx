import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ContactForm from "@components/Form";
import Image from "@components/Image";
import Video from "./components/Video";
import Fade from "react-reveal/Fade";
import Page from "@components/Page";
import styles from "./styles.less";

import {
	Segment,
	Container,
	Header,
	Grid,
	Button,
	Responsive
} from "semantic-ui-react";

const IndexSegment = ({ visuals, content, className, withContainer, text }) => (
	<Segment inverted className={`${className} ${styles.segment}`}>
		<div className={styles.visuals}>{visuals}</div>
		<div className={styles.content}>
			{withContainer ? <Container text={text}>{content}</Container> : content}
		</div>
	</Segment>
);

IndexSegment.propTypes = {
	visuals: PropTypes.arrayOf(PropTypes.element),
	className: PropTypes.string,
	content: PropTypes.element.isRequired,
	withContainer: PropTypes.bool,
	text: PropTypes.bool
};

IndexSegment.defaultProps = {
	className: null,
	withContainer: true,
	visuals: [],
	text: false
};

const IndexPage = () => (
	<Page className={styles.pageWrapper} fluid={true}>
		<div className={styles.wrapper}>
			{/** 
			First slide
			Index slide with jumbotron
		*/}

			<IndexSegment
				className={styles.one}
				visuals={
					<React.Fragment>
						<div className={styles.visual}>
							<Fade top>
								<img
									src={require("./img/goroshek.png")}
									className={styles.visualOne}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade top>
								<img
									src={require("./img/zelenka.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade top>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualThree}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade top>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualFour}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade top>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualFive}
								/>
							</Fade>
						</div>
					</React.Fragment>
				}
				content={
					<div className={styles.jumbotron}>
						<Fade bottom>
							<div className={styles.logo}>
								<img
									src={require("./img/logo-1.png")}
									alt="Замороженные полуфабрикаты от производителя с доставкой на дом"
									className={styles.back}
								/>
								<img
									className={styles.chief}
									src={require("./img/logo-2.png")}
									alt="Замороженные полуфабрикаты от производителя с доставкой на дом"
								/>
							</div>
						</Fade>
						<Fade bottom>
							<div className={styles.titleWrapper}>
								<Header inverted as="h1" className={styles.primary}>
									Замороженные полуфабрикаты от производителя с доставкой на дом
								</Header>
							</div>
						</Fade>
					</div>
				}
			/>

			{/** 
			Second slide
		*/}

			<IndexSegment
				className={styles.two}
				visuals={
					<React.Fragment>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-2-chapter-2.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualThree}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualFour}
								/>
							</Fade>
						</div>
					</React.Fragment>
				}
				content={
					<Grid stackable>
						<Grid.Row columns="equal">
							<Grid.Column>
								<Fade bottom>
									<Header as="h1" inverted>
										Качество
									</Header>
									<p className="lead small">
										Мы производим полуфабрикаты исключительно из натуральных
										ингредиентов. Наша компания никогда не использовала в
										производстве добавки и консерванты!
									</p>
									<Header as="h1" inverted>
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
									<Fade>
										<div className={styles.imageOne}>
											<Image
												src={require("./img/section-2-1.png")}
												srcThumbnail={require("./img/thumbnail/section-2-1.png")}
												fluid
												alt="Качество продукции"
											/>
										</div>
									</Fade>
									<Fade bottom>
										<div className={styles.imageTwo}>
											<Image
												src={require("./img/section-2.png")}
												srcThumbnail={require("./img/thumbnail/section-2.png")}
												fluid
												alt="Качество продукции"
											/>
										</div>
									</Fade>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				}
			/>

			{/** 
			Third slide
		*/}

			<IndexSegment
				className={styles.three}
				visuals={
					<React.Fragment>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/background-main-chapter-8.png")}
									className={styles.visualOne}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/background-main-chapter-8.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
					</React.Fragment>
				}
				content={
					<React.Fragment>
						<Fade>
							<div className={styles.image}>
								<Image
									src={require("./img/section-3-chapter-1.jpg")}
									srcThumbnail={require("./img/thumbnail/section-3-chapter-1.jpg")}
									alt="Качество продукции"
								/>
							</div>
						</Fade>
						<Fade bottom>
							<div className={styles.title}>
								<Header textAlign="center" as="h1" inverted>
									Свежесть
								</Header>
								<p className="lead small">
									Свежее, только охлажденное мясо фермерских хозяйств,
									натуральное яйцо, лук, картошка, творог делают нашу продукцию
									вкусной, безопасной и полезной.
								</p>
							</div>
						</Fade>
					</React.Fragment>
				}
			/>

			{/** 
			Fourth slide
		*/}

			<IndexSegment
				className={styles.four}
				visuals={
					<React.Fragment>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualOne}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-2-chapter-1.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/section-4-chapter-4.png")}
									className={styles.visualThree}
								/>
							</Fade>
						</div>
					</React.Fragment>
				}
				content={
					<Grid stackable>
						<Grid.Row>
							<Grid.Column width={8}>
								<Fade bottom>
									<Header as="h1" inverted>
										Натуральность продуктов
									</Header>
									<p className="lead small">
										Тесто из муки высшего сорта замешанное на свежем яйце, его
										эластичность и вкусовые качества не оставят вас
										равнодушными.
									</p>
								</Fade>
							</Grid.Column>
							<Grid.Column width={8}>
								<div className={styles.images}>
									<Fade bottom>
										<div className={styles.imageOne}>
											<Image
												src={require("./img/section-4-chapter-1.jpg")}
												srcThumbnail={require("./img/thumbnail/section-4-chapter-1.jpg")}
												alt="Натуральность продуктов"
												fluid
											/>
										</div>
									</Fade>
									<Fade bottom>
										<div className={styles.imageTwo}>
											<Image
												src={require("./img/section-4-chapter-3.jpg")}
												srcThumbnail={require("./img/thumbnail/section-4-chapter-3.jpg")}
												alt="Натуральность продуктов"
												fluid
											/>
										</div>
									</Fade>
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				}
			/>

			{/** 
			Fifth slide
		*/}

			<IndexSegment
				className={styles.five}
				visuals={
					<React.Fragment>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/background-main-chapter-8.png")}
									className={styles.visualOne}
								/>
							</Fade>
						</div>
						<div className={styles.visual}>
							<Fade bottom>
								<img
									src={require("./img/background-main-chapter-8.png")}
									className={styles.visualTwo}
								/>
							</Fade>
						</div>
					</React.Fragment>
				}
				content={
					<Grid stackable>
						<Grid.Row>
							<Grid.Column width={8}>
								<div className={styles.images}>
									<Fade bottom>
										<div className={styles.imageOne}>
											<Image
												src={require("./img/section-5-chapter-3.png")}
												srcThumbnail={require("./img/thumbnail/section-5-chapter-3.png")}
												fluid
												alt="Гарантия"
											/>
										</div>
									</Fade>
									<Fade bottom>
										<div className={styles.imageTwo}>
											<Image
												src={require("./img/section-5-chapter-2.png")}
												srcThumbnail={require("./img/thumbnail/section-5-chapter-2.png")}
												fluid
												alt="Гарантия"
											/>
										</div>
									</Fade>
								</div>
							</Grid.Column>
							<Grid.Column width={8}>
								<Fade bottom>
									<Header as="h1" inverted>
										Гарантия
									</Header>
									<p className="lead small">
										Мы гордимся своей продукцией, ее едят наши внуки, дети и мы
										сами. Это главная гарантия нашего качества.
									</p>
								</Fade>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				}
			/>

			{/** 
			Sixth slide
		*/}

			<Responsive minWidth={1000}>
				<IndexSegment
					className={styles.six}
					withContainer={false}
					content={
						<React.Fragment>
							<div className={styles.video}>
								<Video />
							</div>
							<div className={styles.description}>
								<Header as="h1" inverted>
									Попробуйте сами
								</Header>
								<Link to="/shop">
									<Button size="big">Купить продукцию</Button>
								</Link>
							</div>
						</React.Fragment>
					}
				/>
			</Responsive>

			<IndexSegment
				text
				className={styles.seven}
				content={
					<React.Fragment>
						<ContactForm withTitle />
					</React.Fragment>
				}
			/>
		</div>
	</Page>
);

export default IndexPage;
