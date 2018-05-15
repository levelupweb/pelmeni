import React from "react";
import Fade from "react-reveal/Fade";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./styles.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleMap = this.handleMap.bind(this);
    this.state = {
      isActive: false,
    }
  }

  handleMap() {
    this.setState(state => ({
      isActive: !state.isActive,
    }), () => {
      if (window && window.scrollBy) {
        window.scrollBy({ 
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }
    });
  }

  render() {
    const { isActive } = this.state;

    return (
      <div>
        <div className="ui vertical section-footer footer segment inverted">
          <div className="ui container">
            <div className="ui stackable equal height stackable grid">
              <div className="four wide column">
                <h4 className="ui header inverted">ИП Бондаренко А.А.
                  <div className="sub header">Copyright, 2018</div>
                </h4> 
                <p>
                  Все права защищены, все материалы, размещенные на сайте принадлежат ИП Бондаренко А.А.
                </p>
              </div>
              <div className="eight wide column">
                <div className="ui list text inverted">
                  <div className="item">
                    156012, г. Кострома, п. Новый, д. 3
                  </div>
                  <div className="map-expander" onClick={() => this.handleMap()}>
                    Показать на карте
                  </div>
                  <div className="item">
                    <i className="icon ui phone"></i> (4942) 51-53-07
                  </div>
                  <div className="item">
                    <a href="mailto:pfklassnye@rambler.ru">
                      pfklassnye@rambler.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className="four wide column">
                <h3 className="ui header inverted">
                  Разработка
                  <div className="sub header">
                    Разработано в <a href="http://levelupworlds.com" target="_blank">
                      Levelup Worlds
                    </a>
                  </div>
                  <div className="sub header">
                    <a href="mailto:levelupworlds@gmail.com">
                      levelupworlds@gmail.com
                    </a>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {isActive &&
          <div>
            <YMaps>
              <Map width="100%" height="600px" state={{ center: [57.80, 41.01], zoom: 14 }}>
                <Placemark
                  geometry={{
                    coordinates: [57.799390, 41.004859]
                  }}
                  properties={{
                    hintContent: 'Наш офис в Костроме',
                    balloonContent: 'Пельмени Классные. Офис в г. Костроме'
                  }}
                />
              </Map>
            </YMaps>
          </div>
        }
      </div>
    )
  }
}

export default Footer;