import React from "react";

export default ({ step, onSetStep, cartLength }) => (
  <div className="ui container">
    <div className="ui steps">
      <div onClick={() => onSetStep(1)} className={`${step === 1 && "active"} step`}>
        <i className="truck icon"></i>
        <div className="content">
          <div className="title">Выбор</div>
          <div className="description">Выберите продукцию</div>
        </div>
      </div>
      <div onClick={() => onSetStep(2)} className={`${step === 2 && "active"} step ${cartLength === 0 && "disabled"}`}>
        <i className="pointing right icon"></i>
        <div className="content">
          <div className="title">Подтверждение</div>
          <div className="description">Подтвердите информацию</div>
        </div>
      </div>
      <div onClick={() => onSetStep(3)} className={`${step === 3 && "active"} step ${cartLength === 0 && "disabled"}`}>
        <i className="paragraph icon"></i>
        <div className="content">
          <div className="title">Форма</div>
          <div className="description">Заполните форму</div>
        </div>
      </div>
      <div onClick={() => onSetStep(4)} className={`${step === 4 && "active"} step disabled`}>
        <i className="info icon"></i>
        <div className="content">
          <div className="title">Заказ принят</div>
        </div>
      </div>
    </div>
  </div>
)