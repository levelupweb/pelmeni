import React from "react";
import PropTypes from "prop-types";
import Image from "@components/Image";
import Carousel from "nuka-carousel";
import { CardContext } from "@components/Card/context";
import styles from "./styles.less";

import { Button, Icon } from "semantic-ui-react";

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.handleDimensions = this.handleDimensions.bind(this);
		this.renderRight = this.renderRight.bind(this);
		this.handleCarouselRef = this.handleCarouselRef.bind(this);
		this.renderLeft = this.renderLeft.bind(this);
		this.state = {
			carousel: null
		};
	}

	componentDidMount() {
		this.handleDimensions();
	}

	handleDimensions() {
		const { carousel } = this.state;

		if (carousel) {
			carousel.setDimensions();
		}
	}

	handleCarouselRef(carousel) {
		this.setState({ carousel });
	}

	renderLeft({ previousSlide }) {
		return (
			<Button onClick={previousSlide} className={styles.button} icon>
				<Icon name="angle left" />
			</Button>
		);
	}

	renderRight({ nextSlide }) {
		return (
			<Button onClick={nextSlide} className={styles.button} icon>
				<Icon name="angle right" />
			</Button>
		);
	}

	renderImages({ items }) {
		return items.map(
			({ image }) =>
				image && (
					<Image
						src={image.src}
						srcThumbnail={image.srcThumbnail}
						onThumbnailLoaded={this.handleDimensions}
						fluid
					/>
				)
		);
	}

	render() {
		const {
			width,
			heightMode,
			initialSlideHeight,
			initialSlideWidth
		} = this.props;

		return (
			<CardContext.Consumer>
				{({ category, handleItem, selectedItem }) => {
					return (
						<Carousel
							ref={this.handleCarouselRef}
							heightMode={heightMode}
							width={width}
							slideIndex={category.items
								.map(item => item._id)
								.indexOf(selectedItem)}
							initialSlideHeight={initialSlideHeight}
							afterSlide={nextSlide =>
								handleItem(category.items[nextSlide]._id)
							}
							initialSlideWidth={initialSlideWidth}
							renderCenterLeftControls={data =>
								data.currentSlide !== 0 ? this.renderLeft(data) : null
							}
							renderCenterRightControls={data =>
								data.currentSlide !== category.items.length - 1
									? this.renderRight(data)
									: null
							}
						>
							{this.renderImages(category)}
						</Carousel>
					);
				}}
			</CardContext.Consumer>
		);
	}
}

Slider.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	heightMode: PropTypes.string,
	initialSlideHeight: PropTypes.number,
	initialSlideWidth: PropTypes.string
};

Slider.defaultProps = {
	heightMode: "first",
	width: "100%",
	initialSlideHeight: 350,
	initialSlideWidth: "100%"
};

export default Slider;
