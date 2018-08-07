import React from "react";
import PropTypes from "prop-types";
import Shop from "@components/Shop";
import Page from "@components/Page";
import { withRouter } from "react-router-dom";

const renderTitle = path => {
	switch (path) {
	case "/shop":
		return "Выберите товар";
	case "/shop/cart":
		return "Подтвердите заказ";
	case "/shop/form":
		return "Оформите заказ";
	case "/shop/success":
		return "Готово!";
	default:
		return null;
	}
};

const renderDescription = path => {
	switch (path) {
	case "/shop":
		return `
      На этой странице вы с легкостью можете 
      заказать нашу продукцию онлайн
    `;
	case "/shop/cart":
		return `
      Подтвердите правильно ли составлен ваш заказ 
    `;
	case "/shop/form":
		return `
      Введите ваш номер телефона и мы свяжемся с вами в 
      течение 15 минут. Для ускорения процесса заказа 
      рекомендуем заполнить адрес доставки
    `;
	case "/shop/success":
		return `
      Ваш заказ был успешно оформлен. При необходимости 
      наш менеджер свяжется с вами для уточнения деталей.
    `;
	default:
		return null;
	}
};

const ShopPage = ({ location: { pathname } }) => (
	<Page
		text={["/shop/form"].indexOf(pathname) !== -1}
		title={renderTitle(pathname)}
		description={renderDescription(pathname)}
	>
		<Shop />
	</Page>
);

ShopPage.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default withRouter(ShopPage);
