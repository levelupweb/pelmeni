import React from "react";
import ContactForm from "@components/Form";
import Page from "@components/Page";

class Contact extends React.Component {
	render() {
		return (
			<Page
				text
				title="Обратная связь"
				description={`
          Оставьте свое пожелание или отзыв, заполнив форму обратной связи. Если вы хотите получить ответ, 
          обязательно укажите контактный E-mail адрес
        `}
			>
				<ContactForm />
			</Page>
		);
	}
}

export default Contact;
