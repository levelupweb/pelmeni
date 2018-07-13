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
                <div className="social">
                  <div class="ui horizontal list massive">
                    <a class="item" target="_blank" rel="noopener norefferrer" href="https://vk.com/public166725755">
                      <i class="vk icon"></i>
                    </a>
                    <a class="item" target="_blank" rel="noopener norefferrer" href="https://ok.ru/group/54032234578140">
                    <i class="odnoklassniki icon"></i>
                    </a>
                    <a class="item" target="_blank" rel="noopener norefferrer" href="https://www.facebook.com/klassnye">
                      <i class="facebook icon"></i>
                    </a>
                    <a class="item" target="_blank" rel="noopener norefferrer" href="https://www.instagram.com/klassnye44/">
                      <i class="instagram icon"></i>
                    </a>
                  </div>
                </div>
                <div className="ui list text inverted">
                  <div className="item">
                    156012, г. Кострома, п. Новый, д. 3
                  </div>
                  <div className="map-expander" onClick={() => this.handleMap()}>
                    Показать на карте
                  </div>
                  <a className="item" href="tel:+79610080166">
                    <i className="icon ui phone"></i> +7 (961) 008-01-66
                  </a>
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