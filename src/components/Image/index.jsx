import React from "react";
import PropTypes from "prop-types";
import { loadImage } from "./utils";
import "./styles.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleThumbnailLoad = this.handleThumbnailLoad.bind(this);
    this.state = {
      isLoaded: false,
      cantLoad: false,
      isHydrating: false,
      loadedAttachment: null,
    };
  }

  componentDidMount() {
    const {
      src,
      srcThumbnail
    } = this.props;

    if (src && srcThumbnail) {
      loadImage(src)
        .then(this.handleLoad)
        .catch(this.handleError);

      return;
    }
  }

  handleClick() {
    const { onClick } = this.props;

    if (onClick && typeof onClick === "function") {
      onClick();
    }
  }

  handleLoad() {
    this.setState({ isLoaded: true });
  }

  handleError() {
    this.setState({ cantLoad: true });
  }

  handleThumbnailLoad() {
      const { onThumbnailLoaded } = this.props;
      
      if (onThumbnailLoaded && typeof onThumbnailLoaded === "function") {
        onThumbnailLoaded();
      }
  }

  render() {
    const {
      className,
      fluid,
      fallback,
      style,
      alt,
      src,
      srcThumbnail
    } = this.props;

    const {
      isLoaded,
      cantLoad,
    } = this.state;

    if (cantLoad) {
      if (fallback) {
        return fallback;
      }
      return (
        <div className="image-empty">
          <p>Не удалось загрузить изображение</p>
        </div>
      );
    }

    if (src && srcThumbnail) {
      return (
        <div
          onClick={this.handleClick}
          style={style}
          className={`
            image-component
            ${isLoaded && "loaded"}
            ${fluid && "fluid"}
            ${className}
          `}
        >
          <img
            src={srcThumbnail}
            onLoad={this.handleThumbnailLoad}
            className="thumbnail"
          />
          <picture className="trueImage">
            <img
              src={src}
              alt={alt}
            />
          </picture>
        </div>
      );
    }

    if (fallback) {
      return fallback;
    }

    return null;
  }
}

Image.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  fluid: PropTypes.bool,
  alt: PropTypes.string,
  fallback: PropTypes.element,
  style: PropTypes.object,
  src: PropTypes.string,
  srcThumbnail: PropTypes.string,
  onThumbnailLoaded: PropTypes.func,
};

Image.defaultProps = {
    onThumbnailLoaded: null,
  onClick: null,
  className: "",
  fluid: false,
  alt: null,
  fallback: null,
  style: {},
  src: null,
  srcThumbnail: null
};

export default Image;