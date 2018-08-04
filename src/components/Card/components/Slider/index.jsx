import React from "react";
import PropTypes from "prop-types";
import Image from "../../../Image";
import Carousel from "nuka-carousel";
import { CardContext } from "../../context";
import "./styles.css";

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.handleDimensions = this.handleDimensions.bind(this);
		this.renderRight = this.renderRight.bind(this);
		this.handleCarouselRef = this.handleCarouselRef.bind(this);
		this.renderLeft = this.renderLeft.bind(this);
		this.state = {
			carousel: null,
		}
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
		this.setState({ carousel })
	}

	renderLeft({ previousSlide }) {
		return (
			<button 
				className={`ui button icon slider-button`} 
				onClick={previousSlide}
			>
				<i className="ui icon angle left" />
			</button>
		)
	}

	renderRight({ nextSlide }) {
		return (
			<button 
				className={`ui button icon slider-button`} 
				onClick={nextSlide}
			>
				<i className="ui icon angle right" />
			</button>
		);
	}

	renderImages({ items }) {
		return items.map(({ image }) => image && (
			<Image
				src={image.src}
				srcThumbnail={image.srcThumbnail}
				onThumbnailLoaded={this.handleDimensions}
				fluid
			/>
		))
	}

	render() {
		const {
			width,
			heightMode,
			initialSlideHeight,
			initialSlideWidth,
		} = this.props;

		return (
			<CardContext.Consumer>
				{({ category, handleItem, selectedItem }) => {
					return (
						<Carousel
							ref={this.handleCarouselRef}
							heightMode={heightMode}
							width={width}
							slideIndex={category.items.map(item => item._id).indexOf(selectedItem)}
							initialSlideHeight={initialSlideHeight}
							afterSlide={(nextSlide) => handleItem(category.items[nextSlide]._id)}
							initialSlideWidth={initialSlideWidth}
							renderCenterLeftControls={(data) => data.currentSlide !== 0 ? this.renderLeft(data) : null}
							renderCenterRightControls={(data) => data.currentSlide !== category.items.length - 1 ? this.renderRight(data) : null}
						>
							{this.renderImages(category)}
						</Carousel>
					)
				}}
			</CardContext.Consumer>
		);
	}
}

Slider.propTypes = {
	width: PropTypes.oneOfType([
		PropTypes.string, 
		PropTypes.number
	]),
	heightMode: PropTypes.string,
	initialSlideHeight: PropTypes.number,
	initialSlideWidth: PropTypes.string,
}

Slider.defaultProps = {
	heightMode: "first",
	width: "100%",
	initialSlideHeight: 350,
	initialSlideWidth: "100%",
}

export default Slider;