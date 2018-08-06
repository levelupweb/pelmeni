import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.less";
import isFunction from "@utils/isFunction";
import loadImageAsync from "@utils/loadImageAsync";

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
    this.loadImage();
  }

  loadImage() {
    const {
      src,
      srcThumbnail
    } = this.props;

    if (src && srcThumbnail) {
      loadImageAsync(src)
        .then(this.handleLoad)
        .catch(this.handleError);
    }
  }

  handleClick() {
    const { onClick } = this.props;

    if (isFunction(onClick)) {
      onClick();
    }
  }

  handleLoad() {
    const { onLoad } = this.props;

    this.setState({ isLoaded: true }, () => 
      isFunction(onLoad) && onLoad()
    );
  }

  handleError() {
    const { onError } = this.props;

    this.setState({ cantLoad: true }, () => 
      isFunction(onError) && onError()
    );
  }

  handleThumbnailLoad() {
      const { onThumbnailLoaded } = this.props;
      
      if (isFunction(onThumbnailLoaded)) {
        onThumbnailLoaded();
      }
  }

  render() {
    const {
      className,
      fluid,
      fallback,
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
        <div className={styles.empty}>
          <p>Не удалось загрузить изображение</p>
        </div>
      );
    }

    if (src && srcThumbnail) {
      return (
        <div
          onClick={this.handleClick}
          className={`
            ${styles.wrapper}
            ${isLoaded && styles.loaded}
            ${fluid && styles.fluid}
            ${className}
          `}
        >
          <img
            src={srcThumbnail}
            onLoad={this.handleThumbnailLoad}
            className={styles.thumbnail}
          />
          <picture className={styles.true}>
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
  src: PropTypes.string,
  srcThumbnail: PropTypes.string,
  onThumbnailLoaded: PropTypes.func,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
};

Image.defaultProps = {
  onThumbnailLoaded: null,
  onClick: null,
  className: "",
  fluid: false,
  alt: null,
  fallback: null,
  src: null,
  srcThumbnail: null,
  onError: null,
  onLoad: null,
};

export default Image;