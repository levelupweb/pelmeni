import React from "react";
import { Visibility } from "semantic-ui-react";

class Video extends React.Component {
	constructor(props) {
		super(props);
		this.handleVideoRef = this.handleVideoRef.bind(this);
		this.state = {
			video: null,
		};
	}

	handleVideoRef(video) {
		this.setState({ video });
	}

	render() {
		const { video } = this.state;

		return (
			<Visibility onTopVisible={() => video && video.play()}>
				<video loop ref={this.handleVideoRef}>
					<source type="video/mp4" src={require("./video/video-fallback.mp4")} />
					<source type="video/webm" src={require("./video/video.webm")} />
				</video>
			</Visibility>
		);
	}
}

export default Video;